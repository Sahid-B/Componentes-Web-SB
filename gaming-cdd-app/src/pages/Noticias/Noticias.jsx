import { useState } from 'react';
import './noticias.css';

const NOTICIAS = [
  { id: 1, titulo: 'GTA VI confirma fecha para 2025', resumen: 'Rockstar anuncio que GTA VI llegara en el ultimo trimestre de 2025 para PS5 y Xbox Series X.', fecha: '20 May 2025' },
  { id: 2, titulo: 'Nintendo Switch 2: primeras impresiones', resumen: 'Los analisis destacan mejoras en rendimiento grafico y pantalla OLED de 8 pulgadas.', fecha: '18 May 2025' },
  { id: 3, titulo: 'Elden Ring recibe DLC Shadow of the Erdtree', resumen: 'FromSoftware lanzo el mayor DLC de su historia con mas de 40 horas de contenido.', fecha: '15 May 2025' },
  { id: 4, titulo: 'Los eSports superan 500 millones de espectadores', resumen: 'Reporte indica crecimiento exponencial con torneos de League of Legends al frente.', fecha: '10 May 2025' },
  { id: 5, titulo: 'Steam Deck con soporte de Ray Tracing', resumen: 'Nueva actualizacion de firmware habilitara Ray Tracing en juegos compatibles.', fecha: '05 May 2025' },
];

export const Noticias = () => {
  const [leidas, setLeidas] = useState([]);

  const toggleLeida = (id) => {
    setLeidas((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section>
      <h2 className="noticias__titulo">Noticias Gaming</h2>
      <p className="noticias__subtitulo">
        Ultimas novedades de la industria. Leidas: {leidas.length}/{NOTICIAS.length}
      </p>

      <ul className="noticias__lista">
        {NOTICIAS.map((n) => {
          const leida = leidas.includes(n.id);
          return (
            <li key={n.id} className={`noticias__item ${leida ? 'noticias__item--leida' : ''}`}>
              <div>
                <p className="noticias__fecha">{n.fecha}</p>
                <h3 className={`noticias__nombre ${leida ? 'noticias__nombre--leida' : ''}`}>{n.titulo}</h3>
                <p className="noticias__resumen">{n.resumen}</p>
              </div>
              <button
                className={`noticias__btn ${leida ? 'noticias__btn--leida' : 'noticias__btn--pendiente'}`}
                onClick={() => toggleLeida(n.id)}
              >
                {leida ? 'Leida' : 'Marcar'}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
