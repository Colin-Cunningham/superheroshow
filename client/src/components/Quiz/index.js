import React from "react";
import "./style.css";
import img1 from "./temp.png"


function quiz() {


  return (
    <div id="row" className="row">
      <div className="col s12">
        <div  className="section">
          <h4 id="get">The SuperHeroes are Hard At work!</h4>
          <div className="divider"></div>
          <img style={{width: "100%"}} src={img1} alt="construction" />
          <p style={{fontSize: "x-large", fontWeight: "700"}} id="intro">
            This Section is Currently under Construction! Come back soon! 
            
        </p>
          <div style={{color:"white"}}>(art credit: "https://www.danavenell.com/")</div>  
         
        </div>
      </div>
    </div>
  );
}

export default quiz;
