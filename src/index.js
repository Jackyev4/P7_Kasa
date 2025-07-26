import React from 'react';  // Importation de React pour pouvoir créer des composants
import ReactDOM from 'react-dom/client';  // Importation de ReactDOM pour connecter React au HTML.
import './index.css';  // Importe le fichier de styles CSS global pour l'application
import App from './App'  // Importe le composant principal de l'application (App)

const root = ReactDOM.createRoot(document.getElementById('root'));  // Crée une racine React à partir de l'élément HTML avec l'id 'root'
root.render(
  <React.StrictMode>  {/*Sert à m'alerter des erreurs dans la création du projet*/}
    <App />
  </React.StrictMode>
);


