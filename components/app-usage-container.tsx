import type { NextPage } from "next";

const AppUsageContainer: NextPage = () => {
  return (
    <div className="w-full mx-auto my-20 relative flex flex-row justify-between items-center font-title-heading-4">
      <div className="">
        <img
            className=""
            alt=""
            src="/buildingArchitect.svg"
        />
      </div>

      {/* <div className="w-1/2 relative z-10 before:w-52 before:h-52 before:bg-mediumblue-100 
            before:absolute before:top-0 before:right-0 before:z-20"
      ></div> */}
      <div className=""
      >
        <p className="text-21xl">
          See How Others Are Using This App.
        </p>

        <p className="leading-[160%]">
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
      </div> 
    </div>
  );
};

export default AppUsageContainer;
