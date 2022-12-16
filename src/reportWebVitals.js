// Fonction qui mesure les indicateurs clés de performance (KPI) de la page web
// et appelle une fonction de rappel avec les résultats
const reportWebVitals = (onPerfEntry) => {
  // Vérifie que la fonction de rappel est bien une fonction
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importe le module 'web-vitals' de manière asynchrone
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Mesure le temps de chargement de la page (TTFB)
      getTTFB(onPerfEntry);
      // Mesure le temps de chargement du premier contenu (FCP)
      getFCP(onPerfEntry);
      // Mesure le temps de chargement du dernier contenu (LCP)
      getLCP(onPerfEntry);
      // Mesure la durée de vie du layout (FID)
      getFID(onPerfEntry);
      // Mesure la perte de temps de chargement (CLS)
      getCLS(onPerfEntry);
    });
  }
};

export default reportWebVitals;
