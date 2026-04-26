class MiBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const text = this.getAttribute('text') || 'Etiqueta';

    this.shadowRoot.innerHTML = `
      <style>
        .badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          background-color: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 9999px; /* Pill shape */
          font-size: 12px;
          font-weight: 500;
          color: #4b5563;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
      </style>
      <span class="badge">${text}</span>
    `;
  }
}

customElements.define('mi-badge', MiBadge);
