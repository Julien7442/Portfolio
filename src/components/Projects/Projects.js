import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import ohmyfood from '../../Assets/Projects/ohmyfood.jpg';
import piiquante from '../../Assets/Projects/piiquante.jpg';
import kasa from '../../Assets/Projects/kasa.jpg';
import kanap from '../../Assets/Projects/kanap.jpg';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohmyfood}
              isBlog={false}
              title="Ohmyfood"
              description="A restaurant web page where you can chose your menu and customize it"
              link="https://github.com/Julien7442/ohmyfood"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="Kasa"
              description="Website where you can look for apartments and book them"
              link="https://github.com/Julien7442/Kasa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piiquante}
              isBlog={false}
              title="Piiquante"
              description="This project consists of developing an API for a hot sauce review site"
              link="https://github.com/Julien7442/Piiquante"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanap}
              isBlog={false}
              title="Kanap"
              description="Kanap is a website that allows users to choose their couch, color and add it to a cart"
              link="https://github.com/Julien7442/Kanap"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
