import type { NextPage } from "next";

const DetailsContainer: NextPage = () => {
  return (
    <div className="w-full mt-8 bg-white [backdrop-filter:blur(4px)] text-black-200 font-title-heading-4">
      <div className="w-11/12 mx-auto mt-2 pb-2 flex flex-row justify-between items-center border-b-[1px] border-solid border-black-100" >
        <div className="flex flex-row items-center gap-3">
          <img
            className="w-16 h-16 rounded-full"
            alt="avatar"
            src="/unsplashxhvpwcr5grq@2x.png"
          />
          <div className="">
            <p>@samanthaw</p>
            <p className="text-4xl font-semibold">Listing #01</p>
          </div>
        </div>

        <div className=" text-gray">
          <p>Current Bid</p>
          <p className="text-4xl font-semibold text-black-100">
            1.00 ETH
          </p>
        </div>
      </div>

      <div className="w-11/12 mx-auto my-2 flex flex-row items-center justify-center gap-3">
        <p className="w-[45%] h-12 text-white bg-mediumblue-100 font-semibold flex flex-col items-center justify-center">
          Bid Now
        </p>

        <p className="w-[45%] h-12 flex flex-col items-center justify-center text-black-200 font-semibold">
          View Details
        </p>
      </div>
    </div>
  );
};

export default DetailsContainer;
