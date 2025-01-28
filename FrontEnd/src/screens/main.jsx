import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CyberSanskar from './CyberSanskar'
import '../css/CyberSanskar.css'
import Home from './Home'
import '../css/Home.css'
import AboutUs from './AboutUs'
import '../css/BannerCompo.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CyberSanskar/> */}
    <Home/>
    {/* <AboutUs/> */}
  </StrictMode>,
)
