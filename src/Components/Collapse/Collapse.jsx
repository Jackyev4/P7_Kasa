import React, { useState } from 'react'; // Importe React et useState pour gérer l'état d'ouverture/fermeture.
import './Collapse.css'; // Importation du css
import chevronUpIcon from '../../Images/chevron-up-solid.svg'; // Importe l'icône de la flèche (chevron).

function Collapse({ title, content }) { // Définit le composant Collapse, recevant un titre et un contenu.

    // HOOKS
  // useState : Gère l'état d'ouverture/fermeture de l'accordéon.
  const [isOpen, setIsOpen] = useState(false); // Crée un état 'isOpen' (ouvert/fermé), initialisé à 'false' (fermé par défaut).


   // GESTION DES CLICS
  const handleClick = () => { // Définit la fonction qui est appelée au clic.
    setIsOpen(!isOpen); // Inverse la valeur de 'isOpen' (ouvert devient fermé, fermé devient ouvert).
  };


  // RENDU DU COMPOSANT
  return ( // Ce que le composant Collapse va afficher.
    <div className="collapse"> {/* Conteneur principal de l'accordéon. */}
      <div className="collapse-header" onClick={handleClick}> {/* En-tête cliquable de l'accordéon. */}
        <h2 className="collapse-title">{title}</h2> {/* Affiche le titre de l'accordéon. */}
        <img // Affiche l'icône de la flèche.
          src={chevronUpIcon} // Source de l'image de la flèche.
          alt="Flèche d'ouverture/fermeture" // Texte alternatif pour l'accessibilité.
          className={`collapse-toggle-icon ${isOpen ? 'rotated' : ''}`} // Applique une classe "rotated" si l'accordéon est ouvert.
        />
      </div>

     {/* --- CONTENU (AFFICHÉ SEULEMENT SI OUVERT) --- */}
      {isOpen && ( // Affiche le contenu seulement si 'isOpen' est vrai (accordéon ouvert).
        <div className="collapse-content-area"> {/* Zone du contenu de l'accordéon. */}
          <p className="collapse-content-text">{content}</p> {/* Affiche le contenu de l'accordéon. */}
        </div>
      )}
    </div>
  );
}

export default Collapse; // Exporte le composant Collapse pour pouvoir l'utiliser ailleurs.