import React from "react";
import "./style.css";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import ReactPlayer from "react-player"
import podimg from "./Podacts.jpeg"

function amg() {
  return (
    <>
      <div id="img"> </div>
      <div className="btn-group">
        <TwitterFollowButton  screenName={"AnotherMarvelG"} />{" "}
        <a href="https://www.youtube.com/anothermarvelguy" rel="noopener noreferrer" target="_blank">
          <button className="ui youtube button">
            <i className="youtube icon"></i>
            Youtube
          </button>
        </a>
        <a href="https://www.instagram.com/anothermarvelg/" rel="noopener noreferrer" target="_blank">
          <button className="ui instagram button">
            <i className="instagram icon"></i>
            Instagram
          </button>
        </a>
      </div>
      <div className="row">
        <div id="contenthold" className="col s12 m12 l8">
          <div className="ui vertical segment">
            <p>Welcome to my website! My name is Alex Semp and I am AnotherMarvelGuy. In a world full of fans and creators making content about the movies and shows they love, I decided to become Another one (get it?). </p>
          </div>
          <div className="ui vertical segment">
            <p>Along with my friend Tom G (The Other Marvel Guy), the creator of this website and the co-host of my <a href="https://linktr.ee/anothermarvelguy" rel="noopener noreferrer" target="_blank" >podcast </a>, we strive to create a Marvel community built on positivity and shared interests. If this sounds good to you stay tuned, cause we have a whole bunch of video content coming. Thank you and I’ll catch y’all in a blip! </p>
          </div>
        </div>
        <div id="twitter" className="col s12 m12 l4">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="AnotherMarvelG"
            options={{ height: 400 }}
          />
        </div>
      </div>
      <div id="video" className="col s12 m12 l12">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ITuAcFY8mFk"
        width="inherit"
      />
    </div>
    <div className="row">
    <div id="podcast" className="col s12 m6 l6">
      <img src={podimg} id="podimg"alt="let"/>
    </div>
    <div id="podcast" className="col s12 m6 l6">
    <div className="ui vertical segment">
        <p style={{color: "black"}}>Talking about Marvel, the MCU, and some other off-topic conversations. Host: Semp, otherwise known as AnotherMarvelGuy on YouTube. Co-host: Colin, self-proclaimed as TOMG. New episodes every other week, Fridays at 10:00am. Catch y'all in a blip! </p>
        <a style={{textDecoration: "underline"}}href="https://linktr.ee/anothermarvelguy" rel="noopener noreferrer" target="_blank" >Find us on your platform!</a>
    </div>
    <div className="ui vertical segment">
    <iframe src="https://anchor.fm/anothermarvelguy/embed"  title="podcast" height="102px" width="inherit" frameBorder="0" scrolling="no"></iframe> 
     </div>
    </div>
    </div>
    </>
  );
}

export default amg;
