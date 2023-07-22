import type { NextPage } from "next";
import NavbarContainer from "../components/navbar-container";
import SecurePropertyInvestmentSectio from "../components/secure-property-investment-sectio";
import ClientTestimonialContainer from "../components/client-testimonial-container";
import NewsletterSubscriptionContaine from "../components/newsletter-subscription-containe";
import QuickSearchContainer from "../components/quick-search-container";
import WelcomeContainer from "../components/welcome-container";
import AppUsageContainer from "../components/app-usage-container";
import Footer from "../components/Footer";
import ContainerList from "../components/container-list";

const NitroVestApp: NextPage = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 h-full m-auto font-nunito-sans text-base text-white">
      <div className="w-full h-auto mx-auto">
        <NavbarContainer />
      </div>
      <SecurePropertyInvestmentSectio />
      <WelcomeContainer />
      <QuickSearchContainer />
      <ContainerList />
      <AppUsageContainer />
      <ClientTestimonialContainer />
      <NewsletterSubscriptionContaine />
      <Footer />
    </div>
  );
};

export default NitroVestApp;
