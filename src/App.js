import React from 'react';  // Importation de React pour créer des composants
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importation outil de routage 
// - Router : Rend votre application capable de changer d'URL.
// - Routes : Groupe toutes les règles de navigation.
// - Route : Définit une seule règle : "pour cette URL, afficher ce composant".

// Importation des pages et composants
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error404 from './Pages/Error404/Error404'; 
import PageProduct from './Pages/PageProduct/PageProduct';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() { // Composant principal de l'app.
  return ( // Ce que l'app affiche.
    <Router> {/* Active la navigation par URL. */}
      <div className="app-wrapper"> {/* Conteneur pour le design (ex: footer en bas). */}
        <Header /> {/* Affiche l'en-tête. */}
        <main className="app-content"> {/* Zone principale où les pages s'affichent. */}
          <Routes> {/* La liste des chemins (URLs) de l'app. */}
            <Route path="/" element={<Home />} /> {/* Chemin pour la page d'accueil. */}
            <Route path="/about" element={<About />} /> {/* Chemin pour la page "À Propos". */}
            <Route path="/logement/:id" element={<PageProduct />} /> {/* Chemin pour une page de logement spécifique (l'ID change). */}
            <Route path="*" element={<Error404 />} /> {/* Chemin pour toute autre URL (page d'erreur). Toujours en dernier. */}
          </Routes>
        </main>
        <Footer /> {/* Affiche le pied de page. */}
      </div>
    </Router>
  );
}
export default App; // Rend l'app disponible pour être affichée.