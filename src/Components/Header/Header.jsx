import React from 'react'; // Importation de React pour créer des composants
import { Link } from 'react-router-dom'; // Importation du composant Link
import '../../Components/Header/Header.css'; // Importation du CSS
import logo from '../../Images/.LOGO-1.svg'; // Importation Logo


function Header() { // Création du composant header
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/" className="header-nav-link">Accueil</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/about" className="header-nav-link">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;