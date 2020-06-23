import React, {useState} from "react";
import movies from "./movies.json";
import {Link, Route} from "react-router-dom"
import "./style.css"

function QuizChoice() {

  const [params, setParams] = useState("");


  return (
    <>
    <Route exact path={"/quiz"}>
    <div></div>
    <div className="ui link cards" id="links"  >
      {movies.map((movie) => (
        <div  id="poster">
          <Link to={"/quiz/" + movie.link} onClick={(e) => setParams(movie.link)}>
            <img src={movie.image} id="hey" alt={movie.name} style={{width:"100%"}}/>
            </Link> 
          </div>
          
      ))}
    </div>
    </Route>

    </>
  );
}

export default QuizChoice;
