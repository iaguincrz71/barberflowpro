
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Sistema de log para depuração em produção
window.onerror = function(message, source, lineno, colno, error) {
  console.error('Erro Crítico BarberFlow:', message, 'em', source, lineno, colno);
};

const init = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Erro Fatal: Elemento #root não encontrado no DOM.");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Falha ao inicializar React:", err);
  }
};

// Garante que o DOM esteja pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
