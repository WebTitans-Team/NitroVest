import type { NextPage } from "next";
import SearchListContainer from "./search-list-container";

const QuickSearchContainer: NextPage = () => {
  return (
    <div className="absolute top-[1860px] left-[94px] flex flex-col items-start justify-start text-left text-lg text-text-and-main-gray-2 font-title-heading-4">
      <SearchListContainer />
    </div>
  );
};

export default QuickSearchContainer;
