 import React from 'react';  // Importation de React pour créer des composants
 import { Link } from 'react-router-dom';  // Importation du composant Link
 import './Error404.css';  // Importation du CSS

function Error404() {

  return (
 <main className="error-page-container"> {/* Ajout du style + texte */}
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous recherchez n'existe pas.</p> 
      <Link to="/" className="error-link-home"> {/* Lien vers la page d'accueil */ }
        Retourner sur la page d'accueil
      </Link>
    </main>
    );

 }

export default Error404;  // Exporte le composant Error404.

