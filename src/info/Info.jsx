import React from "react";

import "./info.css";

export default function Info() {
  return (
    <div className="container info">
      <div className="row">
        <div className="col-lg-4 col-sm-12 icons-info">
          <h1 className="icon-medium"></h1>
        </div>
        <div className="col-lg-4 col-sm-12 icons-info"></div>
        <div className="col-lg-4 col-sm-12 icons-info"></div>
      </div>
      <div className="container faq-div"></div>
    </div>
  );
}
