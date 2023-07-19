import type { NextPage } from "next";

const NewsletterContainer: NextPage = () => {
  return (
    <div className="relative w-[1272px] h-[387px] text-left text-base text-darkgray-200 font-title-heading-4">
      <img
        className="absolute h-[39.79%] w-[13.76%] top-[0%] right-[0%] bottom-[60.21%] left-[86.24%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/dot1.svg"
      />
      <div className="absolute h-[45.99%] w-[13.99%] top-[54.01%] right-[72.01%] bottom-[0%] left-[13.99%] rounded-t-none rounded-br-81xl rounded-bl-none bg-cornsilk [transform:_rotate(90deg)] [transform-origin:0_0]" />
      <div className="absolute h-[75.45%] w-[94.1%] top-[14.47%] right-[2.91%] bottom-[10.08%] left-[2.99%] rounded-56xl bg-aliceblue-100" />
      <img
        className="absolute h-[75.45%] w-[42.69%] top-[14.47%] right-[-0.77%] bottom-[10.08%] left-[58.08%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-31.svg"
      />
      <div className="absolute h-[20.67%] w-[37.66%] top-[41.86%] right-[10.61%] bottom-[37.47%] left-[51.73%] rounded-41xl bg-white shadow-[10px_20px_50px_rgba(0,_0,_0,_0.15)] box-border flex flex-row pt-2.5 px-[3px] pb-1.5 items-center justify-end gap-[41px] border-[1px] border-solid border-whitesmoke-300">
        <div className="relative">Enter your email address..</div>
        <div className="rounded-41xl bg-mediumblue-100 flex flex-row py-5 px-10 items-center justify-center text-white">
          <div className="relative tracking-[0.07em] [-webkit-text-stroke:0.5px_#fff]">
            Contact Now
          </div>
        </div>
      </div>
      <div className="absolute w-[46.23%] top-[56.85%] left-[10.22%] text-lg leading-[160%] text-gray inline-block">
        I will update good news and promotion service not spam
      </div>
      <div className="absolute top-[39.79%] left-[10.22%] text-21xl text-black-200 [-webkit-text-stroke:1px_#000]">
        Subscribe Newsletter
      </div>
    </div>
  );
};

export default NewsletterContainer;
