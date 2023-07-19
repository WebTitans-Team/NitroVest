import type { NextPage } from "next";
import NewsletterContainer from "./newsletter-container";

const NewsletterSubscriptionContaine: NextPage = () => {
  return (
    <div className="absolute top-[4239px] left-[77px] flex flex-col items-start justify-start text-left text-base text-darkgray-200 font-title-heading-4">
      <div className="w-[1272px] flex flex-col items-center justify-center">
        <NewsletterContainer />
      </div>
    </div>
  );
};

export default NewsletterSubscriptionContaine;
