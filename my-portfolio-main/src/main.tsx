import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializa a animação
AOS.init({
  duration: 1000, // Duração da animação em milissegundos
  once: true,     
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
