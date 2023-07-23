// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract CustomNFT is ERC721Enumerable {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    mapping(uint256 => string) private _tokenMetadata;

    function mint(address to, uint256 tokenId) external {
        _mint(to, tokenId);
    }

    function _setTokenMetadata(uint256 tokenId, string memory metadata) internal {
        _tokenMetadata[tokenId] = metadata;
    }

    function getTokenMetadata(uint256 tokenId) external view returns (string memory) {
        return _tokenMetadata[tokenId];
    }
}


contract RealEstateMarketplace {

    uint256 public contractFeePercentage;
    address public owner;
    Property[] public properties;

    struct Property {
        string[4] details; // An array to store name, description, propertyAddress, and propertyType
        uint256 areaInSqFt;
        address owner;
        uint256 listingPrice;
        uint256 totalTokens; // Total NFT fractions representing the property
        uint256 tokenPrice; // Price per NFT fraction representing the property
        uint256 tokensSold; // Number of NFT fractions sold
        CustomNFT nft; // ERC721 NFT representing the property
        uint256 equity;
        bool allowPartial; // Whether partial purchases are allowed
    }

    mapping(uint256 => mapping(address => uint256)) public tokenBalances;
    mapping(address => uint256[]) public userOwnedTokens;
    mapping(address => uint256[]) public propertyOwnerListings;
    mapping(uint256 => uint256) public propertyInvestorsCount;

    event PropertyListed(uint256 propertyId);
    event PropertyTokenized(uint256 propertyId, address investor, uint256 tokensAmount);
    event PropertyPurchased(uint256 propertyId, address buyer, uint256 tokensAmount);

    event ContractFeePercentageUpdated(uint256 newPercentage);
    event Withdraw(address receiver, uint256 amount);

    constructor(uint256 _percentageFee) {
        owner = payable(msg.sender);
        contractFeePercentage = _percentageFee;
    }

    // Modifier to differentiate between buying tokens and purchasing the entire property
    modifier checkPartial(uint256 _propertyId, uint256[] calldata _tokenIds) {
        uint256 _tokensAmount = _tokenIds.length;

        if (properties[_propertyId].allowPartial) {
            require(properties[_propertyId].tokensSold + _tokensAmount <= properties[_propertyId].totalTokens, "Not enough tokens available.");
            require(_tokensAmount > 0, "low amount");
        } else {
            require(properties[_propertyId].tokensSold == properties[_propertyId].totalTokens, "Property not fully tokenized.");
        }
        _;
    }

        // Function to create and list a new property on the marketplace
    function createAndListProperty(
        string[4] memory _details,
        uint256 _areaInSqFt,
        uint256 _listingPrice,
        uint256 _totalTokens,
        address _owner,
        bool _allowPartial
    ) external {
        require(msg.sender == owner, "Not authorized");

        // Create a new ERC721 token for the property
        CustomNFT newNFT = new CustomNFT("PropertyToken", "PTK");
        uint256 tokenPrice_ = _listingPrice / _totalTokens;
        properties.push(
            Property({
                details: _details,
                areaInSqFt: _areaInSqFt,
                owner: _owner,
                listingPrice: _listingPrice,
                totalTokens: _totalTokens,
                tokenPrice: tokenPrice_,
                tokensSold: 0,
                nft: newNFT,
                equity: _listingPrice,
                allowPartial: _allowPartial 
            })
        );

            uint256 propertyId = properties.length - 1;

        // Store the property ID in the propertyOwnerListings mapping for the property owner
        propertyOwnerListings[_owner].push(propertyId);

        emit PropertyListed(propertyId);

        // Mint tokens to the property owner
        for (uint256 i = 0; i < _totalTokens; i++) {
            uint256 tokenId = properties.length * 1000 + i; // Create unique tokenIds
            newNFT.mint(_owner, tokenId);
            tokenBalances[propertyId][_owner]++;
            userOwnedTokens[_owner].push(tokenId);
        }
    }

        // Function to buy NFT fractions representing a portion of the property
    function buyProperty(uint256 _propertyId, uint256[] calldata _tokenIds) external payable checkPartial(_propertyId, _tokenIds) {
        Property storage property = properties[_propertyId];
        uint256 _tokensAmount = _tokenIds.length;

        uint256 totalPrice = property.tokenPrice * _tokensAmount;
        uint256 contractFee = (totalPrice * contractFeePercentage) / 100;

        require(msg.value >= totalPrice, "Insufficient Ether");

        // Calculate the amount to be paid to the property owner (excluding contract fee)
        uint256 ownerPayment = totalPrice - contractFee;

        // Transfer the payment to the contract (including the contract fee)
        payable(address(this)).transfer(totalPrice);

        // Transfer the payment (excluding the contract fee) to the property owner
        payable(property.owner).transfer(ownerPayment);

        // Transfer the NFT fractions to the buyer and update userOwnedTokens mapping
        for (uint256 i = 0; i < _tokensAmount; i++) {
            uint256 tokenId = _tokenIds[i];
            require(property.nft.ownerOf(tokenId) == property.owner, "Token not owned by property owner");
            property.nft.transferFrom(property.owner, msg.sender, tokenId);
            tokenBalances[_propertyId][property.owner]--;
            tokenBalances[_propertyId][msg.sender]++;
            userOwnedTokens[msg.sender].push(tokenId); // Update buyer's owned tokens
        }

        property.tokensSold += _tokensAmount;
        property.equity -= totalPrice;

        emit PropertyTokenized(_propertyId, msg.sender, _tokensAmount);
    }

         // Function to get investors count for all properties listed by the sender
    function getUserListedPropertyInvestorsCount() public view returns (uint256[] memory) {
        uint256[] memory investorsCounts = new uint256[](properties.length);

        for (uint256 i = 0; i < properties.length; i++) {
            investorsCounts[i] = propertyInvestorsCount[i];
        }

        return investorsCounts;
    }

        // Function to get user profile, showing owned tokens/properties
    function getUserProfile() public view returns (uint256[] memory) {
        return userOwnedTokens[msg.sender];
    }

        // Function to get property owner profile, showing listings and investors count
    function getPropertyOwnerProfile() public view returns (uint256[] memory, uint256[] memory) {
        return (propertyOwnerListings[msg.sender], getUserListedPropertyInvestorsCount());
    }

        // Function to calculate the current equity for a property
    function getEquity(uint256 _propertyId) external view returns (uint256) {
        Property storage property = properties[_propertyId];
        uint256 totalEquity = property.listingPrice - (property.tokensSold * property.tokenPrice);
        return totalEquity;
    }

    function resetContractFeePercentage(uint256 _fee) external {
        require(msg.sender == owner, "Not authorized");
        contractFeePercentage = _fee;
        emit ContractFeePercentageUpdated(_fee);
    }

    // Function to withdraw the contract's balance (only contract owner can call this function)
    function withdraw() external {
        require(msg.sender == owner, "Not authorized");
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");

        (bool success, ) = payable(owner).call{value: balance}("");
        require(success, "Withdrawal failed");
        emit Withdraw(owner, balance);
    }
}