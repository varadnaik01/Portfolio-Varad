import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import admin from "../../Assets/admin.png"
import coin from "../../Assets/coin.png"
import portfolio from "../../Assets/portfolio.png"


// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coin}
              isBlog={false}
              title="Crypto Nexus"
              description=" Dynamic Cryptocurrency Dashboard: A React.js web platform that dynamically updates and showcases live data for
              over 200 cryptocurrencies through API integration.
              "
              ghLink="https://github.com/varadnaik01/Crypto-Nexus"
              demoLink="https://cryptonexusbyvarad.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin Dashboard"
              description=" Created an Admin Dashboard using enterprice level industry standard packages.
              Application consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page,
              and Calendar Integration."
              ghLink="hthttps://react-admin-dashboard-varad.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Site"
              description="  Designed a personal portfolio website using React.js to effectively showcase my professional identity, skills, and educational history,
              providing a compact, user-friendly platform for self-presentation."
              ghLink="https://github.com/varadnaik01/Portfolio-Varad"
              demoLink="https://portfolio-varad.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
