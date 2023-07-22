import type { NextPage } from "next";
import Main2Container from "./main2-container";

const ContainerList: NextPage = () => {
  return (
    <div className="w-full mx-auto my-32 font-title-heading-4">
      <div className="w-full flex justify-end items-end gap-14">
        <div className="flex gap-[6px]">
          <p>Show all</p>
          <img alt="" src='/left-arrow.svg' />
        </div>

        <p>View All Listings Here:</p>
      </div>

      <div className="w-[95%] mx-auto my-7 flex flex-row justify-between items-center gap-4">
        <Main2Container 
          avatar={'avatar1.png'} 
          name={'Randal Johnson'} 
          building={'building1.png'} 
          status={'open'} 
          location={'Nigeria'} 
          state={'MIAMI Estates'} 
          price={'0.2ETH/share'} 
          rating={'4.5'}
        />

        <Main2Container 
          avatar={'avatar2.png'} 
          name={'Randal Johnson'} 
          building={'building2.png'} 
          status={'open'} 
          location={'HongKong'} 
          state={'SPUGA Masions'} 
          price={'0.7ETH/share'} 
          rating={'3.0'}
        />

        <Main2Container 
          avatar={'avatar3.png'} 
          name={'Randal Johnson'} 
          building={'building3.png'} 
          status={'open'} 
          location={"Spain"} 
          state={'MIAMI Estates'} 
          price={'0.4ETH/share'} 
          rating={'4.9'}
        />
      </div>
    </div>
  );
};

export default ContainerList;
