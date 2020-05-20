//Dependencies
import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"

//Component Imports
import Body from "../src/components/Body"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
