import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Varad Naik </span>
            from <span className="purple"> Nagpur, India.</span>
            <br /> I am a third year student pursuing BTech at 
            Indian Institute of Information Technology, Nagpur
            <br />
            Currently I am looking for a 6 months internship.
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Work towards creating meaningful innovations!"{" "}
          </p>
          <footer className="blockquote-footer">Varad</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
