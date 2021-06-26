import React from "react";

import "./infotItem.css";

export default function InfoItem({ icon, title, description }) {
  const Icon = icon;
  return (
    <div className="col-lg-4 col-sm-12 icons-info">
      <h1 className="icon-medium">
        <Icon />
      </h1>
      <h3 className="info-title">{title}</h3>
      <p className="info-description">{description}</p>
    </div>
  );
}
