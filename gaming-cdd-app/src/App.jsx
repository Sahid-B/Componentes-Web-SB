import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Inicio } from './pages/Inicio/Inicio';
import { Noticias } from './pages/Noticias/Noticias';
import { Favoritos } from './pages/Favoritos/Favoritos';

// =====================================================
// App.jsx  —  Configuración de Rutas (react-router-dom)
// El Layout actúa como contenedor persistente
// (Header + Outlet) para todas las rutas hijas.
// =====================================================

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz: carga el Layout como contenedor principal */}
        <Route path="/" element={<Layout />}>
          {/* Ruta índice: se muestra en "/" */}
          <Route index element={<Inicio />} />
          {/* Rutas hijas */}
          <Route path="noticias" element={<Noticias />} />
          <Route path="favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
