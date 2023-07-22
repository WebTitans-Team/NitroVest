import type { NextPage } from "next";
import ListingContainer from "./listing-container";
import DetailsContainer from "./details-container";

const WelcomeContainer: NextPage = () => {
  return (
    <div className="-full mx-auto mb-16 text-black-200">
      <div className="w-full h-fit flex flex-row justify-between items-center gap-4 mb-14">
        <div className="w-[45%] rounded-t-291xl-5 rounded-b-none shadow-[0px_24px_5,_0,_0,_0.1)] 
            border-[1px] border-solid border-white"
        >
          <img
            className="w-full object-fill rounded-t-291xl-5 rounded-b-none"
            alt=""
            src="/border@2x.png"
          />
        </div>

        <div className="w-2/4 text-white">
          <h2 className="w-10/12 text-[36px] [-webkit-text-stroke:1px_#000] font-title-heading-4">
            Everyone is welcome to invest in real estate !
          </h2>
          <p className="leading-[160%]">
            Welcome to NitroVest, your reliable and trusted platform to access
            investment opportunities in the real estate market around the world. Get
            started, setup your account to start buying or listing today!
          </p>
          <DetailsContainer />
        </div>

      </div>
     
      <ListingContainer />
    </div>
  );
};

export default WelcomeContainer;
