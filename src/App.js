import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="flex-container" style={{ justifyContent: 'space-between' }}>
        <div style={{ flex: 0.65 }}>
          <LeftContent />
        </div>

        <div style={{ flex: 0.3 }}>
          <RightContent />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div style={{
      // borderBottom: '1px solid black',
      paddingBottom: '10px',
      // padding: '32px',
    }}>
      <div className="my-name" style={{ marginBottom: '0.3rem' }}>Bhanu Prasad Manthry</div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <i class="material-icons" style={{ fontSize: '12px', lineHeight: '1.2rem' }}>perm_identity</i>
        </div>
          &nbsp;
        <div>
          <div>9<sup>th</sup> Nov, 1994</div>
        </div>
      </div>



      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <i class="material-icons" style={{ fontSize: '12px', lineHeight: '1.2rem' }}>location_on</i>
          </div>
          &nbsp;
          <div>
            # 12-5-5/4, Tarnaka, Hyderabad
          </div>

          <div style={{ width: '2rem' }}></div>

          <div>
            <i class="material-icons" style={{ fontSize: '12px', lineHeight: '1.2rem' }}>phone_iphone</i>
          </div>
          &nbsp;
          <div>
            +91 8125 64 1250
          </div>
        </div>

      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <i class="material-icons" style={{ fontSize: '12px', lineHeight: '1.2rem' }}>mail</i>
          </div>
          &nbsp;
          <div>
            manthrybhanu@gmail.com
          </div>
        </div>
      </div>

      <div style={{ marginBlock: '0rem' }}></div>
    </div>
  )
}

function LeftContent() {
  return (
    <div>
      <section>
        <div className="title">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <i class="material-icons">person</i>
            </div>
            &nbsp;
            <div>
              Profile
            </div>
          </div>
        </div>
        <div>
          Looking to obtain the position of Software Developer in a fast-paced tech environment to utilize well honed skills in computer science and extensive experience in developing customized software based on varying client demands.
        </div>
      </section>

      <section>
        <div className="title">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <i class="material-icons">work</i>
            </div>
            &nbsp;
            <div>
              Work Experience
            </div>
          </div>
        </div>
        <Experience
          company="Janaspandana"
          location="Kondapur, Hyderabad"
          from="2018"
          to="PRESENT"
          role="Lead Software Engineer"
        >
          <p style={{ marginBottom: 0 }}>
            <b>Projects</b>
          </p>
          <ul>
            <li>
              <b>Anurag University:</b> A University management and learning management system
              <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '8px', marginBottom: '4px' }}>
                Languages and Technologies used
              </div>
              <div>
                Typescript, NestJS, React, Redux, MySQL
              </div>
            </li>

            <li>
              <b>IAE (Indian Aptitude Exam):</b> An online test platform with the user base of 10K+ people where the students and individuals can purchase tests, attempt tests and get the ranking, medal and certificate for the attempted test
              <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '8px', marginBottom: '4px' }}>
                Languages and Technologies used
              </div>
              <div>
                Javascript, NodeJS, ExpressJS, React, Redux, MySQL
              </div>
            </li>

            <li>
              <b>Docco:</b> A video calling mobile application for doctors and patients where patients can pay and book appointments to video chat with doctors
              <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '8px', marginBottom: '4px' }}>
                Languages and Technologies used
              </div>
              <div>
                PHP, Laravel, Flutter, Android, React
              </div>
            </li>
          </ul>
        </Experience>

        <Experience
          company="Powern Solutions"
          location="ECIL, Hyderabad"
          from="2016"
          to="2018"
          role="Software Engineer"
        >
          <ul>
            <li>
              <b>SCADA Systems:</b> A Web based SCADA system used by pharmaceutical industries.
              <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '8px', marginBottom: '4px' }}>
                Languages and Technologies used
              </div>
              <div>
                Javascript, NodeJS, ExpressJS, Socket.IO, AngularJS, Angular Material, Phaser Game Engine, MySQL
              </div>
            </li>

            <li>
              <b>Ergomon:</b> An energy monitoring and management system
              <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '8px', marginBottom: '4px' }}>
                Languages and Technologies used
              </div>
              <div>
                PHP, CodeIgniter, MySQL, Javascript, Java, Python
              </div>
            </li>
          </ul>
        </Experience>
      </section>

      {/* Personal projects */}
      <section>
        <div className="title">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <i class="material-icons">assignment</i>
            </div>
            &nbsp;
            <div>
              Personal Projects
            </div>
          </div>
        </div>
        <ul>
          <li>
            <b>Home Automation:</b>
            A Home Automation system by which I can monitor and control the Devices (Fans, Lights etc)
            from anywhere using mobile app.
            <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '8px', marginBottom: '4px' }}>
              Languages and Technologies used
            </div>
            <div>
              Java, Kotlin, Android, Python, MQTT
            </div>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 0 }}>
        <div className="title">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <i class="material-icons">school</i>
            </div>
            &nbsp;
            <div>
              Education
            </div>
          </div>
        </div>
        <Experience
          location="NARAYANGUDA, HYDERABAD"
          from="2013"
          to="2016"
          role="Bachelor of Science in Electronics"
          company="HRD Degree and PG College"
        >
        </Experience>
      </section>
    </div>
  )
}

