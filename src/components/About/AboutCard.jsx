import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fazal Khan </span>
            from <span className="purple"> Lucknow, India.</span>
            <br /><br />
            I am currently employed as an Analyst at KPMG.
            <br /><br />
            I have completed B.Tech in Computer Science and Engineering (Internet of Things) at CHRIST(Deemed to be University), Bengaluru.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a positive impact on society!"{" "}
          </p>
          <footer className="blockquote-footer">Fazal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
