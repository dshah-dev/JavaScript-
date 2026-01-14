import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import "./JavaScript/DOM.js";
import "./JavaScript/Task1.js"
// import "./JavaScript/JsPractice.js"
// import "./JavaScript/Event.js"
// import "./JavaScript/Asynchronous_JavaScript.js"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
