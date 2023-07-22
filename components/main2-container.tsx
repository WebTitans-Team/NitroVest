import type { NextPage } from "next";

type M2CType = {
  avatar: string;
  name: string;
  building: string;
  status: string;
  location: string;
  state: string;
  price: string;
  rating: string
};

const Main2Container: NextPage<M2CType> = ({avatar, name, building, status, location, state, price, rating}) => {
  return (
    <div className="w-[300px] h-fit rounded-xl bg-white flex flex-col justify-center items-center px-3 py-4">
      <div className="w-full mb-1 flex justify-between items-center">
        <div className="flex justify-between items-center gap-1">
          <img src={avatar} alt="" className="w-[50px] h-[45px]"/>
          <p className="text-black-200">{name}</p>
        </div>
        
        <img src="heart.png" alt=""/>
      </div>

      <img alt="" src={building} className="w-[292px] h-[170px]"/>

      <div className="w-full mt-1 flex flex-col justify-center items-center text-black-200">
        <div className="w-full mb-1 flex justify-between items-center text-sm">
          <p>Status: {status}</p>
          <p>Location: {location}</p>
        </div>

        <p className="w-full text-left text-lg">{state}</p>

        <div className="w-full text-black-100 text-sm flex justify-between items-center">
          <p>{price}</p>
          <div className="w-[71px] h-[24px] relative bg-mediumblue-200 text-white flex flex-row justify-center items-center rounded-lg">
            <p className="m-0 p-0">{rating}</p>
            <img src='star.png' alt="" className="absolute top-0 right-3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2Container;
