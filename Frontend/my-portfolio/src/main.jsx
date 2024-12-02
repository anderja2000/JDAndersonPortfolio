import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/Header.css";
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext.jsx'


import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