function Experience({ from, to, location, role, company, ...props }) {
  return (
    <div className="Experience">
      <div>
        <div className="duration-location" style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <i class="material-icons">date_range</i>
            &nbsp;
          </div>
          <div>
            {from} – {to}
          </div>

          <div style={{ width: '1rem' }}></div>

          <div>
            <i class="material-icons">location_on</i>
            &nbsp;
            {location}
          </div>
        </div>

        <div className="role">{role}</div>
        <div className="company">{company}</div>
        {props.children}
      </div>
    </div>
  )
}


function RightContent() {
  return (
    <div>
      <section>
        <div className="title">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <i class="material-icons">science</i>
            </div>
            &nbsp;
            <div>
              Skills
            </div>
          </div>
        </div>
        <div>
          <div className="subtitle"> - SOFTWARE DEVELOPMENT</div>
          <Skill name="HTML5/CSS3" rating={11} />
          <Skill name="Javascript" rating={11} />
          <Skill name="Typescript" rating={11} />
          <Skill name="NodeJS" rating={11} />
          <Skill name="PHP" rating={10} />
          <Skill name="Laravel" rating={10} />
          <Skill name="Java" rating={9} />
          <Skill name="Java Spring" rating={7} />
          <Skill name="Flutter" rating={11} />
          <Skill name="Dart" rating={10} />
          <Skill name="Python" rating={8} />
          <Skill name="Django" rating={8} />
          <Skill name="OOPs" rating={9} />
          <Skill name="AWS" rating={7} />
          <Skill name="Android" rating={8} />
          <Skill name="MySQL" rating={9} />
          <Skill name="MongoDB" rating={6} />
        </div>

        <div>
          <div className="subtitle"> - SYSTEM & NETWORKING</div>
          <Skill name="Git" rating={10} />
          <Skill name="CI/CD" rating={6} />
          <Skill name="Unix/Linux Systems" rating={9} />
          <Skill name="Machine Learning" rating={3} />
        </div>
      </section>

      <section>
        <div>
          <div className="title">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <i class="material-icons">language</i>
              </div>
              &nbsp;
              <div>
                Languages
            </div>
            </div>
          </div>
          <Skill name="English" rating={11} />
          <Skill name="Hindi" rating={11} />
          <Skill name="Telugu" rating={11} />
        </div>
      </section>

      <section>
        <div>
          <div className="title">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <i class="material-icons">directions_run</i>
              </div>
            &nbsp;
            <div>
                Achievements
            </div>
            </div>
          </div>
          <ul>
            <li>Developed a POS & KOD for Drunken Monkey which is being used by all the franchises in India.</li>
            <li>Revamped the existing mobile app codebase from Java/Kotlin codebase to Flutter/Dart in record time.</li>
            <li>Developed opensource libraries which are being used by various people across the globe.</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <div className="title">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <i class="material-icons">directions_run</i>
              </div>
            &nbsp;
            <div>
                Hobbies
            </div>
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
  )
}

function Skill(props) {
  return (
    <div style={{
      display: 'flex', marginBottom: '6px', alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ flex: 1 }}>
        {props.name}
      </div>
      <div style={{ flex: 1 }}>
        <Rating rating={props.rating} />
      </div>
    </div>
  )
}

function Rating(props) {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <div style={{
          display: 'inline-block', width: '10px', height: '10px',
          background: index < props.rating ? 'black' : '#dedede'
        }}>
        </div>
      ))}
    </div>
  )
}

export default App;
