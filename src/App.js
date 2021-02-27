import React from 'react';
import './App.css';
import { ProjectCard, WorkCard } from './components/ProjectCard';

// Project photos and avatar
import Photo from './images/photo.jpg';
import Netflix from './images/netflix.jpg';
import Converter from './images/converter.jpg';
import Exams from './images/exams.jpg';
import Viotrans from './images/viotrans.jpg';
import Portfolio from './images/portfolio.jpg';
import Movies from './images/movies.jpg';
import BreakingBad from './images/breakingbad.jpg'

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
import AdobeXd from './images/icons/adobe xd.png'
import ApiWebServices from './images/icons/api web services.png'
import AspDotNetMVC from './images/icons/asp.net mvc.png'
import AzureDevopsServer from './images/icons/azure devops server.png'
import CSharp from './images/icons/CSharp.png'
import Dart from './images/icons/dart.png'
import Figma from './images/icons/figma.png'
import Json from './images/icons/json.png'
import MaterialUI from './images/icons/material ui.png'
import Npm from './images/icons/npm.png'
import Postman from './images/icons/postman.png'
import VisualStudioCode from './images/icons/visual studio code.png'
import VisualStudio from './images/icons/visual studio.png'


// Contact icons
import Github from './images/icons/github.png'
import Linkedin from './images/icons/linkedin.png'
import Call from './images/icons/call.png'
import Mail from './images/icons/mail.png'
import { Button } from 'shards-react';

