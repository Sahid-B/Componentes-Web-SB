class NoticiasPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .noticias-wrapper {
          padding: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .noticias-wrapper h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }
        .noticias-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .noticia-card {
          background: #fff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .noticia-card h3 {
          margin-top: 0;
          color: #222;
        }
        .noticia-card p {
          color: #555;
          font-size: 15px;
          line-height: 1.5;
        }
      </style>
      <div class="noticias-wrapper">
        <h2>Últimas Noticias</h2>
        <div class="noticias-grid">
          <div class="noticia-card">
            <h3>Rumores de GTA 6</h3>
            <p>Se espera que el próximo mapa sea el más grande jamás creado por Rockstar, combinando múltiples ciudades.</p>
          </div>
          <div class="noticia-card">
            <h3>El Éxito de Wukong</h3>
            <p>Black Myth: Wukong rompe récords de jugadores simultáneos, destacando por sus increíbles gráficos y combate.</p>
          </div>
          <div class="noticia-card">
            <h3>Lanzamientos de PlayStation</h3>
            <p>Nuevos rumores apuntan a secuelas de grandes exclusivas y posibles remasterizaciones para finales de año.</p>
          </div>
          <div class="noticia-card">
            <h3>Actualización de Cyberpunk 2077</h3>
            <p>CD Projekt Red anuncia la última gran actualización que mejora la estabilidad y añade nuevos vehículos al juego.</p>
          </div>
          <div class="noticia-card">
            <h3>Nuevo Nintendo Switch 2</h3>
            <p>Se filtran las posibles especificaciones de la nueva consola de Nintendo, apuntando a un lanzamiento a principios del próximo año.</p>
          </div>
          <div class="noticia-card">
            <h3>Nuevo lanzamiento de la play station 6</h3>
            <p>Dentro de un año aproximadamente se espera el lanzamiento de la play station 6, que prometen innovaciones graficas y jugables increibles.</p>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('noticias-page', NoticiasPage);
