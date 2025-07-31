import React from 'react';
import './StarRating.css'; // Importe le CSS spécifique au composant StarRating

import starActive from '../../Images/star-solid.svg'; // Importe l'image SVG de l'étoile pleine.
import starInactive from '../../Images/star-empty.svg'; // Importe l'image SVG de l'étoile vide.

function StarRating({ rating }) { // Composant StarRating, reçoit la note.
  const stars = []; // Tableau pour stocker les étoiles.
  for (let i = 0; i < 5; i++) { // Boucle pour 5 étoiles.
    stars.push( // Ajoute une étoile.
      <img // Crée l'image.
        key={i} // Clé unique React.
        src={i < rating ? starActive : starInactive} // Source selon la note.
        alt={i < rating ? 'Étoile pleine' : 'Étoile vide'} // Texte alternatif.
        className="star-icon" // Classe CSS.
      />
    );
  }
  return ( // Rendu du composant.
    <div className="rating"> {/*Conteneur des étoiles*/} 
      {stars} {/*Affiche les étoiles*/} 
    </div>
  );
}

export default StarRating; // Exporte le composant.