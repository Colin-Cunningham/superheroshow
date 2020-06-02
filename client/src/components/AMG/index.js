import React from "react";
import "./style.css";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";

function amg() {
  return (
    <>
      <div id="img"> </div>
      <div className="btn-group">
        <TwitterFollowButton screenName={"AnotherMarvelG"} />{" "}
        <a href="https://www.youtube.com/anothermarvelguy" rel="noopener noreferrer" target="_blank">
          <button class="ui youtube button">
            <i class="youtube icon"></i>
            Youtube
          </button>
        </a>
        <a href="https://www.instagram.com/anothermarvelg/" rel="noopener noreferrer" target="_blank">
          <button class="ui instagram button">
            <i class="instagram icon"></i>
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
            <p>Along with my friend Tom G (The Other Marvel Guy), the creator of this website and the co-host of my <a href="" rel="noopener noreferrer" target="_blank" >podcast </a>, we strive to create a Marvel community built on positivity and shared interests. If this sounds good to you stay tuned, cause we have a whole bunch of video content coming. Thank you and I’ll catch y’all in a blip! </p>
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
      <div class="col s12 m6 offset-m3 l4 offset-l4 z-depth-6">
        <h1>Hi</h1><br/>
    </div>
    </>
  );
}

export default amg;
