import React, { useEffect, useState } from 'react'; // Importe React et ses outils pour les effets et l'état.
import { useParams, useNavigate } from 'react-router-dom'; // Importe useParams pour obtenir les paramètres d'URL, et useNavigate pour la navigation.
import logementsData from '../../Logements/logements.json'; // Importe les données des logements depuis un fichier JSON.

import Slideshow from '../../Components/Slideshow/Slideshow'; // Importe le composant Slideshow pour le carrousel d'images.
import Collapse from '../../Components/Collapse/Collapse'; // Importe le composant Collapse pour les sections déroulantes.
import Tag from '../../Components/Tag/Tag'; // Importe le nouveau composant Tag
import StarRating from '../../Components/StarRating/StarRating';

import './PageProduct.css'; // Importe le fichier CSS spécifique à cette page.

function PageProduct() { // Définit le composant de la page de produit (détail du logement).

    // RÉCUPÉRATION DES DONNÉES ET GESTION DES ERREURS

  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL (ex: "/logement/abc").
  const navigate = useNavigate(); // Initialise la fonction de navigation.

  const logement = logementsData.find(item => item.id === id); // Trouve le logement correspondant à l'ID dans les données JSON.

  useEffect(() => { // Un hook qui exécute du code après chaque rendu du composant (ici, seulement si `logement` ou `Maps` changent).
    if (!logement) { // Si aucun logement n'est trouvé pour l'ID.
      navigate('/404'); // Redirige l'utilisateur vers la page 404.
    }
  }, [logement, navigate]); // Les dépendances de l'effet : l'effet se ré-exécute si `logement` ou `Maps` changent.

  if (!logement) { // Si le logement n'a pas été trouvé (et la redirection est en cours).
    return null; // Le composant ne rend rien pour le moment.
  }



  return ( // Ce que le composant PageProduct va afficher.
    <main className="logement-main"> {/* Conteneur principal de la page. */}

    {/* PARTIE CARROUSEL D'IMAGES (SLIDESHOW)*/}
      <Slideshow images={logement.pictures} /> {/* Affiche le carrousel d'images du logement. */}
      <section className="logement-info"> {/* Section principale des informations du logement. */}

        {/* TITRE, LOCALISATION ET TAGS */ }
        <div className="logement-title-location-tags"> {/* Conteneur pour le titre, la localisation et les tags. */}
          <h1 className="logement-title">{logement.title}</h1> {/* Affiche le titre du logement. */}
          <p className="logement-location">{logement.location}</p> {/* Affiche la localisation du logement. */}


          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

                {/* PARTIE HÔTE ET NOTATION */}

        <div className="logement-host-rating"> {/* Conteneur pour les informations de l'hôte et la notation. */}
          <div className="host-info"> {/* Conteneur pour les informations de l'hôte. */}
            <p className="host-name">{logement.host.name.replace(' ', '\n')}</p> {/* Affiche le nom de l'hôte, avec un retour à la ligne si espace. */}
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" /> {/* Affiche la photo de l'hôte. */}
          </div>
          <StarRating rating={parseInt(logement.rating)} />
        </div>
      </section>

       {/* PARTIE ACCORDÉONS (COLLAPSES) */}

      <section className="logement-collapses"> {/* Section des accordéons (description et équipements). */}

        {/* ----- ACCORDÉON DESCRIPTION ----- */}
        <div className="logement-collapse-item"> {/* Conteneur pour l'accordéon de description. */}
          <Collapse title="Description" content={logement.description} /> {/* Affiche l'accordéon "Description". */}
        </div>

        {/* ----- ACCORDÉON ÉQUIPEMENTS ----- */}
        <div className="logement-collapse-item"> {/* Conteneur pour l'accordéon des équipements. */}
          <Collapse title="Équipements" content={ // Affiche l'accordéon "Équipements".
            <ul> {/* Crée une liste non ordonnée pour les équipements. */}
              {logement.equipments.map((equipment, index) => ( // Parcourt la liste des équipements.
                <li key={index}>{equipment}</li> // Affiche chaque équipement comme un élément de liste.
              ))}
            </ul>
          } />
        </div>
      </section>
    </main>
  );
}

export default PageProduct; // Exporte le composant PageProduct pour qu'il puisse être utilisé ailleurs.