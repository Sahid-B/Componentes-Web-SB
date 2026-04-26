class MiButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const text = this.getAttribute('text') || 'Click Me';
    const link = this.getAttribute('link') || '#';

    this.shadowRoot.innerHTML = `
      <style>
        .btn {
          display: inline-block;
          padding: 10px 24px;
          font-size: 15px;
          font-weight: 500;
          color: #374151;
          background: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn:hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }
      </style>
      <a href="${link}" class="btn">${text}</a>
    `;
  }
}

customElements.define('mi-button', MiButton);
