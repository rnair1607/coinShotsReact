import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

import "./joinUs.css";

export default function JoinUs() {
  return (
    <section>
      <h1 className="main-text">
        Free CryptoCurrency News on WhatsApp & Telegram
      </h1>
      <p id="desc">Daily Headlines and Prices at your fingertips</p>
      <div>
        <h5 className="button-head">
          <strong>Join us on</strong>
        </h5>
        <div className="row">
          <div className="col-lg-4 col-md-12 button-head-holder">
            <ul className="connect-btn">
              <li>
                <a
                  href="https://wa.me/message/AHEE7YZH6N4ZN1"
                  className="pro-btn wa btn btn-lg"
                >
                  {/* <i className="fab fa-whatsapp"></i> */}
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span style={{ paddingLeft: "5px" }}>Whatsapp</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 button-head-holder">
            <ul className="connect-btn">
              <li>
                <a
                  href="https://t.me/coinshotsdaily"
                  className="pro-btn tg btn btn-lg"
                >
                  {/* <i className="fab fa-whatsapp"></i> */}
                  <FontAwesomeIcon icon={faTelegramPlane} />
                  <span style={{ paddingLeft: "5px" }}>Telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cta-info">No Signup Necessary</div>
      <br />
      <div className="cta-info">More languages coming soon....</div>
    </section>
  );
}
