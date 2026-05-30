import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import './favoritos.css';

const INICIALES = [
  { title: 'Elden Ring',    genre: 'RPG',      image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',  rating: 9.5 },
  { title: 'Hades',         genre: 'Roguelike', image: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg',    rating: 9.3 },
  { title: 'The Witcher 3', genre: 'RPG',      image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg', rating: 9.8 },
];

export const Favoritos = () => {
  const [favoritos, setFavoritos] = useState(INICIALES);

  const eliminar = (titulo) => {
    setFavoritos((prev) => prev.filter((j) => j.title !== titulo));
  };

  return (
    <section>
      <h2 className="favoritos__titulo">Mis Favoritos</h2>
      <p className="favoritos__subtitulo">
        {favoritos.length > 0
          ? favoritos.length + ' juego(s) guardado(s).'
          : 'No tienes favoritos. Ve al catalogo para agregar.'}
      </p>

      <ul className="favoritos__lista">
        {favoritos.map((juego) => (
          <li key={juego.title} className="favoritos__item">
            <img src={juego.image} alt={juego.title} className="favoritos__imagen" />
            <div className="favoritos__info">
              <strong className="favoritos__nombre">{juego.title}</strong>
              <p className="favoritos__detalle">{juego.genre} — {juego.rating}/10</p>
            </div>
            <Button text="Eliminar" variant="danger" onClick={() => eliminar(juego.title)} />
          </li>
        ))}
      </ul>
    </section>
  );
};
