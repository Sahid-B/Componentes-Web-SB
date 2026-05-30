import { useState } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './inicio.css';

const JUEGOS = [
  {
    id: 1,
    title: 'Elden Ring',
    description: 'RPG de accion en mundo abierto creado con George R.R. Martin.',
    genre: 'RPG',
    rating: 9.5,
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
  },
  {
    id: 2,
    title: 'Hollow Knight',
    description: 'Metroidvania de exploracion subterranea con combates precisos.',
    genre: 'Metroidvania',
    rating: 9.0,
    image: 'https://tse4.mm.bing.net/th/id/OIP.f0TC_-pMZ2LZDRP9r4q-6gHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 3,
    title: 'Cyberpunk 2077',
    description: 'RPG de mundo abierto en Night City con historia de crimen y tecnologia.',
    genre: 'RPG / FPS',
    rating: 8.5,
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
  },
  {
    id: 4,
    title: 'Hades',
    description: 'Roguelike donde intentas escapar del inframundo griego.',
    genre: 'Roguelike',
    rating: 9.3,
    image: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg',
  },
  {
    id: 5,
    title: 'The Witcher 3',
    description: 'Aventura epica como Geralt de Rivia llena de decisiones y monstruos.',
    genre: 'RPG',
    rating: 9.8,
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
  },
  {
    id: 6,
    title: 'Stardew Valley',
    description: 'Simulador de granja indie con exploracion de cavernas y vida en pueblo.',
    genre: 'Simulacion',
    rating: 9.0,
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png',
  },
];

export const Inicio = () => {
  const [mensaje, setMensaje] = useState('');

  const handleGuardar = (juego) => {
    setMensaje(juego.title + ' guardado en favoritos.');
    setTimeout(() => setMensaje(''), 2500);
  };

  return (
    <section>
      <h2 className="inicio__titulo">Catalogo de Videojuegos</h2>
      <p className="inicio__subtitulo">Explora los mejores titulos del momento.</p>

      {mensaje && <p className="inicio__alerta">{mensaje}</p>}

      <div className="inicio__grid">
        {JUEGOS.map((juego) => (
          <ProductCard
            key={juego.id}
            title={juego.title}
            description={juego.description}
            genre={juego.genre}
            rating={juego.rating}
            image={juego.image}
            onFavorite={handleGuardar}
          />
        ))}
      </div>
    </section>
  );
};
