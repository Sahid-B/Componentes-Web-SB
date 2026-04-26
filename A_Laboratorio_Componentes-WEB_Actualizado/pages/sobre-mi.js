class SobreMiPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .sobre-mi-container {
          text-align: center;
          padding: 60px 20px;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
        }
        .sobre-mi-container h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        .sobre-mi-container p {
          font-size: 20px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .sobre-mi-card {
          background: #fff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          margin-top: 30px;
        }
        .profile-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 20px auto;
          display: block;
          border: 4px solid #333;
        }
      </style>
      <div class="sobre-mi-container">
        <h2>Sobre Mí</h2>
        <div class="sobre-mi-card">
          <img src="./img/yo.png" class="profile-img" alt="Mi foto de perfil">
          <p>¡Hola! Soy un estudiante de la <strong>ESPE</strong> (Universidad de las Fuerzas Armadas).</p>
          <p>Soy originario de <strong>Santo Domingo</strong> y actualmente me encuentro estudiando la carrera de <strong>Tecnologías de la Información (TI)</strong>.</p>
          <p>Soy un gran apasionado de la tecnología y el desarrollo de software. Además, en mi tiempo libre me encanta disfrutar de los <strong>videojuegos</strong>. </p>
        </div>
      </div>
    `;
  }
}
customElements.define('sobre-mi-page', SobreMiPage);
