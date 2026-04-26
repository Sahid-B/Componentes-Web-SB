class MiCard extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const src = this.getAttribute('src') || '';
    const titulo = this.getAttribute('titulo') || 'Sin título';
    const descripcion = this.getAttribute('descripcion') || 'Sin descripción';
    const badgeText = this.getAttribute('badge') || '';
    
    const badgeHtml = badgeText ? `<div class="badge-container"><mi-badge text="${badgeText}"></mi-badge></div>` : '';

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px; 
          overflow: hidden;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          transition: all 0.2s ease; 
          cursor: pointer;
          color: #111827;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .card:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .img-container {
          position: relative;
          width: 100%;
          height: 180px;
        }

        .card img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .badge-container {
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .contenido {
          padding: 20px; 
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        h3 {
          margin: 0 0 8px; 
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }

        p {
          margin: 0;
          font-size: 14px;
          color: #4b5563; 
          line-height: 1.5;
        }
      </style>
      <div class='card'>
        <div class='img-container'>
          <img src='${src}' alt='${titulo}'>
          ${badgeHtml}
        </div>
        <div class='contenido'>
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
        </div>
      </div>
    `;
  }
}
customElements.define('mi-card', MiCard);