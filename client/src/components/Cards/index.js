import React, { useEffect, useState } from "react";
import { useParams, useHistory} from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

function Card() {
  // UseEffect to Load in Characters

  useEffect(() => {
    getHero1();
    getHero2();
  }, []);

  //UseState to Set Characters

  const [hero1, setHero1] = useState([]);
  const [hero2, setHero2] = useState([]);

  const [heroImage1, setHeroImage1] = useState([]);
  const [heroImage2, setHeroImage2] = useState([]);

  const [hero1Height, setHero1Height] = useState([]);
  const [hero2Height, setHero2Height] = useState([]);

  const [hero1Weight, setHero1Weight] = useState([]);
  const [hero2Weight, setHero2Weight] = useState([]);

  const [hero1Apperance, setHero1Apperance] = useState([]);
  const [hero2Apperance, setHero2Apperance] = useState([]);

  const [hero1powerStats, setHero1powerStats] = useState([]);
  const [hero2powerStats, setHero2powerStats] = useState([]);

  //API Calls
  const { id1 } = useParams();
  const { id2 } = useParams();

  function getHero1() {
    API.findByID(id1)
      .then((res) => {
        if (res.data === undefined) {
          getHero1();
        } else {
          setHero1(res.data);
          setHeroImage1(res.data.image);
          setHero1Apperance(res.data.appearance);
          setHero1Height(res.data.appearance.height[0]);
          setHero1Weight(res.data.appearance.weight[0]);
          setHero1powerStats(res.data.powerstats);
        }
      })
      .catch((err) => console.log(err));
  }

  function getHero2() {
    API.findByID(id2)
      .then((res) => {
        setHero2(res.data);
        setHeroImage2(res.data.image);
        setHero2Apperance(res.data.appearance);
        setHero2Height(res.data.appearance.height[0]);
        setHero2Weight(res.data.appearance.weight[0]);
        setHero2powerStats(res.data.powerstats);
      })
      .catch((err) => console.log(err));
  }

  const history = useHistory();

  function getScore(hero1, hero2, hero1id, hero2id) {
    
    const arr1 = Object.values(hero1);
    const arr2 = Object.values(hero2);


    var score1 = 0;
    var score2 = 0;

    for (var i = 0; i < arr1.length; i++) {
        var stat1 = Number(arr1[i]);
        var stat2 = Number(arr2[i]);

        if(stat1 === null){
           var stat1 = 0
        }
        
        if(stat2 === null){
          stat2 = 0
      }

        if (stat1 > stat2) {
          var sum = stat1 - stat2;
          if (sum >= 40) {
            score1 = score1 + 4;
          }
          if (sum >= 20 && sum < 40) {
            score1 = score1 + 3;
            
          }
          if (sum >= 10 && sum < 20) {
            score1 = score1 + 2;
            
          }
          if (10 > sum) {
            score1 = score1 + 1;
            
          }
        }

        if (stat2 > stat1) {
          var sum = stat2 - stat1;
          if (sum >= 40) {
            score2 = score2 + 4;
          }
          if (sum >= 20 && sum < 40) {
            score2 = score2 + 3;
          }
          if (sum >= 10 && sum < 20) {
            score2 = score2 + 2;
          }
          if (10 > sum) {
            score2 = score2 + 1;
          }
        }
    }

    console.log(hero1.id)
    if (score1 > score2) {
      history.push("/winner/" + hero1id + "/" + hero2id);
    }
  
    if (score1 < score2) {
      history.push("/winner/" + hero2id + "/" + hero1id);
    }
  
    if (score1 === score2) {
      if (Number(hero1Weight) > Number(hero2Weight)) {
        history.push("/winner/" + hero1id + "/" + hero2id);
      } else {
        history.push("/winner/" + hero2id + "/" + hero1id);
      }
    }
  }

 
  const Background1 = heroImage1.url;

  const Background2 = heroImage2.url;
 
  return (
    <>
      <div id="disp" className="row">
        <div id="lside" className="col s12 m12 l6 box ">
          <div id="lsideone">
            <div className="heroNames">{hero1.name}</div>
            <div className="tit">Notable Attributes</div>
            <div className="infos">Height: {hero1Height} </div>
            <div className="infost">Weight: {hero1Weight} </div>
            <div className="infos">Race: {hero1Apperance.race} </div>
            <div className="infost">Gender: {hero1Apperance.gender}</div>
          </div>
          <img src={Background1} id="image" alt="superhero" />
        </div>
        <div id="rside" className="col s12 m12 l6 box ">
          <div id="rsideone">
            <div className="heroNames">{hero2.name}</div>
            <div className="tit">Notable Attributes</div>
            <div className="infos">Height: {hero2Height} </div>
            <div className="infost">Weight: {hero2Weight} </div>
            <div className="infos">Race: {hero2Apperance.race} </div>
            <div className="infost">Gender: {hero2Apperance.gender}</div>
          </div>

          <img src={Background2} id="image" alt="superhero1" />
        </div>
      </div>
      <button
        id="calc"
        className="center-align"
        onClick={() => getScore(hero1powerStats, hero2powerStats, hero1.id, hero2.id)}
      >
        Start Showdown
      </button>
    </>
  );
}

export default Card;
