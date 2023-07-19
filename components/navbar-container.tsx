import type { NextPage } from "next";

const NavbarContainer: NextPage = () => {
  return (
    <div className="self-stretch relative h-[60px] text-left text-base text-white font-title-heading-4">
      <div className="absolute top-[11.67%] left-[0%] text-[27.15px]">
        <b>Nitro</b>
        <span className="font-light">Vest</span>
      </div>
      <div className="absolute top-[23.33%] left-[66.47%] tracking-[0.01em] [-webkit-text-stroke:0.2px_#000]">
        Contact
      </div>
      <div className="absolute top-[23.33%] left-[41.36%] tracking-[0.01em] [-webkit-text-stroke:0.2px_#000]">
        Home
      </div>
      <div className="absolute top-[23.33%] left-[49.18%] tracking-[0.01em] [-webkit-text-stroke:0.2px_#000]">
        Listings
      </div>
      <div className="absolute top-[23.33%] left-[56.93%] tracking-[0.01em] [-webkit-text-stroke:0.2px_#000]">
        Aunctions
      </div>
      <div className="absolute h-full w-[19.45%] top-[0%] right-[1.19%] bottom-[0%] left-[79.36%] flex flex-row items-center justify-between text-lg text-mediumblue-100 font-nunito-sans">
        <div className="rounded-2xl flex flex-row p-2 items-center justify-center">
          <div className="relative [text-decoration:underline] leading-[40px]">
            Sign In
          </div>
        </div>
        <div className="rounded-13xl bg-mediumblue-100 w-[189px] h-[60px] flex flex-row p-2 box-border items-center justify-center text-white font-title-heading-4">
          <div className="relative">Submit Listing</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;
