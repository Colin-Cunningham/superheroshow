import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import styled, { keyframes } from "styled-components";
import { slideInRight, slideInLeft } from "react-animations";
import API from "../../utils/API"

// Div Animations -----------------
const leftIn = keyframes`${slideInLeft}`;
const rightIn = keyframes`${slideInRight}`;

//Hero One Slide in from the left
const Slide1 = styled.div`
  animation: 3s ${leftIn};
`;

//Hero2 Slide in from the right
const Slide2 = styled.div`
  animation: 3s ${rightIn};
`;

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
          <h4 style={{textAlign: "center"}}>Which one did you mean?</h4>
        <div id="entry1" className="col s4 m5">
          <Slide1>
            <div className="card-panel">
              { hero1 ? hero1.map((hero) => (
                <>
                  <button key={hero.id} onClick={(e) => setHeroId1(hero)} className="choose"  >
                    <div
                     key={hero.name}
                      style={{
                        textAlign: "center",
                        textDecoration: "underline",
                        fontSize: "larger",
                        marginBottom: "3px",
                      }}
                    >
                      {hero.name}
                    </div>
                    <div key={hero.biography["full-name"]} style={{ marginBottom: "1rem", fontSize: "smaller" }}>
                      Indentity: {hero.biography["full-name"]}
                    </div>
                    <div key={hero.biography["first-appearance"]} style={{ fontSize: "small", fontStyle: "oblique" }}>
                      First Appeared: {hero.biography["first-appearance"]}
                    </div>
                  </button>
                  <br />
                </>
              )): <p>There are no results to display</p>}
            </div>
            <h4 key={heroId1.name} style={{fontSize: "x-large"}}>Combatant: {heroId1.name}  </h4>
          </Slide1>
        </div>
        <div id="entry2" className="col s4 m5">
          <Slide2>
            <div className="card-panel">
              { hero2 ? hero2.map((hero) => (
                <>
                  <button key={hero.id}  onClick={(e) => setHeroId2(hero)} className="choose" >
                    <div
                    key={hero.name}
                      style={{
                        textAlign: "center",
                        textDecoration: "underline",
                        fontSize: "larger",
                        marginBottom: "3px",
                      }}
                    >
                      {hero.name}
                    </div>

                    <div key={hero.biography["full-name"]} style={{ marginBottom: "1rem", fontSize: "smaller" }}>
                      Identity: {hero.biography["full-name"]}
                    </div>

                    <div key={hero.biography["first-appearance"]} style={{ fontSize: "small", fontStyle: "oblique" }}>
                      First Appeared: <br />
                      {hero.biography["first-appearance"]}
                    </div>
                  </button>
                  <br />
                </>
              )) : <p>There are no results to display</p>}
            </div>
            <h4 key={heroId2.name}style={{fontSize: "x-large"}}>Combatant: {heroId2.name} </h4>
          </Slide2>
        </div>
      </div>
      <button onClick={begin} id="wool" >Lets start this thing</button>
    </>
  );
}

export default Choose;
