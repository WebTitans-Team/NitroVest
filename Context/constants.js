// Import the CustomNFT ABI from the JSON file
import CustomNFT from './CustomNFT.json';
import RealEstateMarketplace from './RealEstateMarketplace.json';

export const RealEstateMarketplaceAddress = "0x021CE8a391AFBb60759230F0af6940470Ac1EC2f";

export const CustomNFTAddress = "0xd52558A97307F9Cc748D02D0CA70f1F27Bd9FE1f";

// Use a different variable name for the imported JSON ABI
export const CustomNFTABI = CustomNFT.abi;
export const RealEstateMarketplaceABI = RealEstateMarketplace.abi;
