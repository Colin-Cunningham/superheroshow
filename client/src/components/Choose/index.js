import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API"



//-------------------------------

function Choose() {
  // UseEffect to Load in Characters


  useEffect(() => {
    getHero1();
    getHero2();
  }, []);

  //UseState to Set Characters

  const [hero1, setHero1] = useState([]);
  const [hero2, setHero2] = useState([]);

  const [heroId1, setHeroId1] = useState("");
  const [heroId2, setHeroId2] = useState("");

  //API Calls
  const { com1 } = useParams();
  const { com2 } = useParams();

  function getHero1() {
 API.findByName(com1)
      .then((res) => {
        setHero1(res.data.results);
        console.log(res)
      })
      .catch((err) => console.log(err));
  }

  function getHero2() {
    API.findByName(com2)
      .then((res) => {
        setHero2(res.data.results);
      })
      .catch((err) => console.log(err));
  }


  const history = useHistory()

  //Start with error checking If Id's arent clicked
  function begin(){
    if(heroId1 === "" || heroId2 === ""){
      alert("Please Select Combatants")
    }else{
        history.push("/fight/" + heroId1.id + "/" + heroId2.id)
    }
  }




  return (
    <>
      <div id="woo" className="row">
          <h4 style={{textAlign: "center", textDecoration: "underline"}}>Which one did you mean?</h4>
        <div id="entry1" className="col s12 m12 l12">
            <div className="card-panel">
              { hero1 ? hero1.map((hero) => (
                <>
                  <button key={hero.id} onClick={(e) => setHeroId1(hero)} className="choose"  >
                    <div
                     key={hero.name}
                     className="title"
                    >
                      {hero.name}
                    </div>
                    <div key={hero.biography["full-name"]} className="fullnames" >
                      Indentity: {hero.biography["full-name"]}
                    </div>
                    <div key={hero.biography["first-appearance"]} className="firstap" >
                      First Appeared: {hero.biography["first-appearance"]}
                    </div>
                  </button>
                  <br />
                  <div className="divider"></div>
                </>
              )): <p>There are no results to display</p>}
            </div>
            <h3 id="chosen" key={heroId1.name}>Combatant: {heroId1.name}  </h3>
        </div>
        <div id="entry2" className="col s12 m12 l12">
            <div className="card-panel">
              { hero2 ? hero2.map((hero) => (
                <>
                  <button key={hero.id}  onClick={(e) => setHeroId2(hero)} className="choose" >
                    <div
                    key={hero.name}
                    className="title"
                    >
                      {hero.name}
                    </div>

                    <div key={hero.biography["full-name"]} className="fullnames">
                      Identity: {hero.biography["full-name"]}
                    </div>

                    <div key={hero.biography["first-appearance"]} className="firstap" >
                      First Appeared: {" "}
                      {hero.biography["first-appearance"]}
                    </div>
                  </button>
                  <br />
                  <div className="divider"></div>
                </>
              )) : <p>There are no results to display</p>}
            </div>
            <h3 id="chosen" key={heroId2.name}>Combatant: {heroId2.name} </h3>
        </div>
      </div>
      <button onClick={begin} id="wool" >Continue</button>
    </>
  );
}

export default Choose;
