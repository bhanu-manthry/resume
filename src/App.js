import React, { useEffect, useState } from "react";
import "./App.css";
import { Heading } from "./components/Heading";
import { Skill } from "./components/Skill";
import { Company as Company } from "./components/Company";
import { Education } from "./components/Education";

function App() {
  return (
    <div className="App">
      <div
        className="flex-container"
        style={{ justifyContent: "space-between" }}
      >
        <div style={{ flex: 0.65 }}>
          <Heading
            name="Bhanu Prasad Manthry"
            dob={
              <>
                9<sup>th</sup> Nov, 1994
              </>
            }
            address="# 12-5-5/4, Tarnaka, Hyderabad"
            email="manthrybhanu@gmail.com"
            phone="+91 8125 64 1250"
          />
          <LeftContent />
        </div>

        <div style={{ flex: 0.3 }}>
          <RightContent />
        </div>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div>
      <section>
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i class="material-icons">person</i>
            </div>
            &nbsp;
            <div>Profile</div>
          </div>
        </div>
        <div>
          Looking to obtain the position of Software Developer in a fast-paced
          tech environment to utilize well honed skills in computer science and
          extensive experience in developing customized software based on
          varying client demands.
        </div>
      </section>

      <WorkExperience>
        <Company
          company="Janaspandana"
          location="Kondapur, Hyderabad"
          from="2018"
          to="PRESENT"
          role="Lead Software Engineer"
        >
          <Projects>
            <Project
              title="Anurag University"
              desc="A University management and learning
              management system."
              content="Provided end to end solution for the entire Anurag University
              which includes managing admissions, attendance, students
              performance, exams, library, clubs, fees and many others. Entire
              system has various web portals and mobile apps which are being
              used every day and every minute."
              tech="Typescript, NestJS, React, Redux, MySQL"
            />
            <Project
              title="IAE (Indian Aptitude Exam)"
              desc="An online test platform with
              the user base of 10K+ people where the students and individuals
              can purchase tests, attempt tests and get the ranking, medal and
              certificate for the attempted test"
              tech="Javascript, NodeJS, ExpressJS, React, Redux, MySQL"
            />
            <Project
              title="Drunken Monkey"
              desc="Drunken Monkey is a chain of smoothie bars."
              content="Developed a POS (Point of Sale) & KOD (Kitchen Order Display
                System) which are being used by all the franchises in India."
              tech="React/Redux, PHP, Magento, Elasticsearch"
            />
            <Project
              title="Docco"
              desc="A video calling mobile application for doctors and
              patients where patients can pay and book appointments to video
              chat with doctors"
              tech="PHP, Laravel, Flutter, Android, React"
            />
          </Projects>
        </Company>

        <Company
          company="Powern Solutions"
          location="ECIL, Hyderabad"
          from="2016"
          to="2018"
          role="Software Engineer"
        >
          <Projects>
            <Project
              title="SCADA Systems"
              desc="A Web based SCADA system used by pharmaceutical industries."
              tech="Javascript, NodeJS, ExpressJS, Socket.IO, AngularJS, Angular
              Material, Phaser Game Engine, MySQL"
            />
            <Project
              title="Ergomon"
              desc="An energy monitoring and management system"
              tech="PHP, CodeIgniter, MySQL, Javascript, Java, Python"
            />
          </Projects>
        </Company>
      </WorkExperience>

      <section>
        <div>
          <div className="title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <i class="material-icons">directions_run</i>
              </div>
              &nbsp;
              <div>Achievements</div>
            </div>
          </div>
          <ul>
            <li>
              Developed opensource libraries which are being used by various
              people across the globe.
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 0 }}>
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i class="material-icons">school</i>
            </div>
            &nbsp;
            <div>Education</div>
          </div>
        </div>
        <Education
          location="NARAYANGUDA, HYDERABAD"
          from="2013"
          to="2016"
          role="Bachelor of Science in Electronics"
          company="HRD Degree and PG College"
        ></Education>
      </section>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <section>
      <div className="title">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <i class="material-icons">work</i>
          </div>
          &nbsp;
          <div>Work Experience</div>
        </div>
      </div>
      {props.children}
    </section>
  );
}

