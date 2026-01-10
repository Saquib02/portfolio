import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
//import Footer from './Components/Footer.jsx'  

function App() {
  

  return (
   <div className="font-sans">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
