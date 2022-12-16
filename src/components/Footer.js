import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

// Composant de pied de page qui affiche des informations de copyright et des liens vers les réseaux sociaux
function Footer() {
  // Récupère l'année en cours
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        {/* Colonne avec le nom de l'auteur */}
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Julien Conforto</h3>
        </Col>
        {/* Colonne avec le copyright */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} JC</h3>
        </Col>
        {/* Colonne avec les icônes de réseaux sociaux */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* Icône de GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/Julien7442"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* Icône de LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/julien-conforto-59b621184/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* Icône de la boîte de réception de courrier */}
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfqbprRHgWJLcTXdscmpKQxHlkGGsRssBLvcBrQcdPlnSLxnkVQHrbwcFRPvnpXsXjzQQq"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
