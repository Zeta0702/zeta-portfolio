import React from 'react';
import { createRoot } from 'react-dom/client';
import { LangProvider } from './i18n';
import App from './app';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
