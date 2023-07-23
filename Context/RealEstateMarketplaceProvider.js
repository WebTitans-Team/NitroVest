import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

// Internal Imports
import { RealEstateMarketplaceABI, RealEstateMarketplaceAddress} from './constants';

// Fetching smart contract
const fetchContract = (signerOrProvider) =>
new ethers.Contract(RealEstateMarketplaceAddress, RealEstateMarketplaceABI, signerOrProvider);



// const RealEstateMarketplaceAddress = '0xbc7EeFd57B5F13bC4C4BEaF82A857c460029cCC0'; // Replace with the actual contract address


// Create a context to hold the RealEstateMarketplace contract instance and functions
const RealEstateMarketplaceContext = createContext();

// Provider component to wrap the app with the RealEstateMarketplaceContext
export const RealEstateMarketplaceProvider = ({ children }) => {

  const titleData = 'Crowd Funding Contract';
  const [currentAccount, setCurrentAccount] = useState('');

  // State to hold the RealEstateMarketplace contract instance
  const [realEstateContract, setRealEstateContract] = useState(null);
  
  // Function to create and list a new property on the marketplace
  const createAndListProperty = async (
    _details,
    _areaInSqFt,
    _listingPrice,
    _totalTokens,
    _owner,
    _allowPartial
  ) => {
    try {
      // Check if the contract instance exists
      if (!realEstateContract) {
        throw new Error('RealEstateMarketplace contract not initialized');
      }

      // Check if the sender is authorized (only contract owner can call this function)
      const isAuthorized = await realEstateContract.callStatic.createAndListProperty(
        _details,
        _areaInSqFt,
        _listingPrice,
        _totalTokens,
        _owner,
        _allowPartial
      );

      if (!isAuthorized) {
        throw new Error('Not authorized');
      }

      // Call the contract function
      const transaction = await realEstateContract.createAndListProperty(
        _details,
        _areaInSqFt,
        _listingPrice,
        _totalTokens,
        _owner,
        _allowPartial
      );

      // Wait for the transaction to be mined
      await transaction.wait();

      console.log('Property listed successfully');
    } catch (error) {
      console.error('Failed to list property:', error);
    }
  };



// Function to buy NFT fractions representing a portion of the property
const buyProperty = async (_propertyId, _tokenIds) => {
  try {
    // Check if the contract instance exists
    if (!realEstateContract) {
      throw new Error('RealEstateMarketplace contract not initialized');
    }

    // Call the contract function
    const transaction = await realEstateContract.buyProperty(_propertyId, _tokenIds, {
      from: YOUR_SENDER_ADDRESS, // Replace this with the address of the buyer
      value: YOUR_AMOUNT_IN_WEI, // Replace this with the amount in wei that the buyer wants to send with the transaction
    });

    // Wait for the transaction to be mined
    await transaction.wait();

    console.log('Property purchased successfully');
  } catch (error) {
    console.error('Failed to purchase property:', error);
  }
};

// Function to withdraw the contract's balance
const withdrawBalance = async () => {
  try {
    // Check if the contract instance exists
    if (!realEstateMarketplaceContract) {
      throw new Error('RealEstateMarketplace contract not initialized');
    }

    // Call the contract's withdraw function
    const transaction = await realEstateMarketplaceContract.withdraw({
      from: YOUR_CONTRACT_OWNER_ADDRESS, // Replace this with the address of the contract owner
    });

    // Wait for the transaction to be mined
    await transaction.wait();

    console.log('Contract balance withdrawn successfully');
  } catch (error) {
    console.error('Failed to withdraw contract balance:', error);
  }
};

// Function to initialize the RealEstateMarketplace contract when the component is mounted
const initContract = async () => {
  try {
    // Check if window.ethereum is available
    if (!window.ethereum) {
      throw new Error('Metamask not found. Please install Metamask extension.');
    }

    // Initialize the provider and signer with the current Ethereum provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
   
      

    // Create a new contract instance
    const realEstateContract = new ethers.Contract(
      RealEstateMarketplaceAddress,
      RealEstateMarketplaceABI,
      signer
    );

    // Set the contract instance in the state
    setRealEstateContract(realEstateContract);
  } catch (error) {
    console.error('Failed to initialize RealEstateMarketplace contract:', error);
  }
};

// Initialize the RealEstateMarketplace contract when the component is mounted
useEffect(() => {
  initContract();
}, []);

  

  return (
    <RealEstateMarketplaceContext.Provider
      value={{
        titleData,
        currentAccount,
        createAndListProperty,
        buyProperty,
        withdrawBalance, // Add the withdrawBalance function to the provider's value
      }}
    >
      {children}
    </RealEstateMarketplaceContext.Provider>
  );
};

// Custom hook to access the RealEstateMarketplace context
export const useRealEstateMarketplace = () => useContext(RealEstateMarketplaceContext);
