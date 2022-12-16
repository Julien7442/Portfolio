import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ce composant permet de remonter en haut de la page lorsque l'utilisateur change de route dans l'application
function ScrollToTop() {
  // Récupère l'objet location de l'historique du navigateur
  const { pathname } = useLocation();

  // Utilise l'effet de side-effect useEffect pour déclencher une fonction lorsque pathname change
  useEffect(() => {
    // Remonte en haut de la page lorsque pathname change
    window.scrollTo(0, 0);
  }, [pathname]);

  // Le composant ne rend rien à l'écran
  return null;
}

export default ScrollToTop;
