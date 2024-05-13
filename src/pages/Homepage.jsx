import React from 'react'
import { Link } from "react-router-dom";
// import { images } from "./images"


function Homepage() {
  return (
    <div className='homePage'>
    <h1>Homepage Page</h1>
    <div className='secondNav'>
      <ul className='aboutPortCont'>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Portfolio"><li>Portfolio</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>
    </div>
    <div className='myName'>
      Christian Sanchez
    </div>
    <div className='myImage'>
    <img className='imageOne' src='./images/Untitled_Artwork.gif' alt="" />
    </div>
    </div>
  )
}

export default Homepage