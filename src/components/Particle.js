import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  // cette fonction est appelée lors de l'initialisation de l'instance de tsParticles
  const particlesInit = async (main) => {
    // main est l'instance de tsParticles
    console.log(main);

    // vous pouvez initialiser l'instance de tsParticles ici, en ajoutant des formes personnalisées ou des préréglages
    // ceci charge le package bundle de tsparticles, c'est la méthode la plus simple pour tout mettre en place
    // à partir de la version 2, vous pouvez ajouter uniquement les fonctionnalités dont vous avez besoin, réduisant ainsi la taille du bundle
    await loadFull(main);
  };

  // cette fonction est appelée lorsque les particules sont chargées dans le conteneur
  const particlesLoaded = (container) => {
    // container est l'élément DOM qui contient les particules
    console.log(container);
  };

  return (
    <div className="App">
      <Particles
        // l'id de l'élément DOM qui contiendra les particules
        id="tsparticles"
        // fonction appelée lors de l'initialisation de l'instance de tsParticles
        init={particlesInit}
        // fonction appelée lorsque les particules sont chargées dans le conteneur
        loaded={particlesLoaded}
        // options de configuration des particules
        options={{
          // limite de FPS (frames par seconde)
          fpsLimit: 100,
          // options de interactivité
          interactivity: {
            // événements de interactivité
            events: {
              // options de clic
              onClick: {
                // activer l'interactivité au clic
                enable: true,
                // mode d'interaction au clic
                mode: 'attract',
              },
              // options de hover (souris)
              onHover: {
                // activer l'interactivité au hover
                enable: true,
                // mode d'interaction au hover
                mode: 'repulse',
              },
              // redimensionnement de la fenêtre
              resize: true,
            },
            // modes d'interaction
            modes: {
              // options de "poussée"
              push: {
                // quantité de particules à pousser
                quantity: 5,
              },
              // options de "repulsion"
              repulse: {
                // distance de repulsion
                distance: 120,
                // durée de la repulsion
                duration: 5,
              },
            },
          },
          // Définit la couleur des particules
          particles: {
            color: {
              value: '#ffffff', // La couleur est blanche
            },
            // Définit les liens entre les particules
            links: {
              color: '#A7F8F7', // La couleur des liens est bleue claire
              distance: 150, // La distance entre les particules est de 150 pixels
              enable: true, // Les liens sont activés
              opacity: 0.3, // L'opacité des liens est de 0.3
              width: 1, // L'épaisseur des liens est de 1 pixel
            },
            // Définit les collisions entre les particules
            collisions: {
              enable: true, // Les collisions sont activées
            },
            // Définit le mouvement des particules
            move: {
              directions: 'none', // Les particules ne se déplacent pas dans une direction spécifique
              enable: true, // Le mouvement des particules est activé
              outModes: {
                default: 'bounce', // Si une particule sort de l'espace défini, elle rebondit
              },
              random: false, // Le mouvement des particules n'est pas aléatoire
              speed: 1, // La vitesse de déplacement des particules est de 1
              straight: false, // Les particules ne se déplacent pas en ligne droite
            },
            // Définit le nombre de particules
            number: {
              density: {
                enable: true, // La densité des particules est activée
                area: 1000, // La surface couverte par les particules est de 1000 pixels carrés
              },
              value: 40, // Il y a 40 particules
            },
            // Définit l'opacité des particules
            opacity: {
              value: 0.2, // L'opacité des particules est de 0.2
            },
            // Définit la forme des particules
            shape: {
              type: 'square', // La forme des particules est un carré
              opacity: 0.3, // L'opacité des formes est de 0.3
            },
            // Définit la taille des particules
            size: {
              value: { min: 1, max: 5 }, // La taille des particules est comprise entre 1 et 5 pixels
            },
          },
          // Active la détection de la rétine pour améliorer la qualité de l'image sur les écrans de haute résolution
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;
