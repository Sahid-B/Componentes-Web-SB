class ContactoPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .contacto-wrapper {
          padding: 40px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }

        form {
          width: 100%;
          max-width: 600px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          color: #111827;
        }

        h2 { 
          margin-top: 0; 
          font-size: 28px;
          text-align: center;
          margin-bottom: 30px;
          color: #111827;
          font-weight: 600;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-grupo {
          flex: 1;
        }

        .form-grupo-full {
          margin-bottom: 20px;
          width: 100%;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        input, textarea, select {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 16px;
          background: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          color: #111827;
          font-family: inherit;
          font-size: 15px;
          transition: all 0.2s ease;
        }

        input::placeholder, textarea::placeholder {
          color: #9ca3af;
        }

        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #6b7280;
          box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.1);
        }

        button {
          background: #374151;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 6px;
          width: 100%;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          transition: background 0.2s ease;
          margin-top: 10px;
        }

        button:hover {
          background: #1f2937;
        }

        @media (max-width: 600px) {
          .form-row {
            flex-direction: column;
            gap: 0;
          }
          .form-row .form-grupo {
            margin-bottom: 20px;
          }
        }
      </style>

      <div class="contacto-wrapper">
        <form>
          <h2>Contáctanos</h2>
          
          <div class="form-row">
            <div class="form-grupo">
              <label for="nombre">Nombre Completo</label>
              <input type="text" id="nombre" placeholder="Ej. Juan Pérez" required>
            </div>
            <div class="form-grupo">
              <label for="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="tu@email.com" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-grupo">
              <label for="telefono">Teléfono (Opcional)</label>
              <input type="tel" id="telefono" placeholder="+34 123 456 789">
            </div>
            <div class="form-grupo">
              <label for="plataforma">Plataforma Principal</label>
              <select id="plataforma" required>
                <option value="">Selecciona una opción</option>
                <option value="pc">PC</option>
                <option value="ps">PlayStation</option>
                <option value="xbox">Xbox</option>
                <option value="switch">Nintendo Switch</option>
                <option value="movil">Móvil</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-grupo">
              <label for="juego">Juego Favorito</label>
              <input type="text" id="juego" placeholder="Ej. The Legend of Zelda">
            </div>
            <div class="form-grupo">
              <label for="asunto">Asunto</label>
              <select id="asunto" required>
                <option value="">Selecciona el asunto</option>
                <option value="soporte">Soporte Técnico</option>
                <option value="sugerencia">Sugerencia de Contenido</option>
                <option value="colaboracion">Colaboración</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div class="form-grupo-full">
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" rows="5" placeholder="¿En qué podemos ayudarte?" required></textarea>
          </div>
          
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    `;
  }
}
customElements.define('contacto-page', ContactoPage);
