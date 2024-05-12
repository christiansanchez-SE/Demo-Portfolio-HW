import React from "react";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="resumePageContainer">
      <div className="resmueContainer">
        <div className="resmueName">
          <h1>Christian Sanchez</h1>
        </div>
        <div className="resumeContactInfo">
          <ul className="contactLi">
            <li>Email: christiansanchez714@gmail.com</li>
            <li>Linkedin: www.linkedin.com/in/christian-sanchezse</li>
            <li>GitHub: https://github.com/christiansanchez-SE</li>
          </ul>
        </div>

        <div className="profSum">
          <strong>PROFILE SUMMARY:</strong> Dedicated and motivated software
          engineer professional with a solid foundation in web development and
          computer programming. Proven track record of leveraging technical
          expertise and leadership skills to drive impactful projects, including
          data analysis initiatives at Mount Sinai Hospital. Seeking to apply my
          diverse skill set and passion for innovation to contribute effectively
          to a dynamic team. <strong>Languages:</strong> English and Spanish
        </div>

        <div>
            <ul>
                <li></li>
            </ul>
          TECHNICAL SKILLS:
          ● Programming Languages: - JavaScript, TypeScript 
          ● Web Development: -HTML, CSS, JavaScript, TypeScript, Bootstrap 
          ● Database Management: - MongoDB, React, NodeJS, Express, SQL, NoSQL 
          ● Software Tools: - VScode, GitHub, Gitbash, Bootstrap
        </div>
      </div>

      <div className="return">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default Resume;
