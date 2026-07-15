import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "anthropic-fonts"
import './styles/globals.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/CASCADE-Human-VS-AI">
      <App />
    </BrowserRouter>
  </StrictMode>
)