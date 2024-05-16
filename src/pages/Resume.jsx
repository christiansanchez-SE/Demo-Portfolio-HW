import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import ProfSum from "../dataResume/ProfSum";
import TechSkills from "../dataResume/TechSkills";
import Education from "../dataResume/Education";
import WorkExp from "../dataResume/WorkExp";
import AddExp from "../dataResume/AddExp";

// const reducer = (state, action) => {
//   switch (key) {
//     case value:
//       break;

//     default:
//       break;
//   }
// };

function Resume() {
  const [currentSum, setCurrentSum] = useState(ProfSum);
  const [currentTech, setCurrentTech] = useState(TechSkills);
  const [currentEd, setCurrentEd] = useState(Education);
  const [currentWorkExp, setCurrentWorkExp] = useState(WorkExp);
  const [currentAddExp, setCurrentAddExp] = useState(AddExp);

  return (
    <div className="resumePageContainer">
      <div className="resmueContainer">
        <div className="resmueName">
          <h1>Christian Sanchez</h1>
        </div>
        <div className="resumeContactInfo">
          <ul className="contactLi">
            <li>Email: christiansanchez714@gmail.com</li>
            <li>
              Linkedin:{" "}
              <Link to="https://www.linkedin.com/in/christian-sanchezse">
                www.linkedin.com/in/christian-sanchezse
              </Link>
            </li>
            <li>
              GitHub:{" "}
              <Link to="https://github.com/christiansanchez-SE">
                https://github.com/christiansanchez-SE
              </Link>
            </li>
          </ul>
        </div>

        {/*/////////////////////////////// Profesional Summary ///////////////////////////////*/}

        <div className="profSum">
          <div className="sum">{currentSum[0].summary}</div>
          <div className="lang">{currentSum[0].languages}</div>
        </div>

        {/*/////////////////////////////// Technical Skills ///////////////////////////////*/}

        <div className="resumeTechSkills">
          <h3>TECHNICAL SKILLS:</h3>
          <div>
            <strong>Programming Languages:</strong> {currentTech[0].proLang}
          </div>
          <div>
            <strong>Web Development:</strong> {currentTech[0].webDev}
          </div>
          <div>
            <strong>Database Management:</strong> {currentTech[0].dataMan}
          </div>
          <div>
            <strong>Software Tools:</strong> {currentTech[0].softwareTools}
          </div>
        </div>

        {/*/////////////////////////////// Education ///////////////////////////////*/}

        <div className="resumeEducation">
          <h3>Education</h3>

          <div>
            <strong>{currentEd[0].name}</strong>
            {currentEd[0].location}
            {currentEd[0].date}
            {currentEd[0].career}
          </div>

          <div>
            <strong>{currentEd[1].name}</strong>
            {currentEd[1].location}
            {currentEd[1].date}
            {currentEd[1].career}
          </div>

          <div>
            <strong>{currentEd[2].name}</strong>
            {currentEd[2].location}
            {currentEd[2].date}
            {currentEd[2].career}
          </div>
        </div>

        {/*/////////////////////////////// Work Experience ///////////////////////////////*/}

        <div className="resumeWorkExp">
          <h3>Work Experience</h3>
          <div className="mountSinai">
            <div>{currentWorkExp[0].name}</div>
            <div>{currentWorkExp[0].location}</div>
            <div>{currentWorkExp[0].date}</div>
            <div>{currentWorkExp[0].job}</div>
            <ul>
              <li>{currentWorkExp[0].description.one}</li>
              <li>{currentWorkExp[0].description.two}</li>
              <li>{currentWorkExp[0].description.three}</li>
              <li>{currentWorkExp[0].description.four}</li>
            </ul>
          </div>
          <div className="reliance">
            <div>{currentWorkExp[1].name}</div>
            <div>{currentWorkExp[1].location}</div>
            <div>{currentWorkExp[1].date}</div>
            <div>{currentWorkExp[1].career}</div>
            <ul>
              <li>{currentWorkExp[1].description.one}</li>
              <li>{currentWorkExp[1].description.two}</li>
              <li>{currentWorkExp[1].description.three}</li>
            </ul>
          </div>
        </div>

        {/*/////////////////////////////// Additional Experience ///////////////////////////////*/}

        <div className="additionalExp">
          <h3>Additional Experience</h3>
          <div className="rheumatoidRes">
            <div>
              <h4>{currentAddExp[0].name}</h4>
            </div>
            <ul>
              <li>{currentAddExp[0].description.one}</li>
              <li>{currentAddExp[0].description.two}</li>
              <li>{currentAddExp[0].description.three}</li>
              <li>{currentAddExp[0].description.four}</li>
            </ul>
          </div>

          <div className="osteoarthritisRes">
            <div>
              <h4>{currentAddExp[1].name}</h4>
            </div>
            <ul>
              <li>{currentAddExp[1].description.one}</li>
              <li>{currentAddExp[1].description.two}</li>
              <li>{currentAddExp[1].description.three}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="return">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default Resume;
