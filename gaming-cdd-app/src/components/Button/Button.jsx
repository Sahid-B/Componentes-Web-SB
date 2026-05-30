import React from 'react';
import './button.css';

// Componente atomico reutilizable
// Props: text, onClick, variant ('primary' | 'favorite' | 'danger')
export const Button = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};
