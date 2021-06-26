import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars, FaExclamationTriangle, FaChartLine } from "react-icons/fa";

import "./info.css";
import FaqSection from "../faqSection/FaqSection";
import InfoItem from "./infoItem/InfoItem";

export default function Info() {
  return (
    <div className="container info">
      <div className="row">
        <InfoItem
          icon={FaBars}
          title="To the point"
          description="Only headlines to keep you updated on Global Cryptocurrency
            Industry."
        />
        <InfoItem
          icon={FaExclamationTriangle}
          title="Daily Market Updates"
          description="Track major price and stay upto date"
        />
        <InfoItem
          icon={FaChartLine}
          title="No Ads"
          description="Completely Free with No spamming."
        />
      </div>
      <FaqSection />
    </div>
  );
}
