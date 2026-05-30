import React from 'react';
import { Button } from '../Button/Button';
import './productcard.css';

// Componente molecular: reutiliza Button (principio CDD)
// Props: title, description, genre, rating, image, onFavorite
export const ProductCard = ({ title, description, genre, rating, image, onFavorite }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__body">
        <span className="card__tag">{genre}</span>
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
        <div className="card__actions">
          <Button text="Ver detalles" variant="primary" onClick={() => alert('Juego: ' + title)} />
          <Button text="Guardar" variant="favorite" onClick={() => onFavorite({ title, genre, image, rating })} />
        </div>
      </div>
    </div>
  );
};
