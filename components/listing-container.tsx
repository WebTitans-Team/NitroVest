import type { NextPage } from "next";
import ContainerListing01 from "./container-listing01";

const ListingContainer: NextPage = () => {
  return (
    <div className="absolute top-[659px] left-[4px] w-[1281px] h-[219px] flex flex-row items-center justify-start gap-[18px] text-left text-5xl text-black-200 font-title-heading-4">
      <div className="bg-text-and-main-white w-[301px] h-[219px] flex flex-col p-8 box-border items-start justify-center gap-[8px]">
        <img
          className="relative w-16 h-16 overflow-hidden shrink-0"
          alt=""
          src="/checklist.svg"
        />
        <div className="relative font-semibold">Listing #01</div>
        <div className="flex flex-col items-start justify-start text-lg text-text-and-main-gray-2">
          <div className="relative font-light inline-block w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <ContainerListing01 productIds="/money-bag.svg" />
      <ContainerListing01 productIds="/announcement.svg" propWidth="302px" />
      <div className="bg-text-and-main-white w-[310px] h-[219px] flex flex-col p-8 box-border items-start justify-center gap-[8px]">
        <img
          className="relative w-16 h-16 overflow-hidden shrink-0"
          alt=""
          src="/business-presentation.svg"
        />
        <div className="relative font-semibold">Listing #01</div>
        <div className="flex flex-col items-start justify-start text-lg text-text-and-main-gray-2">
          <div className="relative inline-block w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingContainer;
