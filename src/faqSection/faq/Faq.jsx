import React from "react";

import "./faq.css";

export default function Faq({ question, answer, link }) {
  return (
    <>
      <h3 className="faq-question">{question}</h3>
      <div className="faq-answer">
        {answer}
        {link && (
          <a class="twitter" href="https://twitter.com/coinshots">
            @Coinshots
          </a>
        )}
      </div>
    </>
  );
}
