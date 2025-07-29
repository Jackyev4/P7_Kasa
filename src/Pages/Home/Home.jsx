import React from 'react';  // Importation de React pour créer des composants
import './Home.css'; // Import du CSS


// Importation des composants et éléments nécessaires
import Banner from '../../Components/Banner/Banner'; 
import Card from '../../Components/Card/Card';

import homeBannerImage from '../../Images/homebanner.png'; 
import logementsData from '../../Logements/logements.json'; 

function Home() { // Définit le composant de la page d'accueil.
  return ( // Ce que le composant Home va afficher.
    <main className="home-main"> {/* Conteneur principal de la page d'accueil. */}
      <Banner // Affiche le composant Banner.
        imageUrl={homeBannerImage} // Passe l'image de la bannière.
        text="Chez vous, partout et ailleurs" // Passe le texte de la bannière.
      />

      <section className="home-gallery"> {/* Section qui contient toutes les cartes de logements. */}
        {/* Parcourt les données de chaque logement pour créer une Card. */}
        {logementsData.map(logement => (
          <Card // Affiche un composant Card pour chaque logement.
            key={logement.id} // Pour React : aide à gérer la liste efficacement
            id={logement.id} // Pour la Card : la prop utilisée pour créer le lien (ex: /logement/ID)
            title={logement.title} // Passe le titre du logement à la carte.
            imageUrl={logement.cover} // Passe l'image de couverture du logement à la carte.
          />
        ))}
      </section>
    </main>
  );
}

export default Home; // Rend le composant Home disponible pour être utilisé ailleurs (ex: dans App.js).