function App() {
  return (
    <div className="App" id="home">
      <header className="App-header">
        <div id="navbar" className="container" style={{ margin: "0px", zIndex: "2000" }}>
          <div id="navlinks">
            <a href="#home" >Home</a>
            {/* <a href="#about" >About</a> */}
            <a href="#work" >Work</a>
            <a href="#projects" >Projects</a>
            <a href="#skills" >Skills</a>
            <a href="#contact" >Contact</a>
          </div>
        </div>
        <div style={{ zIndex: "50" }}>
          <img src={Photo} alt="Avatar" />
          <div style={hor_space_40px}></div>
          <h1 style={whiteHeading}>
            Chiriac Adrian
        </h1>
          <h2 style={whiteHeading}>
            Full Stack Developer & Graphic Designer
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
      {/* <section id="about" className="container">
        <h3 id="h3">About</h3>
        <p>I am passionate about development, music and graphics because in these fields I have the opportunity to express myself and to create something useful and beautiful at the same time. Putting art and technology together leads to the improvement of both, in my opinion. I love foreign languages, literature and philosophy because they are tools for studying man and life. In my spare time I play sports, study, create, that is work on some personal project, or I spend time with my friends and family. Where I've worked and what I've learned.</p>
      </section> */}
      <section id="work" className="container" >
        <h3 id="h3">My Work Experience</h3>
        <WorkCard 
          title="Back End Developer | Generali Group"
          subtitle="June 2020 - Present"
          description="
                        I'm currently working on developing the back end of a private mobile iOS app used by insurance agents to aid them in their daily operations and to offer a modern alternative for their superiors for knowing what's going on with regards to their teams at any level, at any time and for better managing their work load.
                        More practically, I write SQL scripts, queries and stored procedures mostly for new features requested by our users but also for internal uses like maintanance jobs or for improving our work flow. I also manage the database in terms of creating, modifying and deleting tables.
                        On the C# part, I develop web services in a MVC architecture. We use Entity to interact with the DB by calling our SP's. These API's are used by the FE to make requests to us for anything that has to do with data.
                      " 
          technologies="Tools and technologies used: Microsoft's SQL Server (RDBMS), SQL, Excel, Visual Studio, C# (OOP), ASP.NET MVC, Razor, HTML, CSS, TFS for version control (now known as Azure DevOps Server)"
        />
        <WorkCard 
          title="Full Stack Developer | GisData SRL"
          subtitle="September 2019 - June 2020"
          description="
                        Backend operations support for Python based automatic ticketing management systems. Used to do data extractions and data manipulation.
                        I was made responsible for rebuilding an already existing mobile app called inforMAPP from the ground up utilizing Flutter, Google’s framework and UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase, that is based on Dart, a programming language very similar to Javascript. The old version of the app is still available for both Android and iOS on their respective app stores.
                      " 
          technologies="Tools and technologies used: Microsoft's SQL Server Management (RDBMS), SQL, Excel, Dart, Flutter, JSON in asynchronous HTTP requests, GIT, SmartGit and some Amazon Web Services."
        />
        <WorkCard 
          title="Web Developer & Designer | Vio Transgroup SRL"
          subtitle="June 2019 - September 2019"
          description="
                        This was my first real work experience as a web developer and designer. I was requiered to create a static website to enable my client to have an online presence and also to showcase his company's strenghts.
                        I was entirely responsible for the project and have successfully managed every step of the development process: from the initial design phase (wireframe, mock-up, logo design, website structure, colors pattern choice, etc.) to the actual development and final deployment via FTP on the client's server.
                        I constantly kept in touch with my client every step of the way to ensure that we were heading in the right direction so that, at the end, we would both be happy about the result.
                        The final product features a photo gallery, Google Maps iframes, an email contact form and is completely responsive. 
                      " 
          technologies="Tools and technologies used: Photoshop, HTML, CSS, Javascript, Bootstrap, PHP (for the form) and Filezilla."
        />
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
          <ProjectCard
            id="7"
            image={BreakingBad}
            title="Breaking Bad Characters"
            description='A react project that uses the breaking bad api to show and filter characters from the famous TV series'
            technologies={["html", "css", "javascript", "react.js"]}
            viewCodeUrl="https://github.com/chiriacadrian/breaking-bad-characters/"
            seeLiveUrl="https://chiriacadrian.github.io/breaking-bad-characters/"
          />
        </div>
      </section>
      <section id="skills" className="container">
        <h3 id="h3">My Skills</h3>
        <div className="tooltip" style={skillStyle}>
          <img src={Html} alt="html" id="html" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">HTML</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Css} alt="css" id="css" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">CSS</h5>
        </div>
        {/* <div className="tooltip" style={skillStyle}>
          <img src={Sass} alt="sass" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">SASS</h5>
        </div> */}
        <div className="tooltip" style={skillStyle}>
          <img src={Javascript} alt="javascript" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Javascript</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Jquery} alt="jquery" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">JQuery</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Bootstrap} alt="bootstrap" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Bootstrap</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Reactjs} alt="reactjs" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">React.js / React Native</h5>
        </div>



        <div className="tooltip" style={skillStyle}>
          <img src={Dart} alt="dart" id="dart" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Dart</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Flutter} alt="flutter" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Flutter</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={VisualStudioCode} alt="visualstudiocode" id="visualstudiocode" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Visual Studio Code</h5>
        </div>



        <div className="tooltip" style={skillStyle}>
          <img src={Invision} alt="invision" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">InVision</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Photoshop} alt="photoshop" id="photoshop" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Photoshop</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={AdobeXd} alt="adobexd" id="adobexd" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Adobe Xd</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Figma} alt="figma" id="figma" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Figma</h5>
        </div>

        

        <div className="tooltip" style={skillStyle}>
          <img src={Sql} alt="sql" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">SQL</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={CSharp} alt="csharp" id="csharp" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">C#</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={AspDotNetMVC} alt="aspdotnetmvc" id="aspdotnetmvc" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">ASP.NET MVC</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={AzureDevopsServer} alt="tfs" id="tfs" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">TFS</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={VisualStudio} alt="visualstudio" id="visualstudio" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Visual Studio</h5>
        </div>



        <div className="tooltip" style={skillStyle}>
          <img src={Json} alt="json" id="json" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">JSON</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={MaterialUI} alt="materialui" id="materialui" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Material UI</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Npm} alt="npm" id="npm" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">npm</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Git} alt="git" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">GIT</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={ApiWebServices} alt="apiwebservices" id="apiwebservices" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">API Web Services</h5>
        </div>
        <div className="tooltip" style={skillStyle}>
          <img src={Postman} alt="postman" id="postman" style={skillStyle} style={{ maxWidth: "100%" }} />
          <h5 className="tooltiptext">Postman</h5>
        </div>
        <br></br>
        <a href="https://drive.google.com/open?id=1yzKE-yOWZH_VpB7CWBp5ag8tXpFvQWf2" target="_blank" rel="noopener noreferrer">
          <Button pill theme="dark">Certificates</Button>
          {/* style={{ minWidth:"30%", maxWidth:"60%", margin: "50px 0", padding: "20px 50px", fontSize:"20px"}} */}
        </a> 
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


const skillStyle = {
  width: "20%",
  maxWidth: "120px",
  margin: "2%",
}