import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { useState } from "react";
import Link from "next/link";
import { RealEstateMarketplaceAddress } from "../Context/constants";
import WithdrawBalance from "./Withdraw";

export default function CreactAndList() {
  const [details, setDetails] = useState([]);
  const [AreaInSqFt, setAreaInSqFt] = useState(0);
  const [ListingPrice, setListingPrice] = useState(0);
  const [TotalTokens, setTotalTokens] = useState(0);
  const [PropertyOwner, setPropertyOwner] = useState("");
  const [allowPartial, setAllowPartial] = useState(false);
  const [contractAddress, setContractAddress] = useState("");
  const [tokenId, setTokenId] = useState(0);

  const address = useAddress();

  const { contract } = useContract(RealEstateMarketplaceAddress);

  const { data: owner, isLoading: isLoadingOwner } = useContractRead(
    contract,
    "owner"
  );

  return (
    <Container maxW={"1400px"} py={8}>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Real Estate Market
          </Text>
        </Link>
        <Flex flexDirection={"row"} alignItems={"center"}>
          {!isLoadingOwner && owner === address && (
            <Link href={"/admin"}>
              <Button mr={4}>Admin Page</Button>
            </Link>
          )}
          <ConnectWallet />
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={10} minH={"60vh"}>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Card p={4} mt={4} mr={10} w={"90%"}>
            <Text fontWeight={"bold"} mb={4} fontSize={"xl"}>
              List property
            </Text>
            <Stack spacing={4} mt={4}>
              <Box>
                <Text>Property Discription:</Text>
                <Input
                  placeholder={
                    "name, discription, propertyAddress, propertyType"
                  }
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </Box>
              <Box>
                <Text> Property AreaInSqFt:</Text>
                <Input
                  placeholder={"0"}
                  type="number"
                  value={AreaInSqFt}
                  onChange={(e) => setAreaInSqFt(e.target.value)}
                />
              </Box>
              <Box>
                <Text> Listing Price:</Text>
                <Input
                  placeholder={"Total Price in ETH"}
                  type="number"
                  value={ListingPrice}
                  onChange={(e) => setListingPrice(parseInt(e.target.value))}
                />
              </Box>
              <Box>
                <Text> Total Tokens:</Text>
                <Input
                  placeholder={"No of Tokens"}
                  type="number"
                  value={TotalTokens}
                  onChange={(e) => setTotalTokens(e.target.value)}
                />
              </Box>
              <Box>
                <Text> Property Owner:</Text>
                <Input
                  placeholder={"owner"}
                  type="text"
                  value={PropertyOwner}
                  onChange={(e) => setPropertyOwner(e.target.value)}
                />
              </Box>
              <Box>
                <Text> allowPartial:</Text>
                <Input
                  type="checkbox"
                  value={allowPartial}
                  onChange={(e) => setAllowPartial(e.target.value)}
                />
              </Box>
              <Web3Button
                contractAddress={RealEstateMarketplaceAddress}
                action={(contract) =>
                  contract.call("createAndListProperty", [
                    details,
                    AreaInSqFt,
                    ListingPrice,
                    TotalTokens,
                    PropertyOwner,
                    allowPartial,
                  ])
                }
                // onSuccess={reset}
              >
                list property
              </Web3Button>
            </Stack>
          </Card>
        </Flex>
        <Flex>
          <Card p={4} mt={4} mr={10} w={"90%"}>
            <Text fontWeight={"bold"} mb={4} fontSize={"xl"}>
              Contract Approval
            </Text>
            <Stack spacing={4} mt={4}>
              <Box>
                <Text>Property contract Address:</Text>
                <Input
                  placeholder={"propertyAddress"}
                  type="text"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                />
              </Box>
              <Box>
                <Text> Token Id:</Text>
                <Input
                  placeholder={"0"}
                  type="number"
                  value={tokenId}
                  onChange={(e) => setTokenId(parseInt(e.target.value))}
                />
              </Box>
              <Web3Button
                contractAddress={RealEstateMarketplaceAddress}
                action={(contract) => contract.call("approved")}
              >
                Approved NFT
              </Web3Button>
            </Stack>
            <WithdrawBalance />
          </Card>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
