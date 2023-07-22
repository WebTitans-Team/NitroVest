import type { NextPage } from "next";
import ContainerListing01 from "./container-listing01";

const ListingContainer: NextPage = () => {
  return (
    <div className="w-full h-fit mx-auto flex flex-row items-center justify-between gap-4">

      <ContainerListing01 productIds="/checklist.svg" title={'Listing #01'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
      <ContainerListing01 productIds="/money-bag.svg" title={'Listing #01'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
      <ContainerListing01 productIds="/announcement.svg"  title={'Listing #01'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
      <ContainerListing01 productIds="/business-presentation.svg" title={'Listing #01'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
    
    </div>
  );
};

export default ListingContainer;
