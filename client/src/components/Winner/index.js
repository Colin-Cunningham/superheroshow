import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";
import API from "../../utils/API";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Div Animations -----------------
const leftIn = keyframes`${slideInRight}`;

//Hero One Slide in from the left
const Slide1 = styled.div`
  animation: 1s ${leftIn};
`;

function Winner() {
  // UseEffect to Load in Characters

  useEffect(() => {
    getHero1();
    getHero2();
  }, []);

  //UseState to Set Characters

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
  const [hero2Height, setHero2Height] = useState([]);
  const [hero2Weight, setHero2Weight] = useState([]);
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
        setHero2Height(res.data.appearance.height[0]);
        setHero2Weight(res.data.appearance.weight[0]);
        setHero2bio(res.data.biography);
        setHero2powerStats(res.data.powerstats);
      })
      .catch((err) => console.log(err));
  }

  const Background1 = heroImage1.url;

  console.log(hero1);

  return (
    <>
      <div id="woo" className="row">
        <h4>Your Winner is {hero1.name}</h4>
        <div id="entry1" className="col s4 m5">
          <Slide1>
            <img src={Background1} id="image1" alt="superhero" />
          </Slide1>
        </div>
        <div id="entry2" className="col s4 m5">
          <Tabs>
            <div id="tabhead">
              <TabList>
                <Tab>Appearance</Tab>
                <Tab>Biography</Tab>
                <Tab>Stats</Tab>
                <Tab>More...</Tab>
              </TabList>
            </div>

            <TabPanel>
              <ul className="collection">
                <li className="collection-item">Height: {hero1Height} </li>
                <li className="collection-item">Weight: {hero1Weight}</li>
                <li className="collection-item">Race: {hero1Apperance.race}</li>
                <li className="collection-item">
                  Gender: {hero1Apperance.gender}
                </li>
                <li className="collection-item">
                  Hair-Color: {hero1Apperance["hair-color"]} || Eye-Color:{" "}
                  {hero1Apperance["eye-color"]}
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="collection">
                <li className="collection-item">
                  Full-Name: {hero1bio["full-name"]}{" "}
                </li>
                <li className="collection-item">
                  Aliases:{" "}
                  {heroAlias.map((alias) => (
                    <div key={alias} className="alias">
                      {" "}
                      {alias},{" "}
                    </div>
                  ))}
                </li>
                <li className="collection-item">
                 <div>Birth-Place: {hero1bio["place-of-birth"]}</div>  
                </li>
                <li className="collection-item">
                 <div>First-Appeared: {hero1bio["first-appearance"]}</div> 
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="collection">
                <li className="collection-item">
                  <div>Intellegence: {hero1powerStats.intelligence}</div>
                  <div className="lose">{hero2.name}: {""}{hero2powerStats.intelligence}</div>{" "}
                </li>
                <li className="collection-item">
                  <div>Strength: {hero1powerStats.strength}</div>
                  <div className="lose">{hero2.name}: {""}{hero2powerStats.strength}</div>
                </li>
                <li className="collection-item">
                  <div>Speed: {hero1powerStats.speed}</div>
                  <div className="lose">{hero2.name}: {""}{hero2powerStats.speed}</div>
                </li>
                <li className="collection-item">
                  <div>Durability: {hero1powerStats.durability} </div>
                  <div className="lose">{hero2.name}: {""}{hero2powerStats.durability}</div>
                </li>
                <li className="collection-item">
                  <div>Combat: {hero1powerStats.combat}</div>
                  <div className="lose">{hero2.name}: {""}{hero2powerStats.combat}</div>{" "}
                </li>
                <li className="collection-item">
                  <div>Power: {hero1powerStats.power}</div>
                  <div className="lose">{hero2.name}: {""}{hero2powerStats.power}</div>{" "}
                </li>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Winner;
