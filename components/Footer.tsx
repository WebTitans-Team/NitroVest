import type { NextPage } from "next";
import FooterListItem from "./FooterListItems";

const Footer: NextPage = () => {
  return (
    <footer className="w-full mx-auto text-sm text-whitesmoke-200 font-title-heading-4">
      <div className="w-full mx-auto py-4 flex flex-row justify-between items-center border-t border-b border-solid border-gainsboro
           "
      >
        <div className="w-[30%] flex flex-col justify-start gap-6">
          <div className="text-[27.15px]">
            <b>Nitro</b>
            <span className="font-light">Vest</span>
          </div>

          <p className="text-dimgray">
            Welcome to NitroVest, your reliable and trusted platform to access
            investment opportunities in the real estate market around the world. Get
            started, setup your account to start buying or listing today!
          </p>

          <div className="flex flex-row gap-4">
            <img alt="social media icon" src="/facebook.svg" />
            <img alt="social media icon" src="/twitter.svg" />
            <img alt="social media icon" src="/linkedin.svg" />
          </div>
        </div>

        <div className="flex flex-row gap-20">
          <FooterListItem title={'What We Do'} lists={['Web3 Consulting', 'App Design', 'Social Media Manage', 'Market Analysis Project']}/>
          <FooterListItem title={'Company'} lists={['About Us', 'Career', 'Become Investor']}/>
          <FooterListItem title={'Support'} lists={['FAQ', 'Policy', 'Business']}/>
          <FooterListItem title={'Contact'} lists={['WhatsApp', 'Support 24']}/>
        </div>
      </div>
       
      <p className="w-full mx-auto text-center my-8 text-darkgray-100">
        Copyright © 2023 Web Titans
      </p>
    </footer>
  );
};

export default Footer;
