import React from "react";

const skills = [
  { skill: "React", level: 90 },
  { skill: "Node.js", level: 80 },
  { skill: "JavaScript", level: 95 },
  { skill: "HTML & CSS", level: 100 },
];

export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <section>
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Multimedia and Communication Technologies </strong> <em>University of Aveiro</em> - Currently enrolled
          </li>
          <li>
            <strong>Electronic Engineering (3 years) </strong> <em>University of Aveiro</em> - Completed 3 years of study
          </li>
          <li>
            <strong>Complete C# Unity Game Developer 2D</strong>  <em>Udemy</em> - Completed the course to learn Unity game development, focusing on C# and 2D game creation.
          </li>
        </ul>
      </section>

      <section>
        <h3>Achievements</h3>
        <ul>          
          <li><strong>Aveiro Jovem Criador</strong> - First Prize and Honors in Photography for 3 consecutive years (2018, 2019, 2020).</li>
          <li><strong>Magazine Txi</strong> - Article about me.</li>
          <li><strong>Photography Exhibition</strong> - <em>Café Concerto</em>.</li>
          <li><strong>karate</strong> - Red Belt.</li>
        </ul>
      </section>
      <section>
        <h3>Experience</h3>
        <ul>
          <li> <strong>Part-Time Worker at Worten </strong> - <em> Aveiro, 2022 </em> - Worked part-time at Worten, gaining valuable customer service experience, managing inventory, and assisting in the sales process.</li>
          <li><strong>Handball Referee</strong> - Certified handball referee with experience at various levels.</li>
        </ul>
      </section>
      <h3>Skills</h3>
      <div className="skills">
        {skills.map(({ skill, level }) => (
          <div className="skill-bar" key={skill}>
            <label>{skill}</label>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
