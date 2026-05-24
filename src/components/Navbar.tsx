import React, { useEffect, useState } from 'react'
import './Navbar.scss'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['about', 'work', 'art']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__brand" onClick={() => scrollTo('about')}>
        <span className="navbar__initials">AR</span>
        <span className="navbar__name">Alexander Radar</span>
      </div>
      <div className="navbar__links">
        <button
          className={active === 'about' ? 'active' : ''}
          onClick={() => scrollTo('about')}
        >
          About Me
        </button>
        <button
          className={active === 'work' ? 'active' : ''}
          onClick={() => scrollTo('work')}
        >
          Projects
        </button>
        <button
          className={active === 'art' ? 'active' : ''}
          onClick={() => scrollTo('art')}
        >
          Art Portfolio
        </button>
      </div>
    </nav>
  )
}

export default Navbar
