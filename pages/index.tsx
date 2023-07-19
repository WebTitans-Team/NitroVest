import type { NextPage } from "next";
import NavbarContainer from "../components/navbar-container";
import SecurePropertyInvestmentSectio from "../components/secure-property-investment-sectio";
import ClientTestimonialContainer from "../components/client-testimonial-container";
import NewsletterSubscriptionContaine from "../components/newsletter-subscription-containe";
import QuickSearchContainer from "../components/quick-search-container";
import WelcomeContainer from "../components/welcome-container";
import AppUsageContainer from "../components/app-usage-container";
import DoContainer from "../components/do-container";
import ContainerList from "../components/container-list";

const NitroVestApp: NextPage = () => {
  return (
    <div className="relative bg-black-200 w-full h-[5628px] overflow-hidden">
      <div className="absolute top-[32px] left-[58px] w-[1342px] flex flex-col items-start justify-start">
        <NavbarContainer />
      </div>
      <SecurePropertyInvestmentSectio />
      <ClientTestimonialContainer />
      <NewsletterSubscriptionContaine />
      <QuickSearchContainer />
      <div className="absolute top-[840px] left-[82px] flex flex-col items-start justify-start">
        <WelcomeContainer />
      </div>
      <AppUsageContainer />
      <DoContainer />
      <div className="absolute top-[2234px] left-[192px] w-[1086px] h-[448px] flex flex-col items-center justify-end">
        <ContainerList />
      </div>
    </div>
  );
};

export default NitroVestApp;
