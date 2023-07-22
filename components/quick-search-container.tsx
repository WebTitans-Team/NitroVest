import type { NextPage } from "next";

const QuickSearchContainer: NextPage = () => {
  return (
    <div className="w-full mx-auto mt-20 mb-32">
        <h2 className="w-full mx-auto text-21xl text-center mb-6 text-white">
          Quick Search
        </h2>

        <div className="w-full h-fit rounded-77xl bg-white shadow-[0px_24px_50px_rgba(0,_0,_0,_0.05)] 
              text-[#909090] flex flex-row px-12 py-6 box-border justify-around gap-8"
        > 
          <div className="w-1/5 flex flex-col items-start justify-start gap-2">
            <p className="">Location</p>
            <div className="flex flex-row items-center justify-start gap-2 text-black1">
              <img
                className="w-6 h-6"
                alt=""
                src="/location.svg"
              />
              <p className="font-semibold">
                Choose Location
              </p>
            </div>
          </div>

          <div className="w-1/5 flex flex-col items-start justify-start gap-2">
            <p className="">Property Type</p>
            <div className="w-full flex flex-row items-center justify-between gap-10 text-black1">
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="w-6 h-6"
                  alt=""
                  src="/car.svg"
                />
                <p className="font-semibold">
                  Land
                </p>
              </div>
              <img
                className="w-8 h-8"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>

          <div className="w-1/4 h-fit flex flex-col items-start justify-start gap-2 pl-5 border-l-[1px] border-solid border-text-and-main-gray-2">
            <p className="">Amount to Invest</p>
            <div className="w-full flex flex-row items-center justify-between gap-6 text-black1">
              <p className="font-semibold">
                2 ETH
              </p>
              <img
                className="w-8 h-8"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>

          <p className="rounded-77xl bg-mediumblue-100 w-40 h-[60px] flex flex-col p-2 items-center justify-center text-white">
            Search
          </p>

        </div>
    
    </div>
  );
};

export default QuickSearchContainer;
