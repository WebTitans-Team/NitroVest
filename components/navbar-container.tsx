import type { NextPage } from "next";
import Link from "next/link";

import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { RealEstateMarketplaceAddress } from "../Context/constants";

const NavbarContainer: NextPage = () => {
  const address = useAddress();

  const { contract } = useContract(RealEstateMarketplaceAddress);

  const { data: owner, isLoading: isLoadingOwner } = useContractRead(
    contract,
    "owner"
  );
  return (
    <div className="w-full mx-auto my-8 flex flex-row justify-between items-center gap-3">
      <div className="text-[27.15px] text-white">
        <b>Nitro</b>
        <span className="font-light font-title-heading-4">Vest</span>
      </div>

      <ul
        className={`flex flex-row justify-center items-center gap-8 list-none`}
      >
        {[
          ["Home", "/"],
          ["Contact", "/"],
          ["Listings", "/listing"],
          ["Aunctions", "/"],
        ].map(([list, url], index) => (
          <li key={index}>
            <Link href={`${url}`} className="text-gray-500 no-underline">
              {list}
            </Link>
          </li>

          
        ))}

      </ul>

      <div className="flex flex-row items-center justify-between gap-2 text-lg text-mediumblue-100">
        {!isLoadingOwner && owner === address && (
          <Link href={"/admin"}>
            <Button mr={4}>Admin Page</Button>
          </Link>
        )}
        <ConnectWallet />