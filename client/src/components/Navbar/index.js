import React from "react";
import {Link} from "react-router-dom";
import "./style.css"


function Navbar() {

 
    return (
    //Static Nav with few links to about page, and stats
   <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">SuperHeroShowdown</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
        <li></li>
      </ul>
      <div className="nav-content">
      <ul id="tabs" className="tabs center">
        <li className="tab"><Link to="/amg">AnotherMarvelGuy</Link></li>
        <li className="tab"><Link to="/">Showdown</Link></li>
        <li className="tab"><Link to="/quiz">Quizzes</Link></li>
      </ul>
    </div>
    </div>
  </nav>
  );
}

export default Navbar;
