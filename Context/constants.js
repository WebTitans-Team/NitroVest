// Import the CustomNFT ABI from the JSON file
import CustomNFT from './CustomNFT.json';
import RealEstateMarketplace from './RealEstateMarketplace.json';

export const RealEstateMarketplaceAddress = "0x52D3275A192429b33EBd6D375271bA109F22DFB6";

export const CustomNFTAddress = "0xF9fa3520ea9637cC61baf037f7FB285685bf0504";

// Use a different variable name for the imported JSON ABI
export const CustomNFTABI = CustomNFT.abi;
export const RealEstateMarketplaceABI = RealEstateMarketplace.abi;
