class GaleriaImagenes extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const imagenes = [
      {
        src: "https://tse3.mm.bing.net/th/id/OIP.f_Mb8CFbewLPu1WMKiKEwwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        titulo: "God of War",
        descripcion: "Juego de Consola",
        badge: "Acción"
      },
      {
        src: "https://tse4.mm.bing.net/th/id/OIP.QFuk9bNNWybJd30mpPycJAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        titulo: "GTA 6",
        descripcion: "Juego de Consola",
        badge: "Mundo Abierto"
      },
      {
        src: "https://tse4.mm.bing.net/th/id/OIP.CGhXokxVr0JoYZqLvaTpdQHaKX?rs=1&pid=ImgDetMain&o=7&rm=3",
        titulo: "Spiderman 2",
        descripcion: "Juego de Consola",
        badge: "Aventura"
      },
      {
        src: "https://tse2.mm.bing.net/th/id/OIP.PW4IhZV4tq3H3KN1X26BrgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        titulo: "Black Myth: Wukong",
        descripcion: "Juego de Consola",
        badge: "RPG"
      },
      {
        src: "https://tse4.mm.bing.net/th/id/OIP.SxCHmyQM3qG9Xl45MDeXxwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        titulo: "Days Gone",
        descripcion: "Juego de Consola",
        badge: "Supervivencia"
      },
      {
        src: "https://tse1.mm.bing.net/th/id/OIP.qsmGc-HLOQUSF7IclAlLFgHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
        titulo: "Ghost of Tsushima",
        descripcion: "Juego de Consola",
        badge: "Acción"
      }
    ];
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; padding:20px; }
        .galeria { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:25px; }
      </style>
      <div class='galeria'>
        ${imagenes.map(img => `<mi-card src='${img.src}' titulo='${img.titulo}' descripcion='${img.descripcion}' badge='${img.badge}'></mi-card>`).join('')}
      </div>
    `;
  }
}
customElements.define('galeria-imagenes', GaleriaImagenes);
