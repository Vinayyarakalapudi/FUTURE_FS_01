import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.jpeg";
import krypto from "../assets/projects/krypto.jpeg";
import kickstart from "../assets/projects/kickstart.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Rock Paper Scissors Game"
              description="Interactive web-based game built with HTML, CSS, Bootstrap, and JavaScript. Features responsive design and smooth gameplay mechanics for the classic rock-paper-scissors game with intuitive user interface."
              ghLink="https://github.com/Vinayyarakalapudi/RPS-game.git"
              demoLink="https://vinayyarakalapudi.github.io/RPK-game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Event Organization Website"
              description="Responsive event management website built with HTML5, CSS3, and Bootstrap. Features modern design, event listings, registration forms, and seamless user experience for event organizers and attendees."
              ghLink="https://github.com/Vinayyarakalapudi/sudhee_cbit.git"
              demoLink="https://vinayyarakalapudi.github.io/sudhee_cbit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Modern portfolio website showcasing projects and skills. Built with HTML5, CSS3, Bootstrap, and JavaScript. Features responsive design, project showcases, and contact functionality."
              ghLink="https://github.com/Vinayyarakalapudi/FUTURE_FS_01"
              demoLink="https://portfolio-d8q3.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Student Management System"
              description="Full-stack MERN application for managing student records. Built with React, Node.js, Express, and MongoDB. Features CRUD operations, user authentication, and responsive admin dashboard."
              ghLink="https://github.com/Vinayyarakalapudi/student-management-system.git"
              demoLink="https://student-management-system-4-u8m6.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Mini E-Commerce Website"
              description="E-commerce platform built with React, Node.js, Express, MongoDB, and Bootstrap. Features product catalog, shopping cart, user authentication, and payment integration capabilities."
              ghLink="https://github.com/Vinayyarakalapudi/srikalmart.git"
              demoLink="https://srikalmart-2.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;
