import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/Resume">
        <div>Resume</div>
      </Link>
    </div>
  );
}

export default Nav;
