class TopJuegosPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .top-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
        }
        .top-container h2 {
          text-align: center;
          color: #333;
          font-size: 32px;
          margin-bottom: 40px;
        }
        .juego-card {
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          border-bottom: 1px solid #ccc;
          padding-bottom: 20px;
        }
        .juego-rank {
          font-size: 32px;
          color: #333;
          padding: 0 20px;
          min-width: 40px;
          text-align: center;
        }
        .juego-img {
          width: 120px;
          height: 160px;
          object-fit: cover;
          background: #ddd;
        }
        .juego-info {
          padding: 20px;
          flex: 1;
        }
        .juego-info h3 {
          margin: 0 0 10px 0;
          font-size: 24px;
          color: #222;
        }
        .juego-info p {
          margin: 0;
          color: #555;
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .juego-card {
            flex-direction: column;
            text-align: center;
          }
          .juego-rank {
            padding: 10px;
            font-size: 36px;
          }
          .juego-img {
            width: 100%;
            height: 200px;
          }
        }
      </style>
      <div class="top-container">
        <h2>Mi Top 5 Videojuegos Favoritos</h2>
        
        <div class="juego-card">
          <div class="juego-rank">1</div>
          <img src="https://tse1.mm.bing.net/th/id/OIP.fiwOCvdnt2wQVM0G8It5dgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Red Dead Redemption 2" class="juego-img">
          <div class="juego-info">
            <h3>Red Dead Redemption 2</h3>
            <p>Una obra maestra con una historia increíble, un mundo abierto detallado y personajes inolvidables. La aventura de Arthur Morgan es insuperable y sus gráficos son de lo mejor.</p>
          </div>
        </div>

        <div class="juego-card">
          <div class="juego-rank">2</div>
          <img src="https://static.tweaktown.com/news/1/0/109334_2_resident-evil-9-requiems-interactive-gameplay-is-almost-equally-split-between-grace-and-leon_full.png" alt="Resident Evil 9" class="juego-img">
          <div class="juego-info">
            <h3>Resident Evil 9</h3>
            <p>La tensión y el terror de esta franquicia siempre me han cautivado. Sus mecánicas de supervivencia, la acción y los sustos que ofrece lo hacen mi segundo favorito indiscutible.</p>
          </div>
        </div>

        <div class="juego-card">
          <div class="juego-rank">3</div>
          <img src="https://th.bing.com/th/id/OIP.chZQ1BTq2dFvf9nEXCJCKQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Roblox" class="juego-img">
          <div class="juego-info">
            <h3>Roblox</h3>
            <p>La libertad creativa que ofrece es simplemente increíble. Me encanta tener la posibilidad de probar cientos de minijuegos diferentes y disfrutar con amigos en su inmensa comunidad.</p>
          </div>
        </div>

        <div class="juego-card">
          <div class="juego-rank">4</div>
          <img src="https://tse4.mm.bing.net/th/id/OIP.CGhXokxVr0JoYZqLvaTpdQHaKX?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Spider-Man 2" class="juego-img">
          <div class="juego-info">
            <h3>Marvel's Spider-Man 2</h3>
            <p>La sensación de balancearse por Nueva York es inigualable. Tiene un combate muy fluido, gráficos espectaculares y una historia de superhéroes que te atrapa desde el primer minuto.</p>
          </div>
        </div>

        <div class="juego-card">
          <div class="juego-rank">5</div>
          <img src="https://th.bing.com/th/id/R.b549d8e276c99e49da632eda4e948332?rik=QDgjaOR%2fxb574g&pid=ImgRaw&r=0" alt="GTA V" class="juego-img">
          <div class="juego-info">
            <h3>Grand Theft Auto V</h3>
            <p>Un clásico moderno que nunca muere. Su inmenso mundo abierto, las misiones llenas de acción sin freno y la diversión caótica del modo online lo mantienen en mi top definitivo.</p>
          </div>
        </div>

      </div>
    `;
  }
}
customElements.define('top-juegos-page', TopJuegosPage);
