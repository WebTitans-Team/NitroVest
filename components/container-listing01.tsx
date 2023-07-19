import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ContainerListing01Type = {
  productIds?: string;

  /** Style props */
  propWidth?: Property.Width;
};

const ContainerListing01: NextPage<ContainerListing01Type> = ({
  productIds,
  propWidth,
}) => {
  const divStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="bg-text-and-main-white w-[311px] h-[219px] flex flex-col p-8 box-border items-start justify-center gap-[8px] text-left text-5xl text-black-200 font-title-heading-4"
      style={divStyle}
    >
      <img
        className="relative w-16 h-16 overflow-hidden shrink-0"
        alt=""
        src={productIds}
      />
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="relative font-semibold">Listing #01</div>
        <div className="relative text-lg text-text-and-main-gray-2 inline-block w-[300px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
};

export default ContainerListing01;
