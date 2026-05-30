import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import './layout.css';

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <footer className="layout__footer">
        GameZone — Programacion integrativa de componentes web 2025
      </footer>
    </div>
  );
};
