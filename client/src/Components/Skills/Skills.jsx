import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="abstract">
      <h1 className="project-title">Skills</h1>
      <div className="skill-container">
        <div>
          <img
            className="skill-image"
            src="https://res.cloudinary.com/dbmxg3su8/image/upload/v1621554079/pexels-jess-bailey-designs-965119_th6rs3.jpg"
            alt="Girl in a jacket"
          />
        </div>
        <div className="tech-skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>MongoDB</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>React</li>
            <li>REST API</li>
            <li>SQL</li>
            <li>Postgres</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <ul>
            <li>Fast Learner</li>
            <li>Self Starter</li>
            <li>Results Driven</li>
            <li>Creative</li>
            <li>Persistent</li>
            <li>Analytical</li>
            <li>Leadership Skills</li>
            <li>Microsoft Suite</li>
            <li>Research</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
            <li>Organized</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
