class MiHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        header { 
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          color: #111827; 
          padding: 15px 30px; 
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        h1 {
          margin: 0;
          font-size: 22px;
          color: #111827;
          font-weight: 600;
        }
        nav {
          display: flex;
          gap: 24px;
        }
        nav a { 
          color: #4b5563; 
          text-decoration: none; 
          font-weight: 400; 
          font-size: 16px;
          transition: color 0.2s ease;
        }
        nav a:hover { 
          color: #111827; 
        }
      </style>
      <header>
        <h1>Mi Galeria de Videojuegos</h1>
        <nav>
          <a href='#/'>Inicio</a>
          <a href='#/galeria'>Galería</a>
          <a href='#/noticias'>Noticias</a>
          <a href='#/sobre-mi'>Sobre Mí</a>
          <a href='#/top-juegos'>Top 5</a>
          <a href='#/contacto'>Contacto</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('mi-header', MiHeader);