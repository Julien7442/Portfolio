import React from 'react';
import Typewriter from 'typewriter-effect'; // Importe Typewriter pour l'effet de machine à écrire
import Fade from 'react-reveal/Fade'; // Importe Fade de react-reveal pour l'effet de fondu

// Définit la fonction de composant Type
function Type() {
  return (
    // Utilise Fade pour créer un effet de fondu à gauche sur le composant Typewriter
    <Fade left distance="15%" duration={3000}>
      <Typewriter
        options={{
          // Définit les chaînes de caractères à afficher et les options de l'effet de machine à écrire
          strings: ['Web Developer', 'JS Developer', 'React Js Developer'],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
    </Fade>
  );
}

export default Type; // Exporte le composant Type
