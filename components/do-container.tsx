import type { NextPage } from "next";
import NavigationContainer from "./navigation-container";

const DoContainer: NextPage = () => {
  return (
    <div className="absolute top-[5078px] left-[113px] flex flex-col items-start justify-start text-left text-sm text-whitesmoke-200 font-title-heading-4">
      <div className="relative w-[1206px] h-[348px]">
        <NavigationContainer />
      </div>
    </div>
  );
};

export default DoContainer;
