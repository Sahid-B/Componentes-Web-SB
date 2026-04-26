class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .inicio-container {
          text-align: center;
          padding: 20px;
          color: #111827;
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
          text-align: left;
        }

        .feature-card {
          background: #ffffff;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .feature-card h3 {
          color: #111827;
          margin-top: 0;
          font-weight: 600;
        }

        .feature-card p {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 0;
        }
        
        .actions {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .faq-section {
          margin-top: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
          background: #ffffff;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }

        .faq-section h3 {
          font-size: 24px;
          margin-top: 0;
          margin-bottom: 20px;
          color: #111827;
          font-weight: 600;
        }
      </style>
      <div class="inicio-container">
        <mi-banner 
          titulo="Explora el Universo Gamer" 
          subtitulo="Tu portal definitivo para descubrir los mejores títulos, noticias y galerías"
          bg="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80">
        </mi-banner>

        <p style="font-size: 18px; color: #4b5563; max-width: 800px; margin: 0 auto; line-height: 1.6;">
          Bienvenido a la experiencia definitiva en videojuegos. Sumérgete en nuestra extensa galería, 
          descubre los títulos más aclamados y mantente al día con las últimas noticias de la industria.
        </p>

        <div class="actions">
          <mi-button text="Ver Galería" link="#/galeria"></mi-button>
          <mi-button text="Top 5 Juegos" link="#/top-juegos"></mi-button>
        </div>

        <div class="features">
          <div class="feature-card">
            <h3>Diseño Minimalista</h3>
            <p>Disfruta de una interfaz limpia y clara diseñada para brindarte la mejor lectura y experiencia.</p>
          </div>
          <div class="feature-card">
            <h3>Rendimiento</h3>
            <p>Construido con Web Components nativos para garantizar una carga ultrarrápida y eficiente.</p>
          </div>
          <div class="feature-card">
            <h3>Contenido Curado</h3>
            <p>Las mejores selecciones de juegos y galerías en alta resolución para verdaderos entusiastas.</p>
          </div>
        </div>

        <div class="faq-section">
          <h3>Preguntas Frecuentes</h3>
          <mi-accordion titulo="¿Cada cuánto se actualiza la galería?">
            Actualizamos nuestra galería de imágenes cada semana con las mejores capturas y lanzamientos recientes de la industria de los videojuegos.
          </mi-accordion>
          <mi-accordion titulo="¿Cómo puedo colaborar?">
            Puedes ir a la página de contacto y enviarnos tus sugerencias, imágenes o artículos. ¡Siempre estamos buscando contenido de la comunidad!
          </mi-accordion>
          <mi-accordion titulo="¿Qué tecnología usa esta página?">
            Este proyecto está construido de manera minimalista utilizando Vanilla JavaScript y Web Components nativos (HTML/CSS/JS puros), sin necesidad de frameworks pesados.
          </mi-accordion>
        </div>
      </div>
    `;
  }
}
customElements.define('home-page', HomePage);