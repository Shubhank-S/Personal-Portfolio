import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Shubhank</h2>
        <div className="prompt">
          <p>A software developer</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Technologies</h2>
            <span>HTML, CSS, Javascipt , ReactJS </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
