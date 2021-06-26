import React from "react";

import "./faqSection.css";
import Faq from "./faq/Faq";

export default function FaqSection() {
  return (
    <div className="container faq-div">
      <div className="faq">
        <h1>FAQ</h1>
      </div>
      <div className="row faq-section">
        <div className="col-lg-6 faq-holder">
          <Faq
            question="Is it free?"
            link={false}
            answer="Completely free with no Ads."
          />
          <Faq
            question="Who are We?"
            link={false}
            answer="We are a couple of passionate individuals in the PocketBits Team trying to raise awareness about Cryptocurrencies in India and educate users which can help them avoid falling for scams and ponzi schemes."
          />
        </div>
        <div className="col-lg-6 faq-holder">
          <Faq
            question="Will my phone number be shared with anyone?"
            link={false}
            answer="The phone numbers and personal information are completely safe and we do not harvest or sell data. However the updates are delivered via admin only Whatsapp groups and all participants can see a list of numbers."
          />
          <Faq
            question="Will you add more languages?"
            answer="Yes, we plan to add many more languages and would like to hear from our users on which to add next based on popularity, you can tweet to us "
            link={true}
          />
        </div>
      </div>
    </div>
  );
}
