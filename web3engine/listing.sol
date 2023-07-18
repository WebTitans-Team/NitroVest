// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract RealEstatePropertyListing {

  struct PropertyDetails {
    string name;
    string description;
    uint256 price;
    uint256 areaInSqFt; // Specify area in Square Feet/Foot 
    string propertyType; // Villa, Flat, etc
    address ownerAddress;
  }

  mapping(uint256 => PropertyDetails) public properties;
  uint256 public PropertyCount;

  event PropertyAdded(uint256 indexed id, string name, string description, uint256 price, uint256 areaInSqFt, string propertyType, address indexed ownerAddress);

  function addPropertyToList(string memory _name, string memory _description, uint256 _price, uint256 _areaInSqFt, string memory _propertyType) public {
    PropertyCount++;
    properties[PropertyCount] = PropertyDetails(_name, _description, _price, _areaInSqFt, _propertyType, msg.sender);
    emit PropertyAdded(PropertyCount, _name, _description, _price, _areaInSqFt, _propertyType, msg.sender);
  }

  function getPropertyDetails(uint256 _id) public view returns (
    string memory,
    string memory,
    uint256,
    uint256,
    string memory,
    address
  ) {
    PropertyDetails memory propertyDetails = properties[_id];
    return (
        propertyDetails.name,
        propertyDetails.description,
        propertyDetails.price,
        propertyDetails.areaInSqFt,
        propertyDetails.propertyType,
        propertyDetails.ownerAddress
    );
  }
}




