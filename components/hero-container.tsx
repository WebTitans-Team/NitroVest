import type { NextPage } from "next";

const HeroContainer: NextPage = () => {
  return (
    <div className="w-[1385px] flex flex-col items-center justify-center text-left text-21xl text-white font-title-heading-4">
      <div className="self-stretch relative h-[591px]">
        <div className="absolute top-[88px] left-[9px] w-[552px] h-[270px]">
          <div className="absolute top-[0%] left-[0%] [-webkit-text-stroke:1px_#f4f4f4]">
            Secure Property Investment
          </div>
          <div className="absolute w-[99.28%] top-[27.41%] left-[0%] text-base leading-[160%] inline-block">
            Welcome to NitroVest, your reliable and trusted platform to access
            investment opportunities in the real estate market around the world.
            Get started, setup your account to start buying or listing today!
          </div>
          <div className="absolute h-[25.93%] w-[40.76%] top-[74.07%] right-[59.06%] bottom-[0%] left-[0.18%] rounded-41xl bg-mediumblue-100 flex flex-row py-5 px-10 box-border items-center justify-center text-xl">
            <div className="relative tracking-[0.07em] font-semibold [-webkit-text-stroke:0.5px_#2639ed]">
              Contact Now
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[579px] w-[787px] h-[478.28px]">
          <img
            className="absolute h-[94.15%] w-full top-[0%] right-[-2.58%] bottom-[5.85%] left-[2.58%] rounded-37xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-1.svg"
          />
          <div className="absolute h-[82.09%] w-[23.56%] top-[17.91%] right-[0.67%] bottom-[0%] left-[75.77%] rounded-t-13xl rounded-b-none [background:linear-gradient(185.22deg,_#fff,_rgba(255,_255,_255,_0))]" />
        </div>
        <div className="absolute top-[299px] left-[250px] w-[181px] h-12 flex flex-row items-center justify-start gap-[16px] text-lg">
          <img
            className="relative w-[148px] h-[148px]"
            alt=""
            src="/icon.svg"
          />
          <div className="relative font-medium">Watch Video</div>
        </div>
        <div className="absolute h-[8.12%] w-[44.77%] top-[72.76%] right-[55.23%] bottom-[19.12%] left-[0%] flex flex-row items-start justify-start gap-[72px] text-13xl">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative font-semibold">30k+</div>
            <div className="relative text-lg text-mediumblue-100">Users</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative font-semibold">20k+</div>
            <div className="relative text-lg text-mediumblue-100">Auction</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative font-semibold">50k+</div>
            <div className="relative text-lg text-mediumblue-100">
              Properties
            </div>
          </div>
        </div>
        <div className="absolute h-[78.85%] w-[54.73%] top-[21.15%] right-[5.85%] bottom-[0%] left-[39.42%] shadow-[0px_24px_24px_rgba(0,_0,_0,_0.5)]" />
        <img
          className="absolute h-[80.2%] w-[59.86%] top-[6.26%] right-[0%] bottom-[13.54%] left-[40.14%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/modern-residential-district-with-green-roof-and-balcony-generated-by-ai@2x.png"
        />
      </div>
    </div>
  );
};

export default HeroContainer;
