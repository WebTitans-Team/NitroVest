import { ethers } from 'ethers';
import { CrowdFundingAddress } from '../Context/constants';

export const createCampaign = async (campaign, abi) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CrowdFundingAddress, abi, signer);

    const tx = await contract.createCampaign(
      campaign.title,
      campaign.description,
      campaign.amount,
      campaign.deadline
    );

    // Wait for the transaction to be mined
    await tx.wait();

    // Return any relevant data from the transaction or contract interaction
    return { success: true, message: 'Campaign created successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
