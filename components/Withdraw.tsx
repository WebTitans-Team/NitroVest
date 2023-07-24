import { Box, Divider, Spinner, Text } from "@chakra-ui/react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { RealEstateMarketplaceAddress } from "../Context/constants";

export default function WithdrawBalance() {
  const { contract } = useContract(RealEstateMarketplaceAddress);

  const { data: contractBalance, isLoading: contractBalanceLoading } =
    useContractRead(contract, "getBalance");

  return (
    <Box>
      <Divider />
      <Text fontWeight={"bold"} mt={10} fontSize={"3xl"}>
        Withdraw Contract Balance
      </Text>
      <Divider />
      <Box>
        <Text fontWeight={"bold"} mb={4} fontSize={"xl"}>
          Contract Balance
        </Text>
        {!contractBalanceLoading ? (
          <Text fontSize={"xl"}>
            {/* {ethers.utils.formatEther(contractBalance)}  */}0 MATIC
          </Text>
        ) : (
          <Spinner />
        )}
      </Box>
      <Web3Button
        contractAddress={RealEstateMarketplaceAddress}
        action={(contract) => contract.call("withdraw")}
      >
        Withdraw Balance
      </Web3Button>
    </Box>
  );
}
