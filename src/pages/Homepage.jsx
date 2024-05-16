import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homePage">
      <h1>Homepage Page</h1>

      <div className="secondNav">
        <ul className="aboutPortCont">
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Portfolio">
            <li>Portfolio</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="myName">Hi I'm Christian Sanchez</div>

      <div className="myImage">
        <img className="imageOne" src="./images/Untitled_Artwork.gif" alt="" />
      </div>

      <div className="shortDes">
      As a software engineer specializing in UI/UX, I focus on creating intuitive and visually appealing user interfaces. I work closely with designers and developers to translate user needs into seamless digital experiences. Using my coding skills, I bring designs to life while ensuring they are functional and responsive across devices. I stay updated on the latest trends to continuously enhance our products and elevate user satisfaction.
      </div>
    </div>
  );
}

export default Homepage;
