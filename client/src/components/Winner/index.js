import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

function Winner() {
  // UseEffect to Load in Characters

  useEffect(() => {
    getHero1();
    getHero2();
  }, []);

  const history = useHistory()
  useEffect(() => {
    return () => {
        if (history.action === "POP") {
            history.replace(history.location.pathname, "/");
        }
    };
}, [history])
  //UseState to Set Characters

  // const styles = {
  //   intelligence:{
  //     textColor: "orange"
  //   },
  // }

  // function highlight(hero1, hero2){
  //   const arr1 = Object.values(hero1);
  //   const arr2 = Object.values(hero2);

  //   for (var i = 0; i < arr1.length; i++) {
  //     var stat1 = Number(arr1[i]);
  //     var stat2 = Number(arr2[i]);

  //     if (stat1 > stat2) {
        
  //     }

  //     if (stat2 > stat1) {
        
  //     }
  // }
  // }

  
  const [hero1, setHero1] = useState([]);

  const [heroImage1, setHeroImage1] = useState([]);
  const [hero1powerStats, setHero1powerStats] = useState([]);
  const [hero1Height, setHero1Height] = useState([]);
  const [hero1Weight, setHero1Weight] = useState([]);
  const [hero1Apperance, setHero1Apperance] = useState([]);
  const [hero1bio, setHero1bio] = useState([]);

  const [hero2, setHero2] = useState([]);
  const [heroImage2, setHeroImage2] = useState([]);
  const [hero2powerStats, setHero2powerStats] = useState([]);
  const [hero2Apperance, setHero2Apperance] = useState([]);
  const [hero2bio, setHero2bio] = useState([]);
  const [heroAlias, setHeroAlias] = useState([]);

  //API Calls
  const { id1 } = useParams();
  const { id2 } = useParams();

  function getHero1() {
    API.findByID(id1)
      .then((res) => {
        setHero1(res.data);
        setHeroImage1(res.data.image);
        setHero1Apperance(res.data.appearance);
        setHero1Height(res.data.appearance.height[0]);
        setHero1Weight(res.data.appearance.weight[0]);
        setHero1bio(res.data.biography);
        setHeroAlias(res.data.biography.aliases);
        setHero1powerStats(res.data.powerstats);
      })
      .catch((err) => console.log(err));
  }

  function getHero2() {
    API.findByID(id2)
      .then((res) => {
        setHero2(res.data);
        setHeroImage2(res.data.image);
        setHero2Apperance(res.data.appearance);
        setHero2bio(res.data.biography);
        setHero2powerStats(res.data.powerstats);
      })
      .catch((err) => console.log(err));
  }

  const Background1 = heroImage1.url;




  return (
    <>
      <h4 id="win" >Your Winner is... </h4>
      <div id="lside1" className="col s12 m6 l6 ">
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
      <div id="breakdown" className="col s6 m6 l6 ">
        <div className="section">
          <h4 id="titles">See the breakdown</h4>
          <p>Learn about our formula!</p>
          <div className="divider"></div>
    
          <table >
            <tbody>
            <tr>
              <th style={{ width: "30%" }}>Categories <br /> (0-100)</th>
              <th>
                {hero1.name} <br /> (Winner)
              </th>
              <th>
                {hero2.name} <br />  (Loser)
              </th>
            </tr>
            <tr>
              <td>Strength</td>
              <td>
                <p className="num">{(hero1powerStats.strength === null) ? 0 : hero1powerStats.strength}</p>
              </td>
              <td>
                <p className="num">{(hero2powerStats.strength === null) ? "0" : hero2powerStats.strength}</p>
              </td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>
                <p className="num">{hero1powerStats.speed}</p>
              </td>
              <td>
                <p className="num">{hero2powerStats.speed}</p>
              </td>
            </tr>
            <tr>
              <td>Power</td>
              <td>
                <p className="num">{hero1powerStats.power}</p>
              </td>
              <td>
                <p className="num">{hero2powerStats.power}</p>
              </td>
            </tr>
            <tr>
              <td>Combat</td>
              <td>
                <p className="num">{hero1powerStats.combat}</p>
              </td>
              <td>
                <p className="num">{hero2powerStats.combat}</p>
              </td>
            </tr>
            <tr>
              <td>Durability</td>
              <td>
                <p className="num">{hero1powerStats.durability}</p>
              </td>
              <td>
                <p className="num">{hero2powerStats.durability}</p>
              </td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>
                <p className="num">{hero1powerStats.intelligence}</p>
              </td>
              <td>
                <p className="num">{hero2powerStats.intelligence}</p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Winner;
