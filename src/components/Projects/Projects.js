import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BookMyCar from "../../Assets/Projects/BookMyCar.png";
import Portfolio from "../../Assets/Projects/portfolio.png";

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
              imgPath={BookMyCar}
              isBlog={false}
              title="BookMyCar"
              description="BookMyCar changes car rentals by connecting car owners with people who need to rent them.
Using smart algorithms, it gives personalized car suggestions and makes renting easy. This communityfocused solution aims for a great user experience, benefiting both owners and renters, and changing the car
rental industry"
              ghLink="https://github.com/Rajatpatil04/CDAC-project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfoilio Website"
              description="My personal portfolio wesite build with ReactJS, HTML, CSS and Bootstrap."
              ghLink="https://github.com/janvishwajit/portfolio"
              demoLink="https://github.com/janvishwajit/portfolio"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;