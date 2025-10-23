import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Cards />
      <Footer />
    </>
  )
}

export default App
