import React from 'react';
import './styles/App.css';
import mypic from './images/mypor.jpg';

function App() {
  return (
    <div className="App">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="intro-box">
        <img src={mypic} alt="My Pic" className="profile-pic" />
        <h2 className="my-name">Narasapurapu Tejasri</h2>
      </div>
      <nav className="navbar">
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
      </nav>
      <div className="container">
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: tejasrinarasapurapu@gmail.com</p>
          <p><a href="https://www.linkedin.com/in/teja-sri-narasapurapu-a61879287/">LinkedIn</a></p>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>Date of Birth: 29/3/2005</p>
          <p>Nationality: INDIA</p>
          <p>Marital Status: Unmarried</p>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <p>ST.Theresa High School (Primary education)</p>
          <p>Vidya Vikas Junior College (secondary education)</p>
          <p>Kakinada Institute Of Engineering and Technology(B.Tech)</p>
        </section>

        <section id="achievements-awards" className="section">
          <h2>Achievements and Awards</h2>
          <p>In my college I had participated in HACKATHONS and TEACH TO LEARN and some other programs</p>
          <p>Winner of Hacker Thon (Along with Team)</p>
          <p>Winner of Teach To Learn (Along with Team)</p>
        </section>

        <section id="languages" className="section">
          <h2>Languages</h2>
          <p>Telugu</p>
          <p>English</p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skill-bar">
            <p>C</p>
            <div className="bar">
              <div className="progress c"></div>
            </div>
          </div>
          <div className="skill-bar">
            <p>Python</p>
            <div className="bar">
              <div className="progress python"></div>
            </div>
          </div>
          <div className="skill-bar">
            <p>HTML</p>
            <div className="bar">
              <div className="progress html"></div>
            </div>
          </div>
          <div className="skill-bar">
            <p>CSS</p>
            <div className="bar">
              <div className="progress css"></div>
            </div>
          </div>           
          <div className="skill-bar">
            <p>Web Development</p>
            <div className="bar">
              <div className="progress webdevelopment"></div>
            </div>
          </div>          
          <div className="skill-bar">
            <p>Machine Learning</p>
            <div className="bar">
              <div className="progress machinelearning"></div>
            </div>
          </div>          
        </section>

        <section id="interests" className="section">
          <h2>Interests</h2>
          <p>Interested to learn about Machine Learning</p>
          <p>Interested to learn about Web Development</p>
          <p>Interested to Know about Logical Thinking</p>
        </section>

        <section id="activities" className="section">
          <h2>Activities</h2>
          <p>Part of NSS (National Service Sector)</p>
          <p>Learning about Data Structures</p>
          <p>Learning about New Technologies</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>Second Chance Heaven (Technology used HTML and CSS)</p>
          <p>Blood Donation Eligibility Prediction (Technology used HTML and CSS)</p>
          <p>Customer churn Prediction (Technology used Machine Learning)</p>
          <p>Skin cancer Prediction (Technology used Machine Learning)</p>
        </section>
      </div>
    </div>
  );
}

export default App;












