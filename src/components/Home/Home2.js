import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Importe des composants de react-bootstrap
import avatar from '../../Assets/avatar.png'; // Importe l'image de l'avatar
import Tilt from 'react-parallax-tilt'; // Importe react-parallax-tilt pour animer l'image de l'avatar
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'; // Importe des icônes de react-icons
import { FaLinkedinIn } from 'react-icons/fa'; // Importe une autre icône de react-icons

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am currently learning different languages like
              <i>
                <b className="purple">
                  {' '}
                  Javascript and learning more about React everyday.{' '}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies, great designs </b> and
                also in areas related to{' '}
                <b className="purple">Web3 and blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also spend my time to improve my knowledge
              about <b className="purple">React, Javascript</b> and
              <i>
                <b className="purple">
                  {' '}
                  Modern Javascript Library and Frameworks.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid avatarSize" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Julien7442"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/julien-conforto-59b621184/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfqbprRHgWJLcTXdscmpKQxHlkGGsRssBLvcBrQcdPlnSLxnkVQHrbwcFRPvnpXsXjzQQq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
