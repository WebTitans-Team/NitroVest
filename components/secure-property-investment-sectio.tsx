import type { NextPage } from "next";

const SecurePropertyInvestmentSectio: NextPage = () => {
  return (
    <div className="w-full mx-auto mt-16 mb-20 flex flex-row items-center justify-between">

      <div className="w-[45%]">
        <h1 className="w-full text-[36px] font-title-heading-4">
          Secure Property Investment
        </h1>
        <p className="w-[99.28%] text-base leading-[160%] mb-7">
          Welcome to NitroVest, your reliable and trusted platform to access
          investment opportunities in the real estate market around the world.
          Get started, setup your account to start buying or listing today!
        </p>

      
        <div className="w-full flex flex-row justify-start items-center gap-3">
          <button className="h-[60px] w-[200px] bg-mediumblue-100 flex flex-col box-border items-center justify-center 
                    tracking-[0.07em] text-xl font-semibold [-webkit-text-stroke:0.5px_#2639ed] text-white rounded-13xl"
          >
            Contact Now
          </button>

          <div className="flex flex-row items-center justify-start gap-2">
            <div className="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center">
              <img
                className=""
                alt="play icon"
                src="/Play.svg"
              />
            </div>
            <p className="font-medium">Watch Video</p>
          </div>

          </div>

        <div className="w-full mt-9 h-fit flex flex-row items-center justify-between gap-9 text-13xl">
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="font-semibold">30k+</p>
            <p className="text-lg text-mediumblue-100">Users</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="font-semibold">20k+</p>
            <p className="text-lg text-mediumblue-100">Auction</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="font-semibold">50k+</p>
            <p className="text-lg text-mediumblue-100">
              Properties
            </p>
          </div>
        </div>

      </div>

      <div className="w-[55%] h-[450px]">
        <img
          className="w-full h-full"
          alt="mansion"
          src="/house-property.svg"
        />
      </div>
    </div>
  );
};

export default SecurePropertyInvestmentSectio;
