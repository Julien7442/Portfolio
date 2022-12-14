import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/home-main.svg';
import Toolstack from './Toolstack';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Fade top distance="5%" duration={3000}>
          <Row style={{ justifyContent: 'center', padding: '10px' }}>
            <Col
              md={7}
              style={{
                justifyContent: 'center',
                paddingTop: '30px',
                paddingBottom: '50px',
              }}
            >
              <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
                Know Who <strong className="purple">I'm</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: '20px', paddingBottom: '20px' }}
              className="about-img"
            >
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid aboutpng "
              />
            </Col>
          </Row>
        </Fade>
        <Fade bottom distance="5%" duration={3000}>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
        </Fade>

        <Techstack />
        <Fade bottom distance="5%" duration={3000}>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Fade>
        <Fade bottom distance="5%" duration={3000}>
          <Github />
        </Fade>
      </Container>
    </Container>
  );
}

export default About;
