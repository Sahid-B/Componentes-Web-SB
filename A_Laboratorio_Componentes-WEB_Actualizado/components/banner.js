class MiBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('titulo') || 'Welcome';
    const subtitle = this.getAttribute('subtitulo') || 'Discover amazing things';
    const bgImage = this.getAttribute('bg') || '';

    this.shadowRoot.innerHTML = `
      <style>
        .banner {
          position: relative;
          width: 100%;
          height: 350px;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 40px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .banner-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('${bgImage}');
          background-size: cover;
          background-position: center;
          filter: brightness(0.85);
          transition: transform 0.5s ease;
          z-index: 1;
        }
        
        .banner:hover .banner-bg {
          transform: scale(1.02);
        }

        .content {
          position: relative;
          z-index: 2;
          padding: 30px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.4);
          max-width: 80%;
        }

        h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 700;
          color: #111827;
          letter-spacing: 1px;
        }

        p {
          margin: 15px 0 0;
          font-size: 18px;
          color: #4b5563;
        }
      </style>
      <div class="banner">
        <div class="banner-bg"></div>
        <div class="content">
          <h2>${title}</h2>
          <p>${subtitle}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('mi-banner', MiBanner);
