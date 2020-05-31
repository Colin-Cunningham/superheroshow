import React from "react";
import "./style.css"

//Component Import
import Directions from "../Directions/index"
import Search from "../Search/index"
import Card from "../Cards/index"
import Choose from "../Choose/index"
import Winner from "../Winner/index"
import { Route } from "react-router-dom";


function Header() {
  return (
    //Wrapper for main content of page
    <div id="background">
    <div className="container"> 
      <Route exact path={"/"}>
        <Directions />
        <Search />
      </Route>
      <Route exact path={"/choose/:com1/:com2"}>
        <Choose />
      </Route>
      <Route exact path={"/fight/:id1/:id2"}>
        <Card />
      </Route>
      <Route exact path={"/winner/:id1/:id2"}>
        <Winner />
      </Route>
    </div>
  </div>
  );
}

export default Header;
