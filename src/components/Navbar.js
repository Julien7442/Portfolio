import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../Assets/brand.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CgGitFork } from 'react-icons/cg';

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';

// Ce composant affiche une barre de navigation en haut de l'écran
function NavBar() {
  // Utilise l'état local expand pour gérer l'expansion de la barre de navigation sur les écrans de petite taille
  const [expand, updateExpanded] = useState(false);
  // Utilise l'état local navColour pour changer la couleur de la barre de navigation lorsque l'utilisateur scroll
  const [navColour, updateNavbar] = useState(false);

  // Cette fonction gère le défilement de la page et met à jour l'état navColour en conséquence
  function scrollHandler() {
    if (window.scrollY >= 20) {
      // Si l'utilisateur a défilé de 20 pixels ou plus...
      updateNavbar(true); // ...change la couleur de la barre de navigation en utilisant la classe CSS "sticky"
    } else {
      updateNavbar(false); // ...sinon, utilise la classe CSS "navbar"
    }
  }

  // Ajoute un écouteur d'événement de défilement à la fenêtre
  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand} // Spécifie si la barre de navigation doit être étendue ou non
      fixed="top" // Fixe la barre de navigation en haut de l'écran
      expand="md" // Spécifie à partir de quelle taille d'écran la barre de navigation doit être étendue
      className={navColour ? 'sticky' : 'navbar'} // Utilise la classe CSS en fonction de l'état navColour
    >
      <Container>
        <Navbar.Brand href="/">
          {/* Affiche le logo */}
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            // Met à jour l'état expand lorsque l'utilisateur clique sur le bouton de toggle de la barre de navigation
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          {/* Affiche les trois barres du bouton de toggle de la barre de navigation */}
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Éléments de navigation */}
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              {/* Lien vers la page d'accueil */}
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                {/* Icône de la maison */}
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {/* Lien vers la page "À propos" */}
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                {/* Icône de l'utilisateur */}
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {/* Lien vers la page des projets */}
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                {/* Icône de l'écran de projection de fond */}
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* Bouton pour accéder au code source sur GitHub */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Julien7442/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: '1.2em' }} />{' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
