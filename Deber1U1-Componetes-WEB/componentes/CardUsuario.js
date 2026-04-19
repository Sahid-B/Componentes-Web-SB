class CardUsuario extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Atributos que el componente vigila
    static get observedAttributes() {
        return ['nombre', 'cargo', 'estado', 'imagen'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const nombre = this.getAttribute('nombre') || "Usuario Genérico";
        const cargo = this.getAttribute('cargo') || "Cargo no asignado";
        const estado = this.getAttribute('estado') || "Desconocido";
        const imagen = this.getAttribute('imagen') || "https://via.placeholder.com/150";

        // Estilos y Estructura encapsulados
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    --text-color: #2c3e50;
                    --text-muted: #7f8c8d;
                    --bg-card: rgba(255, 255, 255, 0.9);
                }
                .card {
                    background: var(--bg-card);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 16px;
                    padding: 2.5rem 1.5rem;
                    width: 260px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.12);
                }
                .imagen-perfil {
                    width: 110px;
                    height: 110px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 4px solid white;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    margin-bottom: 1.5rem;
                    transition: transform 0.3s ease;
                }
              
                
            </style>

            <div class="card">
                <img src="${imagen}" alt="Foto de ${nombre}" class="imagen-perfil">
                <h2 class="nombre">${nombre}</h2>
                <p class="cargo">${cargo}</p>
                <span class="estado-badge">${estado}</span>
            </div>
        `;
    }
}

// Registro oficial del Custom Element
customElements.define('card-usuario', CardUsuario);