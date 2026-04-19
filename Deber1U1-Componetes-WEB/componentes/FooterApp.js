class FooterApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const texto = this.getAttribute('texto') || '© 2026 Todos los derechos reservados.';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background: #2c3e50;
                    color: #ecf0f1;
                    text-align: center;
                    padding: 25px 0;
                    margin-top: 50px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    box-shadow: 0 -4px 15px rgba(0,0,0,0.1);
                }
                
                p {
                    margin: 0;
                    font-size: 1rem;
                    opacity: 0.9;
                }
                
                .footer-links {
                    margin-top: 15px;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                
                .footer-links a {
                    color: #3498db;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: #2ecc71;
                }
            </style>
            <footer>
                <p>${texto}</p>
                <div class="footer-links">
                    <a href="#">Privacidad</a>
                    <a href="#">Términos</a>
                    <a href="#">Soporte</a>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-app', FooterApp);
