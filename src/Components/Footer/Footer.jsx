import React from 'react';  // Importation de React pour créer des composants
import '../../Components/Footer/Footer.css'; // Impportation du CSS
import logoFooter from '../../Images/.LOGO.png'; // Importation du Logo

function Footer() {  // Création du composant Footer
    return ( // Affiche le pied de page.
    <footer className="footer"> {/* Conteneur principal du pied de page. */}
      <img src={logoFooter} alt="Logo Kasa" className="footer-logo" /> {/* Affiche le logo de Kasa. */}
      <p className="footer-text">© 2020 Kasa. All rights reserved</p> {/* Affiche le texte de copyright. */}
    </footer>
  );
}

export default Footer; // Exporte le composant Footer