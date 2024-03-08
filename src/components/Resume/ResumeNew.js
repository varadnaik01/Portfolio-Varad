import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

import pdf from "../../Assets/varad_naik_resume_iiitn.pdf";
import { AiFillGithub, AiFillInstagram, AiOutlineDownload, AiOutlineTwitter } from "react-icons/ai";
// import { Document } from "react-pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodechef, SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://leetcode.com/varad_naik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/varad-naik-265533223/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/varad__33"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/varadnaik01"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
              
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/varad_naik01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodechef />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
