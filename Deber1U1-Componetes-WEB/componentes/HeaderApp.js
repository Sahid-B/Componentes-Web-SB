class HeaderApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const titulo = this.getAttribute('titulo') || 'Aplicación';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background: linear-gradient(135deg, #2c3e50, #3498db);
                    color: white;
                    padding: 30px 20px;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    margin-bottom: 40px;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
                
                h1 {
                    margin: 0;
                    font-size: 2.5rem;
                    letter-spacing: 1px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
                }
                
                p {
                    margin: 10px 0 0;
                    font-size: 1.1rem;
                    opacity: 0.8;
                }
            </style>
            <header>
                <h1>${titulo}</h1>
                <p>Gestiona tus recursos eficientemente</p>
            </header>
        `;
    }
}

customElements.define('header-app', HeaderApp);
