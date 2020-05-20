import React from "react";
import {Link} from "react-router-dom"
import "./style.css"


function Navbar() {
  return (
    //Static Nav with few links to about page, and stats
   <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">SuperHeroShowdown</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
