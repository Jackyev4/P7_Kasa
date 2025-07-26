import React, { useState } from 'react'; // Importe React et useState pour gérer l'état.
import './Slideshow.css'; // Charge les styles du diaporama.

import arrowLeft from '../../Images/chevron-left-solid.svg'; // Image de la flèche gauche.
import arrowRight from '../../Images/chevron-right-solid.svg'; // Image de la flèche droite.

function Slideshow({ images }) { // Crée le composant diaporama, reçoit une liste d'images.
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Garde en mémoire l'image affichée, commence par la première (index 0).

  const hasMultipleImages = images && images.length > 1; // Vérifie s'il y a plusieurs images.

  const goToPrevious = () => { // Fonction pour aller à l'image précédente.
    if (!hasMultipleImages) return; // Ne fait rien s'il y a une seule image.
    setCurrentImageIndex((prevIndex) => // Met à jour l'index.
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Retourne à la fin si c'est la première, sinon recule d'un.
    );
  };

  const goToNext = () => { // Fonction pour aller à l'image suivante.
    if (!hasMultipleImages) return; // Ne fait rien s'il y a une seule image.
    setCurrentImageIndex((prevIndex) => // Met à jour l'index.
      prevIndex === images.length - 1 ? 0 : prevIndex + 1 // Revient au début si c'est la dernière, sinon avance d'un.
    );
  };

  if (!images || images.length === 0) { // Si aucune image n'est fournie ou la liste est vide.
    return <div className="slideshow-empty">Aucune image disponible.</div>; // Affiche un message.
  }

  return ( // Ce que le diaporama va afficher.
    <div className="slideshow"> {/* Conteneur principal du diaporama. */}
      <img // Affiche l'image actuelle.
        src={images[currentImageIndex]} // Chemin de l'image actuelle.
        alt={`Logement ${currentImageIndex + 1}`} // Texte alternatif pour l'image.
        className="slideshow-image" // Classe pour le style de l'image.
      />

      {hasMultipleImages && ( // Affiche les contrôles seulement s'il y a plusieurs images.
        <> {/* Fragment pour grouper les éléments sans ajouter de div. */}
          <button className="slideshow-arrow slideshow-arrow-left" onClick={goToPrevious}> {/* Bouton flèche gauche. */}
            <img src={arrowLeft} alt="Précédent" /> {/* Image de la flèche gauche. */}
          </button>
          <button className="slideshow-arrow slideshow-arrow-right" onClick={goToNext}> {/* Bouton flèche droite. */}
            <img src={arrowRight} alt="Suivant" /> {/* Image de la flèche droite. */}
          </button>
          <div className="slideshow-counter"> {/* Compteur d'images (ex: 1/5). */}
            {currentImageIndex + 1}/{images.length} {/* Affiche l'index actuel + 1 sur le total d'images. */}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow; // Exporte le composant Slideshow.