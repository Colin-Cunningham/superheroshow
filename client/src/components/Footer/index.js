import React from "react";
import {Link} from "react-router-dom"
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">SuperHeroShowdown</h5>
            <p className="grey-text text-lighten-4">
              This application was created by Colin Cunningham, utilizing the
              full MERN stack. The creator of this website is currenlty looking
              for a job in software. Feel free to contact the creator at
              colin.199643@gmail.com
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
               
                  <a href="https://github.com/Colin-Cunningham" target="_blank" className="grey-text text-lighten-3" >
                    Github
                  </a>
              
              </li>
              <li></li>
              <li>
                  <a className="grey-text text-lighten-3" target="_blank" href="https://colin-cunningham-portfolio.herokuapp.com/">
                    Portfolio
                  </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright SuperHeroShowdown
        </div>
      </div>
    </footer>
  );
}

export default Footer;
