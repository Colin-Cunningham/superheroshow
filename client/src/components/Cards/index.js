import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import "./style.css";
import styled, { keyframes } from "styled-components";
import { slideInRight, slideInLeft } from "react-animations";
import API from "../../utils/API";

// Div Animations -----------------
const leftIn = keyframes`${slideInLeft}`;
const rightIn = keyframes`${slideInRight}`;

//Hero One Slide in from the left
const Slide1 = styled.div`
  animation: 1s ${leftIn};
`;

//Hero2 Slide in from the right
const Slide2 = styled.div`
  animation: 1s ${rightIn};
`

//-------------------------------



function Card() {
  // UseEffect to Load in Characters

useEffect(() => {
  getHero1();
  getHero2();
}, []);

//UseState to Set Characters
 
const [hero1, setHero1] = useState([])
const [hero2, setHero2] = useState([])

//API Calls
const {id1} = useParams()
const {id2} = useParams()

function getHero1(){
  API.findByID(id1)
    .then((res) => {
      setHero1(res.data);
    })
    .catch((err) => console.log(err));
}

function getHero2(){
 API.findByID(id2)
    .then((res) => {
      setHero2(res.data.results);
    })
    .catch((err) => console.log(err));
}

const Background1 = "http://via.placeholder.com/640x360";

const Background2 = "http://via.placeholder.com/640x360";


  return (
    <>
      <div id="woo"className="row">
        <div id="entry1" className="col s4 m5">
          <Slide1>
            <div style={{ bakcgroundImage: `url(${Background1})` }} className="card-panel">
            <h5 className="heroName">{hero1.name}</h5>
  <div>{}</div>
              <div className="info"> </div>
              <div className="FunFact">Fun Fact</div>
            </div>
          </Slide1>
        </div>
        <div id="entry2" className="col s4 m5">
          <Slide2>
            <div
              style={{ bakcgroundImage: `url(${Background2})` }}
              className="card-panel"
            >
              <h5 className="heroName"></h5>
              <div className="info"> </div>
              <div className="FunFact">Fun Fact</div>
            </div>
          </Slide2>
        </div>
      </div>
    </>
  );
}

export default Card;
