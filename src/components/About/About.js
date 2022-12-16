import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/home-main.svg';
import Toolstack from './Toolstack';
import Fade from 'react-reveal/Fade';

// Composant qui affiche les informations sur la page "À propos"
function About() {
  return (
    <Container fluid className="about-section">
      {/* Composant de particules animées en arrière-plan */}
      <Particle />
      <Container>
        {/* Composant de transition d'entrée pour le contenu */}
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
              {/* Titre et informations sur moi */}
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
              {/* Image illustrative */}
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid aboutpng "
              />
            </Col>
          </Row>
        </Fade>
        {/* Composant de transition d'entrée pour le titre */}
        <Fade bottom distance="5%" duration={3000}>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
        </Fade>

        {/* Composants affichant mes compétences techniques */}
        <Techstack />
        {/* Composant de transition d'entrée pour le titre */}
        <Fade bottom distance="5%" duration={3000}>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          {/* Composants affichant les outils que j'utilise */}
          <Toolstack />
        </Fade>
        {/* Composant affichant mes réalisations sur GitHub */}
        <Fade bottom distance="5%" duration={3000}>
          <Github />
        </Fade>
      </Container>
    </Container>
  );
}

export default About;
