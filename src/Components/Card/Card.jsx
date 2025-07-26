import React from 'react';  // Importation de React pour créer des composants
import { Link } from 'react-router-dom';  // Importation du composant Link
import './Card.css'; // Importation du CSS

function Card({ id, title, imageUrl }) { // Création du composant Card
  return ( // Affiche la carte.
    <Link to={`/logement/${id}`} className="card"> {/* Le lien cliquable de la carte. */}
      <img src={imageUrl} alt={title} className="card-image" /> {/* L'image de la carte. */}
      <h3 className="card-title">{title}</h3> {/* Le titre de la carte. */}
    </Link>
  );
}

export default Card; // Rend Card disponible ailleurs.