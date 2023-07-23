import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import { ethers } from 'ethers';
import { CustomNFTContractABI } from './constants'; 

const nftContractAddress = '0x...'; // Replace with the actual NFT contract address

// Create the context
export const CustomNFTContext = createContext();

// Create the provider
export const CustomNFTProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [nftContract, setNFTContract] = useState(null);
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    // Initialize Web3
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setCurrentAccount(accounts[0]);

          // Initialize the NFT contract
          const contractInstance = new web3Instance.eth.Contract(CustomNFTABI, nftContractAddress);
          setNFTContract(contractInstance);
        } catch (error) {
          console.error('Error while initializing Web3:', error);
        }
      } else {
        console.error('Web3 not found. Please install MetaMask or use a Web3-enabled browser.');
      }
    };

    initWeb3();
  }, []);

  return (
    <CustomNFTContext.Provider
      value={{
        web3,
        nftContract,
        currentAccount,
      }}
    >
      {children}
    </CustomNFTContext.Provider>
  );
};
