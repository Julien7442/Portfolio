import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import Fade from 'react-reveal/Fade';

import ohmyfood from '../../Assets/Projects/ohmyfood.jpg';
import piiquante from '../../Assets/Projects/piiquante.jpg';
import kasa from '../../Assets/Projects/kasa.jpg';
import kanap from '../../Assets/Projects/kanap.jpg';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Fade top distance="5%" duration={3000}>
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
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis, massa ac aliquet laoreet, nunc nisi vulputate mi, vel imperdiet ipsum magna eu nibh. "
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={kasa}
                isBlog={false}
                title="Kasa"
                description="Sed iaculis tincidunt convallis. Nam hendrerit felis eget mi porta scelerisque. Vivamus non neque a magna vehicula tristique nec commodo ligula."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={piiquante}
                isBlog={false}
                title="Piiquante"
                description="Donec id enim bibendum, convallis nunc nec, lacinia libero. Quisque sit amet nulla aliquet, consequat nulla a, feugiat libero."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={kanap}
                isBlog={false}
                title="Kanap"
                description="Quisque feugiat nulla eu turpis laoreet, quis interdum nisi mattis. Curabitur ut feugiat dui, dignissim imperdiet ligula. Vestibulum et orci non augue consectetur mattis."
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </Container>
  );
}

export default Projects;
