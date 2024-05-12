import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <div>
        <div>Portfolio</div>
        <div className="return">
          <Link to="/">Go back</Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
