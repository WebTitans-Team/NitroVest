import type { NextPage } from "next";

const SearchListContainer: NextPage = () => {
  return (
    <div className="w-[1260px] flex flex-col items-center justify-center text-left text-lg text-text-and-main-gray-2 font-title-heading-4">
      <div className="relative w-[1260px] h-[214px]">
        <div className="absolute h-[61.21%] w-full top-[38.79%] right-[0%] bottom-[0%] left-[0%] rounded-77xl bg-white shadow-[0px_24px_50px_rgba(0,_0,_0,_0.05)] [backdrop-filter:blur(4px)] flex flex-row p-8 box-border items-center justify-center gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative">Location</div>
            <div className="rounded-2xl flex flex-row items-center justify-start text-black1">
              <div className="w-48 h-[27px] flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/location.svg"
                />
                <div className="relative font-medium inline-block w-40 shrink-0">
                  Choose Location
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative">Property Type</div>
            <div className="rounded-2xl flex flex-row items-center justify-start gap-[24px] text-black1">
              <div className="w-[152px] h-[27px] flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/car.svg"
                />
                <div className="relative font-medium inline-block w-[120px] shrink-0">
                  Land
                </div>
              </div>
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
          <div className="relative box-border w-px h-[61px] opacity-[0.5] border-r-[1px] border-solid border-text-and-main-gray-2" />
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative">Amount to Invest</div>
            <div className="rounded-2xl flex flex-row items-center justify-start gap-[24px] text-black1">
              <div className="rounded-2xl flex flex-row items-center justify-start">
                <div className="relative font-medium inline-block w-[218px] shrink-0">
                  2 ETH
                </div>
              </div>
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="rounded-77xl bg-mediumblue-100 w-40 h-[60px] flex flex-row p-2 box-border items-center justify-center text-white">
            <div className="relative">Search</div>
          </div>
        </div>
        <div className="absolute h-[24.77%] w-[22.62%] top-[0%] left-[41.43%] text-21xl text-white inline-block [-webkit-text-stroke:1px_#000]">
          Quick Search
        </div>
      </div>
    </div>
  );
};

export default SearchListContainer;
