import type { NextPage } from "next";
import ContainerSection from "./container-section";

const AppUsageContainer: NextPage = () => {
  return (
    <div className="absolute top-[2881px] left-[120px] flex flex-col items-start justify-start text-left text-base text-white font-title-heading-4">
      <div className="w-[1237px] flex flex-col items-center justify-center">
        <ContainerSection />
      </div>
    </div>
  );
};

export default AppUsageContainer;
