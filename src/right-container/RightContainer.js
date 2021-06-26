import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import followUs from "../assets/followus.svg";

import "./rightContainer.css";

export default function FollowUs() {
  return (
    <section>
      <div className="header_container">
        <h1 className="follow_header">Follow us on:</h1>
      </div>
      <div className="conatiner">
        <div
          className="social-icons d-flex justify-content-around"
          style={{ marginBottom: "3rem" }}
        >
          <div className="social-list-item">
            <a href="https://www.facebook.com/coinshots">
              <FontAwesomeIcon className="fa-facebook" icon={faFacebook} />
            </a>
          </div>
          <div className="social-list-item">
            <a href="https://www.instagram.com/coinshots/">
              <FontAwesomeIcon className="fa-instagram" icon={faInstagram} />
            </a>
          </div>
          <div className="social-list-item">
            <a href="https://www.linkedin.com/company/coinshots/">
              <FontAwesomeIcon className="fa-linkedin-in" icon={faLinkedinIn} />
            </a>
          </div>
          <div className="social-list-item">
            <a href="https://twitter.com/coinshots">
              <FontAwesomeIcon className="fa-twitter" icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={followUs} alt="follow" className="image-fluid img-follow" />
      </div>
    </section>
  );
}
