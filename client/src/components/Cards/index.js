import React, {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom"
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
  getHero2()
  
}, []);

//UseState to Set Characters
 
const [hero1, setHero1] = useState([])
const [hero2, setHero2] = useState([])

const [heroImage1, setHeroImage1] = useState([])
const [heroImage2, setHeroImage2] = useState([])

const [hero1Height, setHero1Height] = useState([])
const [hero2Height, setHero2Height] = useState([])

const [hero1Weight, setHero1Weight] = useState([])
const [hero2Weight, setHero2Weight] = useState([])

const [hero1Apperance, setHero1Apperance] = useState([])
const [hero2Apperance, setHero2Apperance] = useState([])

const [hero1powerStats, setHero1powerStats] = useState([])
const [hero2powerStats, setHero2powerStats] = useState([])


const [score1, setScore1] = useState(Number)
const [score2, setScore2] = useState(Number)





//API Calls
const {id1} = useParams()
const {id2} = useParams()

function getHero1(){
  API.findByID(id1)
    .then((res) => {
      setHero1(res.data);
      setHeroImage1(res.data.image);
      setHero1Apperance(res.data.appearance)
      setHero1Height(res.data.appearance.height[0])
      setHero1Weight(res.data.appearance.weight[0])
      setHero1powerStats(res.data.powerstats)
    })
    .catch((err) => console.log(err));
}

function getHero2(){
 API.findByID(id2)
    .then((res) => {
      setHero2(res.data);
      setHeroImage2(res.data.image);
      setHero2Apperance(res.data.appearance)
      setHero2Height(res.data.appearance.height[0])
      setHero2Weight(res.data.appearance.weight[0]);
      setHero2powerStats(res.data.powerstats)
    })
    .catch((err) => console.log(err));
}

const history = useHistory()


function calculate(){

  var count1 = 0

  var count2 = 0
 

  if(Number(hero1powerStats.intelligence) > Number(hero2powerStats.intelligence)){
    count1 = count1 + 3
  }else{
    count2 = count2 + 3
  }


 
  if(Number(hero1powerStats.strength) > Number(hero2powerStats.strength)){
   count1 = count1 + 1
  }else{
    count2 = count2 + 1
  }

  

  if(Number(hero1powerStats.combat) > Number(hero2powerStats.combat)){
    count1 = count1 + 2
  }else{
    count2 = count2 + 2
  }


  if(Number(hero1powerStats.durability) > Number(hero2powerStats.durability)){
    count1 = count1 + 3
  }else{
    count2 = count2 + 3
  }


  if(Number(hero1powerStats.speed) > Number(hero2powerStats.speed)){
   count1 = count1 + 1
  }else{
    count2 = count2 + 1
  }


  if(Number(hero1powerStats.power) > Number(hero2powerStats.power)){
    count1 = count1 + 2
  }else{
    count2 = count2 + 2
  }



  setScore1(count1)

  setScore2(count2)


  if(count1 > count2){
    history.push("/winner/" + id1)
  }else{
    history.push("/winner/" + id2)
  }

}

const Background1 = heroImage1.url

const Background2 = heroImage2.url;
//${hero2.image.url}






  return (
    <>
      <div id="woo"className="row">
        <div id="entry1" className="col s4 m5">
          <Slide1>
            <div className="card-panel">
            <h5 className="heroName">{hero1.name}</h5>
            <img src={Background1} id="image" alt="superhero" />
              <div className="info">{hero1Height}</div>
              <div className="info">{hero1Weight} </div>
              <div className="info">{hero1Apperance.race} </div>
            </div>
          </Slide1>
        </div>
        <div id="entry2" className="col s4 m5">
          <Slide2>
            <div
              className="card-panel"
            >
              <h5 className="heroName">{hero2.name}</h5>
              <img src={Background2} id="image" alt="superhero1" />
              <div className="info">{hero2Height} </div>
              <div className="info">{hero2Weight} </div>
              <div className="info">{hero2Apperance.race} </div>
            </div>
          </Slide2>
        </div>
        <button id="calc" className="center-align" onClick={calculate}>Start this Thing</button>
      </div>
    </>
  );
}

export default Card;
