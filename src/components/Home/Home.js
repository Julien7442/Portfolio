import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeImg from '../../Assets/home.png';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import Fade from 'react-reveal/Fade';

// Composant qui affiche le contenu de la page d'accueil
function Home() {
  return (
    <section>
      {/* Composant de transition d'entrée pour le contenu */}
      <Fade top distance="5%" duration={3000}>
        <Container fluid className="home-section" id="home">
          <Particle />
          {/* Composant de particules animées en arrière-plan */}
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                {/* Titre de bienvenue */}
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{' '}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                {/* Titre avec mon nom */}
                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Julien</strong>
                </h1>
                {/* Composant qui affiche du texte de manière animée */}
                <div style={{ padding: 50, textAlign: 'left' }}>
                  <Type />
                </div>
              </Col>
              {/* Image illustrative */}
              <Col md={5} style={{ paddingBottos: 20 }}>
                <img src={homeImg} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
      </Fade>
      {/* Composant de transition d'entrée pour le contenu suivant */}
      <Fade bottom distance="5%" duration={3000}>
        <Home2 />
      </Fade>
    </section>
  );
}

export default Home;
