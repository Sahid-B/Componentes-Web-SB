class MiAccordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('titulo') || 'Título del acordeón';
    const content = this.innerHTML;

    this.shadowRoot.innerHTML = `
      <style>
        .accordion {
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 10px;
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          font-weight: 500;
          color: #111827;
          font-family: inherit;
        }

        .accordion-header:hover {
          color: #4b5563;
        }

        .icon {
          font-size: 20px;
          color: #9ca3af;
          transition: transform 0.3s ease;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.6;
        }

        .accordion.open .accordion-content {
          max-height: 500px;
          padding-bottom: 16px;
        }

        .accordion.open .icon {
          transform: rotate(45deg);
        }
      </style>
      <div class="accordion">
        <button class="accordion-header">
          ${title}
          <span class="icon">+</span>
        </button>
        <div class="accordion-content">
          <slot></slot>
        </div>
      </div>
    `;

    const header = this.shadowRoot.querySelector('.accordion-header');
    const accordion = this.shadowRoot.querySelector('.accordion');

    header.addEventListener('click', () => {
      accordion.classList.toggle('open');
    });
  }
}

customElements.define('mi-accordion', MiAccordion);
