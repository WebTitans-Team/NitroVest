import type { NextPage } from "next";

const DetailsContainer: NextPage = () => {
  return (
    <div className="absolute h-[26.77%] w-[47.28%] top-[39.29%] right-[0%] bottom-[33.94%] left-[52.72%] bg-white [backdrop-filter:blur(4px)] text-left text-lg text-black-200 font-title-heading-4">
      <div className="absolute h-[28.51%] w-[34.7%] top-[13.62%] right-[63.65%] bottom-[57.87%] left-[1.64%] flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative rounded-[50%] w-16 h-16 object-cover"
          alt=""
          src="/unsplashxhvpwcr5grq@2x.png"
        />
        <div className="w-[131px] h-[67px] flex flex-col items-start justify-end gap-[4px]">
          <div className="relative">@samanthaw</div>
          <div className="relative text-5xl font-semibold">Listing #01</div>
        </div>
      </div>
      <div className="absolute top-[155px] left-[32px] w-[544px] h-12 flex flex-row items-center justify-start gap-[16px] text-white">
        <div className="bg-mediumblue-100 w-[264px] h-12 flex flex-row py-4 px-[26px] box-border items-center justify-center">
          <div className="relative font-semibold">Bid Now</div>
        </div>
        <div className="w-[264px] h-12 flex flex-row py-4 px-[26px] box-border items-center justify-center text-black-200">
          <div className="relative font-semibold">View Details</div>
        </div>
      </div>
      <div className="absolute h-[0.43%] w-[89.64%] top-[52.13%] right-[8.8%] bottom-[47.45%] left-[1.56%] box-border border-t-[1px] border-solid border-black-100" />
      <div className="absolute top-[32px] left-[453px] w-[101px] h-[67px] flex flex-col items-end justify-center gap-[4px] text-gray">
        <div className="relative">Current Bid</div>
        <div className="relative text-5xl font-semibold text-black-100">
          1.00 ETH
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
