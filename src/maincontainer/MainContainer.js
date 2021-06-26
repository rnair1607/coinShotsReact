import React from "react";
import JoinUs from "../joinUs/JoinUs";

import Nav from "../nav/Nav";
import FollowUs from "../right-container/RightContainer";
import "./mainContainer.css";

export default function MainContainer() {
  return (
    <main>
      <div className="main-div">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Nav />
            <JoinUs />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <FollowUs />
          </div>
        </div>
      </div>
    </main>
  );
}
