import type { NextPage } from "next";
import Main2Container from "./main2-container";

const ContainerList: NextPage = () => {
  return (
    <div className="relative w-[1086px] h-[452px] text-left text-xs text-black-200 font-actor">
      <Main2Container />
      <img
        className="absolute top-[448px] left-[0px] w-[1086px] h-1"
        alt=""
        src="/rectangle-34.svg"
      />
      <div className="absolute top-[329px] left-[744px] w-[300.5px] h-[100px] text-3xs font-title-heading-4">
        <div className="absolute h-[58.72%] w-full top-[23%] left-[0%] text-lg leading-[22px] inline-block">
          MIAMI Estates
        </div>
        <div className="absolute top-[2px] left-[0px] inline-block w-[84px]">
          Status: Open
        </div>
        <div className="absolute top-[0px] left-[223px]">Location: Spain</div>
        <div className="absolute h-[24.02%] w-[23.94%] top-[70.6%] right-[1.55%] bottom-[5.38%] left-[74.52%] rounded-8xs bg-mediumblue-100 overflow-hidden flex flex-col py-[3px] px-[5px] box-border items-center justify-start text-5xs text-white">
          <div className="w-[27px] h-3 flex flex-col py-0 px-[0.3959503173828125px] box-border items-end justify-end">
            <div className="relative"></div>
          </div>
        </div>
        <div className="absolute top-[76px] left-[245px] tracking-[1px] text-white">
          4.9
        </div>
        <div className="absolute h-[29%] w-[28.95%] top-[71%] left-[1%] text-xs inline-block">
          0.4ETH/share
        </div>
      </div>
    </div>
  );
};

export default ContainerList;
