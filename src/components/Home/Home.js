import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeImg from '../../Assets/home.png';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <section>
      <Fade top distance="5%" duration={3000}>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{' '}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Julien</strong>
                </h1>

                <div style={{ padding: 50, textAlign: 'left' }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottos: 20 }}>
                <img src={homeImg} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
      </Fade>
      <Fade bottom distance="5%" duration={3000}>
        <Home2 />
      </Fade>
    </section>
  );
}

export default Home;
