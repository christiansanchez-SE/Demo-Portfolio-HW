import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div>About Page</div>
      <div className="return">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default About;
