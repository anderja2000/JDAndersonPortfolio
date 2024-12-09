import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/Home.css";
import "./styles/Header.css";
import "./styles/ToggleSwitch.css";
import './styles/AboutMePage.css';
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'


import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
