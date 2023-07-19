import type { NextPage } from "next";
import ListingContainer from "./listing-container";
import DetailsContainer from "./details-container";

const WelcomeContainer: NextPage = () => {
  return (
    <div className="relative w-[1286px] h-[878px] text-left text-5xl text-black-200 font-title-heading-4">
      <div className="absolute h-[66.06%] w-[44.63%] top-[0%] right-[55.37%] bottom-[33.94%] left-[0%] rounded-t-291xl-5 rounded-b-none shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] box-border flex flex-col py-5 px-0 items-center justify-start border-[1px] border-solid border-white">
        <img
          className="relative rounded-t-291xl-5 rounded-b-none w-[644px] h-[628px] object-cover"
          alt=""
          src="/border@2x.png"
        />
      </div>
      <ListingContainer />
      <div className="absolute h-[7.7%] w-[44.79%] top-[16.9%] left-[51.79%] text-base leading-[160%] text-white inline-block">
        Welcome to NitroVest, your reliable and trusted platform to access
        investment opportunities in the real estate market around the world. Get
        started, setup your account to start buying or listing today!
      </div>
      <div className="absolute h-[11.85%] w-[44.87%] top-[3.08%] left-[51.01%] text-21xl text-white inline-block [-webkit-text-stroke:1px_#000]">
        Everyone is welcome to invest in real estate !
      </div>
      <DetailsContainer />
    </div>
  );
};

export default WelcomeContainer;
