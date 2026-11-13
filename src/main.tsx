import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// /card is a standalone page in public/card/. If the server ever hands this
// route to the React app instead, send the visitor to the real page.
if (/^\/card\/?$/i.test(window.location.pathname)) {
  window.location.replace('/card/index.html' + window.location.search + window.location.hash);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
