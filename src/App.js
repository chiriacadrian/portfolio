import React from 'react';
import './App.css';
import { ProjectCard } from './components/ProjectCard';

// Project photos and avatar
import Photo from './images/photo.jpg';
import Netflix from './images/netflix.jpg';
import Converter from './images/converter.jpg';
import Exams from './images/exams.jpg';
import Viotrans from './images/viotrans.jpg';
import Portfolio from './images/portfolio.jpg';
import Movies from './images/movies.jpg';

// Skills icons
import Bootstrap from './images/icons/bootstrap.png'
import Css from './images/icons/css.png'
import Flutter from './images/icons/flutter.png'
import Git from './images/icons/git.png'
import Html from './images/icons/html.png'
import Invision from './images/icons/invision.png'
import Javascript from './images/icons/javascript.png'
import Jquery from './images/icons/jquery.png'
import Photoshop from './images/icons/photoshop.png'
import Reactjs from './images/icons/react.png'
import Sass from './images/icons/sass.png'
import Sql from './images/icons/sql.png'

// Contact icons
import Github from './images/icons/github.png'
import Linkedin from './images/icons/linkedin.png'
import Call from './images/icons/call.png'
import Mail from './images/icons/mail.png'

function App() {
  return (
    <div className="App" id="home">
      <header className="App-header">
        <div id="navbar" className="container" style={{ margin: "0px", zIndex: "100"}}>
          <div id="navlinks">
            <a href="#home" >Home</a>
            <a href="#about" >About</a>
            <a href="#projects" >Projects</a>
            <a href="#skills" >Skills</a>
            <a href="#contact" >Contact</a>
          </div>
        </div>
        <div style={{zIndex: "50"}}>
          <img src={Photo} alt="Avatar" />
          <div style={hor_space_40px}></div>
          <h1 style={whiteHeading}>
            Chiriac Adrian
        </h1>
          <h2 style={whiteHeading}>
            Developer, Designer, Music{'\u00A0'}Producer
        </h2>
        </div>

        <div className="waveWrapper waveAnimation">

          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
          </div>
        </div>

      </header>
      <section id="about" className="container">
        <h3 id="h3">About</h3>
        <p>I am passionate about development, music and graphics because in these fields I have the opportunity to express myself and to create something useful and beautiful at the same time. Putting art and technology together leads to the improvement of both, in my opinion. I love foreign languages, literature and philosophy because they are tools for studying man and life. In my spare time I play sports, study, create, that is work on some personal project, or I spend time with my friends and family.</p>
      </section>
      <section id="projects" className="container">
        <h3 id="h3">My Projects</h3>
        <div className="project-cards">
          <ProjectCard
            id="1"
            image={Netflix}
            title="Netflix Landing Page"
            description="A responsive reproduction of the Netflix landing page."
            technologies={["html", "css", "javascript"]}
            viewCodeUrl="https://github.com/chiriacadrian/netflix-landing-page/"
            seeLiveUrl="https://chiriacadrian.github.io/netflix-landing-page/"
          />
          <ProjectCard
            id="2"
            image={Converter}
            title="Casual Converter"
            description="A responsive casual converter that allows you to quickly convert weight, lenght and temperature into predefined units of measurement."
            technologies={["html", "css", "javascript", "bootstrap"]}
            viewCodeUrl="https://github.com/chiriacadrian/casual-converter/"
            seeLiveUrl="https://chiriacadrian.github.io/casual-converter/"
          />
          <ProjectCard
            id="3"
            image={Exams}
            title="My Exams List"
            description="A responsive web app that helps you keep track of your next exams. The information is stored locally in your browser."
            technologies={["html", "css", "javascript", "bootstrap"]}
            viewCodeUrl="https://github.com/chiriacadrian/my-exams-list/"
            seeLiveUrl="https://chiriacadrian.github.io/my-exams-list/"
          />
          <ProjectCard
            id="4"
            image={Viotrans}
            title="VioTrans"
            description="My first project for a client. A responsive presentational website that features carousels, galleries, custom maps and a contact form."
            technologies={["html", "css", "javascript", "bootstrap"]}
            codeDisabled={true}
            viewCodeUrl=""
            seeLiveUrl="http://viotrans.it/"
          />
          <ProjectCard
            id="5"
            image={Portfolio}
            title="Portfolio"
            description="A clean looking responsive portfolio created with React.js and React Shards to showcase my projects."
            technologies={["html", "css", "javascript", "react.js", "react-shards"]}
            viewCodeUrl="https://github.com/chiriacadrian/portfolio/"
            liveDisabled={true}
            seeLiveUrl=""
          />
          <ProjectCard
            id="6"
            image={Movies}
            title="Movie Info Point"
            description='A simple responsive react application that allows you to search for movies and get some information about them using the "The Movie DB" API.'
            technologies={["html", "css", "javascript", "react.js"]}
            viewCodeUrl="https://github.com/chiriacadrian/movie-info-point/"
            seeLiveUrl="https://chiriacadrian.github.io/movie-info-point/"
          />
        </div>
      </section>
      <section id="skills" className="container">
        <h3 id="h3">My Skills</h3>
        <img src={Html} alt="html" style={skillstyle} />
        <img src={Css} alt="css" style={skillstyle} />
        <img src={Sass} alt="sass" style={skillstyle} />
        <img src={Javascript} alt="javascript" style={skillstyle} />
        <img src={Jquery} alt="jquery" style={skillstyle} />
        <img src={Bootstrap} alt="bootstrap" style={skillstyle} />
        <img src={Reactjs} alt="reactjs" style={skillstyle} />
        <img src={Flutter} alt="flutter" style={skillstyle} />
        <img src={Sql} alt="sql" style={skillstyle} />
        <img src={Git} alt="git" style={skillstyle} />
        <img src={Invision} alt="invision" style={skillstyle} />
        <img src={Photoshop} alt="photoshop" style={skillstyle} />
      </section>
      <section id="contact" className="container">
        <h3 id="h3">Contact</h3>
        <div className="rowAlign">
          <a href="https://www.linkedin.com/in/adrian-chiriac-356629141/">
            <div >
              <img src={Linkedin} alt="linkedin" />
              <p>LinkedIn</p>
            </div>
          </a>
          <a href="https://github.com/chiriacadrian?tab=repositories">
            <div >
              <img src={Github} alt="github" />
              <p>GitHub</p>
            </div>
          </a>
          <a href="tel:3934307178">
            <div >
              <img src={Call} alt="Call" />
              <p>Call</p>
            </div>
          </a>
          <a href="mailto:chiriac.adrian96@hotmail.com">
            <div >
              <img src={Mail} alt="Mail" />
              <p>Mail</p>
            </div>
          </a>
        </div>
      </section>
      <footer id="footer">
        <p>2020 © Portfolio - Made by Adrian Chiriac.<span style={{ fontSize: '11', fontWeight: '200' }}> - (icons from <a href="https://icons8.com">Icons8)</a></span></p>
      </footer>
    </div>
  );
}

export default App;




const hor_space_40px = {
  height: 40,
}

const whiteHeading = {
  // fontSize: "36px",
  padding: "0 20px",
  color: "white",
  fontWeight: "bold",
  lineHeight: "3rem"
}


const skillstyle = {
  width: "20%",
  maxWidth: "120px",
  margin: "1%",
}



