import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import "./style.css";





function Search() {

  const [hero1, setHero1] = useState("")
  const [hero2, setHero2] = useState("")
  const history = useHistory()

  function begin(){
    if(hero1 === "" || hero2 === ""){
      alert("Please Enter Combatants")
    }else{
        history.push("/choose/" + hero1 + "/" + hero2)
    }
  }

  return (
    <form id="search"  className="col s12">
      <div  id="search" className="row">
        <div id="in" className="input-field col s4">
          <input
            placeholder="Batman"
            id="Hero1"
            type="text"
            className="validate"
            value={hero1}
            onChange={(e) => setHero1(e.target.value)}
          />
        </div>
        <h2 id="vs" className="col s3">VS</h2>
        <div id="in" className="input-field col s4">
          <input
            placeholder="Captain America"
            id="Hero2"
            type="text"
            className="validate"
            value={hero2}
            onChange={(e) => setHero2(e.target.value)}
          />
        </div>
      </div>
      <button id="btn" className="col s3" onClick={begin}>Begin The Battle</button>
    </form>
  );
}

export default Search;