function Projects({ children }) {
  return (
    <React.Fragment>
      <p style={{ marginBottom: 0, marginTop: "2px" }}>
        <b>Projects</b>
      </p>
      <ul>{children}</ul>
    </React.Fragment>
  );
}

function Project({ title, desc, content, tech }) {
  return (
    <li>
      <div>
        <b>{title}:</b> {desc}
      </div>

      <div>{content}</div>

      <div
        style={{
          fontSize: "10px",
          fontWeight: "bold",
          marginTop: "8px",
          marginBottom: "4px",
        }}
      >
        Languages and Technologies used
      </div>
      <div>{tech}</div>
    </li>
  );
}

function RightContent() {
  return (
    <div>
      <section>
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i class="material-icons">science</i>
            </div>
            &nbsp;
            <div>Skills</div>
          </div>
        </div>

        <div>
          <div className="subtitle"> - BACKEND TECHNOLOGIES</div>
          <Skill name="NodeJS" rating={11} />
          <Skill name="ExpressJS" rating={11} />
          <Skill name="NestJS" rating={11} />
          <Skill name="Laravel" rating={10} />
          {/* <Skill name="Java Spring" rating={10} /> */}
          <Skill name="Django" rating={9} />
        </div>

        <div>
          <div className="subtitle"> - FRONTEND TECHNOLOGIES</div>
          <Skill name="ReactJS" rating={11} />
          <Skill name="ReactNative" rating={9} />
          <Skill name="Flutter" rating={11} />
          <Skill name="Android" rating={9} />
        </div>

        <div>
          <div className="subtitle"> - DATABASE TECHNOLOGIES</div>
          <Skill name="MySQL" rating={10} />
          <Skill name="MongoDB" rating={9} />
          <Skill name="Firebase" rating={10} />
        </div>

        <div>
          <div className="subtitle"> - PROGRAMMING LANGUAGES</div>
          <Skill name="Javascript" rating={11} />
          <Skill name="Typescript" rating={11} />
          <Skill name="Python" rating={9} />
          <Skill name="PHP" rating={10} />
          <Skill name="Java" rating={10} />
          <Skill name="Dart" rating={11} />
          <Skill name="SQL" rating={10} />
          <Skill name="HTML5/CSS3" rating={11} />
        </div>

        <div>
          <div className="subtitle"> - CLOUD TECHNOLOGIES</div>
          <Skill name="AWS" rating={10} />
          <Skill name="Google Cloud" rating={9} />
          <Skill name="Digital Ocean" rating={10} />
        </div>
      </section>

      <section>
        <div>
          <div className="title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <i class="material-icons">language</i>
              </div>
              &nbsp;
              <div>Languages</div>
            </div>
          </div>
          <Skill name="English" rating={11} />
          <Skill name="Hindi" rating={11} />
          <Skill name="Telugu" rating={11} />
        </div>
      </section>

      {/* Personal projects */}
      <section>
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i class="material-icons">assignment</i>
            </div>
            &nbsp;
            <div>Personal Projects</div>
          </div>
        </div>
        <ul>
          <li>
            <b>Home Automation:</b>A Home Automation system by which I can
            monitor and control the Devices (Fans, Lights etc) from anywhere
            using mobile app.
            <div
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                marginTop: "8px",
                marginBottom: "4px",
              }}
            >
              Languages and Technologies used
            </div>
            <div>Java, Kotlin, Android, Python, MQTT</div>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <div className="title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <i class="material-icons">directions_run</i>
              </div>
              &nbsp;
              <div>Hobbies</div>
            </div>
          </div>
          <ul>
            <li>Developing & Contributing to opensource projects.</li>
            <li>Learning new programming languages & technologies.</li>
            <li>Developing personal projects.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
