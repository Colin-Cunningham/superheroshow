import React from "react";
import {Link} from "react-router-dom"
import "./style.css";


function directions() {

  const commonHero = [ "30", "35", "38", "50", "69", "63", "79", "95", "123", "149", "156", "196", "204", "213", "233", "234", "260", "263", "280", "282", "298", "299", "309", "313", "315", "332", "374", "620", "680", "703", "497" ]


  return (
    <div id="row" className="row">
      <div className="col s12">
        <div className="section">
          <h4 id="get">Get Started!</h4>
          <div className="divider"></div>
          <p id="intro">
            Welcome to SuperHeroShowDown! Or SHSD for short. The concept is
            simple, type in two superheroes (or villains) and see who would win
            in a one on one fight. Settle some arguments, browse for fun and let
            us know how we did!
          </p>
          <div class="btn-group">
            <a target="_blank" rel="noopener noreferrer" href="https://superheroapi.com/ids.html">
              {" "}
              <button id="buttons" type="button" class="btn btn">
                See all Heroes
              </button>
            </a>
            <Link to={"/fight/" + commonHero[Math.floor(Math.random() * 32)] + "/" + commonHero[Math.floor(Math.random() * 32)]} >
                <button id="buttons" type="button" class="btn btn-secondary">
                   Random Battle
               </button>
            </Link>
            
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCJFDBerlB4zq41hSrjUYUtA/videos"> <button id="buttons" type="button" class="btn btn-secondary">
              More Content!
            </button>
            </a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default directions;
