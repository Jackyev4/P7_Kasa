import React from 'react';
import './Tag.css'; // Importe le CSS spécifique au composant Tag

function Tag({ text }) { // Définit le composant Tag, reçoit le texte.
  return ( // Rendu du composant.
    <span className="logement-tag"> {/* Conteneur du tag, pour le style. */}
      {text} {/* Affiche le texte du tag. */}
    </span>
  );
}

export default Tag; // Exporte le composant.