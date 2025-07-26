import React from 'react';// Importation de React pour créer des composants

// Importation des composants
import Banner from '../../Components/Banner/Banner'; 
import Collapse from '../../Components/Collapse/Collapse'; 

import './About.css'; // Importation CSS
import aboutBannerImage from '../../Images/aboutbanner.png'; // Importation image de la bannière about

function About() { // Définit le composant de la page "À Propos".
  // Données pour les accordéons (Collapse) de la page "À Propos".
  const collapsesData = [
    {
      title: "Fiabilité", // Titre du premier accordéon.
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." // Contenu du premier accordéon.
    },
    {
      title: "Respect", // Titre du deuxième accordéon.
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." // Contenu du deuxième accordéon.
    },
    {
      title: "Service", // Titre du troisième accordéon.
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." // Contenu du troisième accordéon.
    },
    {
      title: "Sécurité", // Titre du quatrième accordéon.
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En fixant les règles, nous permettons à chacun de passer un séjour en toute sérénité." // Contenu du quatrième accordéon.
    }
  ];

  return ( // Ce que le composant About va afficher.
    <main className="about-main"> {/* Conteneur principal de la page "À Propos" avec une classe CSS. */}
      {/* Bannière de la page "À Propos". */}
      <Banner
        imageUrl={aboutBannerImage} // Passe l'image de fond pour la bannière.
        text="" // Laisse le texte vide, car la maquette de la page "À Propos" n'en a pas.
      />

      <section className="about-collapses"> {/* Section qui regroupe tous les accordéons. */}
        {/* Parcourt les données "collapsesData" pour créer un composant Collapse pour chaque élément. */}
        {collapsesData.map((data, index) => (
          <Collapse // Affiche un composant Collapse.
            key={index} // Clé unique pour chaque Collapse (l'index est utilisé car il n'y a pas d'ID).
            title={data.title} // Passe le titre de l'accordéon.
            content={data.content} // Passe le contenu de l'accordéon.
          />
        ))}
      </section>
    </main>
  );
}

export default About; // Rend le composant About disponible pour être utilisé ailleurs.