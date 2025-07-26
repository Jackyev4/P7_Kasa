import React from 'react';  // Importation de React pour créer des composants
import './Banner.css';  // Importation du CSS

function Banner({ imageUrl, text }) { // Création du composant Banner
  return ( // Rend le HTML de la bannière.
    <div // Conteneur principal de la bannière.
      className="banner" // Classe CSS pour le style général.
      style={{ backgroundImage: `url(${imageUrl})` }} // Définit l'image de fond via les styles en ligne.
    >
      {text && <h1 className="banner-text">{text}</h1>} {/* Affiche le titre h1*/}
    </div>
  );
}

export default Banner; // Exporte le composant Banner.