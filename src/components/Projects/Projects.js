import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Hospital Management System"
              description="Developed a Hospital Management System to enhance healthcare management for doctors, 
Patients and admins. Empowered doctors to view and manage patients, including diagnostic details, and perform 
CRUD operations on patient records and medicine lists through an Angular-based user interface."
              ghLink="https://github.com/chyabhishekavi/Hospital-Management-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Banking System"
              description="I have developed a comprehensive Banking System using Angular, Spring Boot, and MySQL, designed to provide a secure and efficient platform for fundamental banking operations.
                        Features: Account Management, Transaction Handling, Transaction History and Admin Dashboard:"
              ghLink="https://github.com/chyabhishekavi/Banking-System-SpringBoot"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sorting-Visualizer"
              description="I have created a Sorting Visualizer using JavaScript, designed to help users understand how different sorting algorithms work through visual representation. This interactive tool provides an engaging way to see the step-by-step process of various sorting techniques."
              ghLink="https://github.com/chyabhishekavi/Sorting-Visualizer"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Movix"
              description="I have developed Movix, a movie information and recommendation system using React, designed to provide users with detailed information about their favorite movies and personalized recommendations."
              ghLink="https://github.com/chyabhishekavi/Movix"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather Project"
              description="I have developed a Weather Project using JavaScript, designed to provide users with real-time weather information for any location worldwide."
              ghLink="https://github.com/chyabhishekavi/WeatherProject"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Number-guessing-game"
              description="I have developed a Number Guessing Game using JavaScript, designed to provide an entertaining and interactive way for users to test their guessing skills."
              ghLink="https://github.com/chyabhishekavi/Number-gussing-game-project"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
