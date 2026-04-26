class MiFooter extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        footer { 
          background: #f9fafb;
          border-top: 1px solid #e5e7eb;
          color: #6b7280; 
          text-align: center; 
          padding: 24px; 
          margin-top: 40px; 
          font-size: 14px;
        }
      </style>
      <footer><p>© 2026 - Mi Sitio Web - Sahid Bosquez</p></footer>
    `;
  }
}
customElements.define('mi-footer', MiFooter);