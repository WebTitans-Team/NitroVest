// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NitroVest {
    struct PropertyDetails {
        string name;
        string description;
        string propertyAddress;
        uint256 price;
        uint256 areaInSqFt;
        string propertyType;
        address ownerAddress;
    }

    mapping(uint256 => PropertyDetails) public properties;
    uint256 public propertyCount;

    event PropertyAdded(
        uint256 indexed id,
        string name,
        string description,
        string propertyAddress,
        uint256 price,
        uint256 areaInSqFt,
        string propertyType,
        address indexed ownerAddress
    );

    function addPropertyToList(
        string memory _name,
        string memory _description,
        string memory _propertyAddress,
        uint256 _price,
        uint256 _areaInSqFt,
        string memory _propertyType
    ) public {
        propertyCount++;
        properties[propertyCount] = PropertyDetails(
            _name,
            _description,
            _propertyAddress,
            _price,
            _areaInSqFt,
            _propertyType,
            msg.sender
        );
        emit PropertyAdded(
            propertyCount,
            _name,
            _description,
            _propertyAddress,
            _price,
            _areaInSqFt,
            _propertyType,
            msg.sender
        );
    }

    function getPropertyDetails(uint256 _id)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            string memory,
            address
        )
    {
        PropertyDetails memory propertyDetails = properties[_id];
        return (
            propertyDetails.name,
            propertyDetails.description,
            propertyDetails.propertyAddress,
            propertyDetails.price,
            propertyDetails.areaInSqFt,
            propertyDetails.propertyType,
            propertyDetails.ownerAddress
        );
    }
}
