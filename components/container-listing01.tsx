import type { NextPage } from "next";

type ContainerListing01Type = {
  productIds: string;
  title: string;
  description: string
};

const ContainerListing01: NextPage<ContainerListing01Type> = ({
  productIds,
  title,
  description,
}) => {
 

  return (
    <div
      className="bg-text-and-main-white flex flex-col p-4 box-border items-start justify-center gap-1 
           rounded font-title-heading-4"
    >
      <img
        className="w-16 h-16"
        alt=""
        src={productIds}
      />
      
      <p className="font-semibold text-5xl text-black-200">{title}</p>
      <p className="text-text-and-main-gray-2">
        {description}
      </p>
      
    </div>
  );
};

export default ContainerListing01;
