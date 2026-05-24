import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Art from './components/Art'
import Footer from './components/Footer'

const App: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <Art />
    </main>
    <Footer />
  </>
)

export default App
