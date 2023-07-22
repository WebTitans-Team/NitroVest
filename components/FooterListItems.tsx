import type { NextPage } from "next";

type FLIType = {
    title: string;
    lists: string[];
  };

const FooterListItem: NextPage<FLIType> = ({ title, lists}) => {
  return (
   <div className="">
      <p className="text-xl">{title}</p>

        <ul className="m-0 p-0 flex flex-col justify-start items-start gap-1 list-none text-darkgray-100">
            {lists.map((list, index) => (
                <li className="m-0" key={index}>{list}</li>
            ))}
        </ul>
    </div>
  );
};

export default FooterListItem;
