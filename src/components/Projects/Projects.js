import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import insta from '../../Assets/Projects/insta.png';
import blog from '../../Assets/Projects/blog.jpg';
import ethSend from '../../Assets/Projects/ethSend.png';
import socialcode from '../../Assets/Projects/socialcode.png';
import vidCon from '../../Assets/Projects/vidCon.png';
import emoDetct from '../../Assets/Projects/emoDetct.jpeg';

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
              imgPath={insta}
              isBlog={false}
              title="tincidunt vitae semper quis lectus"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              link="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="tincidunt vitae semper quis lectus"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              link="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethSend}
              isBlog={false}
              title="tincidunt vitae semper quis lectus"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              link="https://deployment-for-ethereum-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialcode}
              isBlog={false}
              title="tincidunt vitae semper quis lectus"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vidCon}
              isBlog={false}
              title="tincidunt vitae semper quis lectus"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              link="https://mediacall.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emoDetct}
              isBlog={false}
              title="tincidunt vitae semper quis lectus"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              link="https://github.com/google/mediapipe"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
