import React from 'react'

import logo from "../assets/coinshots.png";
import './nav.css'

export default function Nav() {
    return (
        <nav>
            <div className="container nav-head">
                <img id="logo" src={logo} alt="logo" />
                <h2>CoinShots</h2>
            </div>
        </nav>
    )
}
