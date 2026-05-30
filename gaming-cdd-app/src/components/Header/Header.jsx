import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>GameZone</h1>
        <p>Programacion integrativa de componentes web</p>
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/noticias">Noticias</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
};
