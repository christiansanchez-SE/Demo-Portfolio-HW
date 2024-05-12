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
          <div>
            <strong>PROFILE SUMMARY:</strong>
          </div>
          <div>
            Dedicated and motivated software engineer professional with a solid
            foundation in web development and computer programming. Proven track
            record of leveraging technical expertise and leadership skills to
            drive impactful projects, including data analysis initiatives at
            Mount Sinai Hospital. Seeking to apply my diverse skill set and
            passion for innovation to contribute effectively to a dynamic team.
          </div>
          <div>
            <strong>Languages:</strong>
            English and Spanish
          </div>
        </div>

        {/*/////////////////////////////// Technical Skills ///////////////////////////////*/}

        <div className="resumeTechSkills">
          <h3>TECHNICAL SKILLS:</h3>
          <ul>
            <li>
              <strong>Programming Languages:</strong> JavaScript, TypeScript
            </li>
            <li>
              <strong>Web Development:</strong> HTML, CSS, JavaScript, Bootstrap
            </li>
            <li>
              <strong>Database Management:</strong> MongoDB, React, NodeJS,
              Express, SQL, NoSQL
            </li>
            <li>
              <strong>Software Tools:</strong> VScode, GitHub, Gitbash
            </li>
          </ul>
        </div>

        {/*/////////////////////////////// Education ///////////////////////////////*/}

        <div className="resumeEducation">
          <h3>WORK EXPERIENCE</h3>
          <ul>
            <li>
              Per Scholas, Newark, New Jersey May 2024 Software Engineer
              Training
            </li>
            <li>
              Kean University, Union, New Jersey May 2019 Bachelor of Science
              Exercise Science | Consistent Dean’s Lister
            </li>
            <li>
              Robert Wood Johnson, New Brunswick, NJ December 2021 Certification
              in Emergency Medical Technician
            </li>
          </ul>
        </div>

        {/*/////////////////////////////// Work Experience ///////////////////////////////*/}

        <div className="resumeWorkExp">
          <div className="mountSinai">
            Mount Sinai: PRISM Research, New York, NY Clinical Research
            Coordinator ● Engaged in systematic and standardized observational
            human subject research, employing tailored research methodologies
            and interview techniques under the guidance of the principal
            investigator or senior clinical research personnel. ● Supported
            various clinical research tasks, including facilitating informed
            consent procedures, screening participants for eligibility, liaising
            with sponsoring agencies for patient registration, conducting
            questionnaire administration, performing lung function tests, and
            procuring non-invasive participant specimens. ● Managed the
            collection, analysis, and review of experimental data for subsequent
            publication and presentation, ensuring meticulous attention to
            detail, confidentiality, and data integrity. ● Demonstrated
            proficiency in the secure handling and shipment of clinical
            specimens in accordance with protocol specifications and regulatory
            guidelines.
          </div>

          <div className="reliance">
            Reliance Vitamin, Edison, NJ July 2020 - August 2021 Quality
            Assurance ● Supervised a team of 23 shift operators, ensuring
            alignment with product standards and promptly addressing any
            operational concerns. ● Implemented proactive measures to maintain
            and enhance product quality, swiftly identifying and resolving
            issues to prevent disruptions in production. ● Conducted
            comprehensive root cause analyses to identify underlying factors
            contributing to quality issues, implementing effective preventative
            actions to mitigate recurrence.
          </div>
        </div>

        {/*/////////////////////////////// Additional Experience ///////////////////////////////*/}

        <div className="additionalExp">
          <div className="rheumatoidRes">
            Rheumatoid Arthritis Research: ● Conducted independent research
            studies as part of an advanced biology course. ● Investigated the
            efficacy of long-term TNFR: Fc treatment in preventing chronic
            inflammatory arthropathy resembling Rheumatoid Arthritis in deficit
            mice. o Produced a comprehensive research essay, PowerPoint
            presentation, poster, and grant proposal outlining findings and
            treatment recommendations. o Explored solutions for managing
            Rheumatoid Arthritis, focusing on therapeutic interventions.
          </div>

          <div className="osteoarthritisRes">
            ● “The Effect of Tai Chi Exercises on Postural Stability and Control
            in Older Patients with Knee Osteoarthritis” o Developed a detailed
            PowerPoint presentation and essay elucidating research outcomes. o
            Presented findings at the International Tai Chi Chuan Symposium in
            Italy. o Investigated methods of treating Osteoarthritis through
            tailored exercise regimens. o Studied the pathophysiology of
            Osteoarthritis and proposed effective management strategies.
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
