import type { NextPage } from "next";

const NewsletterSubscriptionContaine: NextPage = () => {
  return (
    <div className="w-full h-fit mx-auto my-44 relative font-title-heading-4">
        <img className="absolute top-[-60px] right-0 z-10" alt="" src="/dot1.svg" />
        <div className="w-[180px] h-[180px] rounded-bl-[100px] bg-[#f9efd5] absolute bottom-[-30px] left-0 z-10"/>

        <div className="w-[94%] mx-auto px-16 h-[292px] relative z-20 rounded-[77px] bg-white shadow-[10px_20px_50px_rgba(0,_0,_0,_0.15)] box-border 
                  flex flex-row items-center justify-around gap-10 border-[1px]"
          >
            <div className="w-[55%] flex flex-col justify-start items-start gap-2 relative z-20">
              <p className="text-21xl text-black-200 font-semibold p-0 m-0">
                Subscribe Newsletter
              </p>
              <p className="text-gray p-0 m-0">
                I will update good news and promotion service not spam
              </p>
            </div>

            <div className="w-1/2 h-[80px] pl-7 pr-2 flex flex-row justify-between items-center bg-white 
                  box-border  shadow-[10px_20px_50px_rgba(0,_0,_0,_0.15)] rounded-41xl relative z-20"
            >
              <p className="text-gray">Enter your email address..</p>
              <p className="rounded-41xl bg-mediumblue-100 flex flex-row py-5 
                  px-10 items-center justify-center text-white"
              >
                  Contact Now
              </p>
            </div>
          
            <img className="absolute right-0 z-10" alt="" src="/rectangle-31.svg" />
          </div> 
    </div>
  );
};

export default NewsletterSubscriptionContaine;
