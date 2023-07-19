import type { NextPage } from "next";

const ContainerSection: NextPage = () => {
  return (
    <div className="relative w-[1237px] h-[414px] text-left text-base text-white font-title-heading-4">
      <div className="absolute h-[43%] w-[14.39%] top-[57%] right-[71.22%] bottom-[0%] left-[14.39%] rounded-t-none rounded-br-81xl rounded-bl-none bg-cornsilk [transform:_rotate(90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[0px] left-[37px] w-[1200px] h-[372px]">
        <div className="absolute h-[47.85%] w-[14.83%] top-[15.59%] right-[32.67%] bottom-[36.56%] left-[52.5%] rounded-t-none rounded-br-81xl rounded-bl-none bg-mediumblue-200" />
        <div className="absolute w-[44.33%] top-[56.45%] left-[55.67%] leading-[160%] inline-block">
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </div>
        <div className="absolute w-[39%] top-[22.04%] left-[55.75%] text-21xl inline-block [-webkit-text-stroke:1px_#fff]">
          See How Others Are Using This App.
        </div>
        <img
          className="absolute h-[126.88%] w-[54.17%] top-[-8.06%] right-[49.17%] bottom-[-18.82%] left-[-3.33%] rounded-13xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/unsplashbzqu01vg54@2x.png"
        />
        <div className="absolute h-[20.97%] w-[6.5%] top-[37.63%] right-[73.83%] bottom-[41.4%] left-[19.67%] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[78px] h-[78px]"
            alt=""
            src="/vector.svg"
          />
          <div className="relative bg-white w-[42.98px] h-[42.98px] mt-[-60px]" />
        </div>
      </div>
    </div>
  );
};

export default ContainerSection;
