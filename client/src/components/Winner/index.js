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
  }, []);

  //UseState to Set Characters

  const [hero1, setHero1] = useState([]);

  const [heroImage1, setHeroImage1] = useState([]);

  const [hero1powerStats, setHero1powerStats] = useState([]);

  const [hero1Height, setHero1Height] = useState([]);


  const [hero1Weight, setHero1Weight] = useState([]);
  

  const [hero1Apperance, setHero1Apperance] = useState([]);

  const [heroBio, setHeroBio] = useState([])

  const [heroAlias, setHeroAlias] = useState([])


  //API Calls
  const { id } = useParams();

  function getHero1() {
    API.findByID(id)
      .then((res) => {
        setHero1(res.data);
        setHeroImage1(res.data.image);
        setHero1Apperance(res.data.appearance);
        setHero1Height(res.data.appearance.height[0]);
        setHero1Weight(res.data.appearance.weight[0]);
        setHeroBio(res.data.biography);
        setHeroAlias(res.data.biography.aliases)
        setHero1powerStats(res.data.powerstats);
      })
      .catch((err) => console.log(err));
  }

  const Background1 = heroImage1.url;


  console.log(hero1powerStats.intelligence)
 

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
                  Hair-Color: {hero1Apperance["hair-color"]} || Eye-Color: {hero1Apperance["eye-color"]}
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
            <ul className="collection">
                <li className="collection-item">Full-Name: {heroBio['full-name']} </li>
                <li className="collection-item">
                  Aliases:  {" "}
                  {heroAlias.map((alias) => (
                  <div key={alias}className="alias"> {alias},{" "}</div>
                ))}
                  </li>
                <li className="collection-item">Birth-Place: {heroBio['place-of-birth']}</li>
                <li className="collection-item">First-Appeared: {heroBio['first-appearance']}</li>
              </ul>
            </TabPanel>
            <TabPanel>
            <ul className="collection">
                <li className="collection-item">Intellegence: {hero1powerStats.intelligence} </li>
                  <li className="collection-item">Strength: {hero1powerStats.strength}</li>
                <li className="collection-item">Speed: {hero1powerStats.speed}</li>
                <li className="collection-item">Durability: {hero1powerStats.durability} </li>
                <li className="collection-item">Combat: {hero1powerStats.combat} </li>
                <li className="collection-item">Power: {hero1powerStats.power} </li>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Winner;
