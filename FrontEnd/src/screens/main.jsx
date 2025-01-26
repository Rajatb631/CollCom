import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CyberSanskar from './CyberSanskar'
import '../css/CyberSanskar.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CyberSanskar/>
  </StrictMode>,
)
