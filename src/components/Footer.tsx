import React from 'react'
import './Footer.scss'

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p className="footer__copy">
        © {new Date().getFullYear()} Alexander Radar — Built with React, TypeScript &amp; SCSS
      </p>
      <div className="footer__links">
        <a href="https://github.com/aaradar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alexander-radar-a946a2282/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
)

export default Footer
