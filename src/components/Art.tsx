import React, { useState } from 'react'
import makisekurisu1 from '../drawings/makisekurisu1.jpeg'
import makisekurisu2 from '../drawings/makisekurisu2.jpeg'
import makisekurisu3 from '../drawings/makisekurisu3.jpeg'
import vladilena4 from '../drawings/vladilena4.jpeg'
import vladilena5 from '../drawings/vladilena5.jpeg'
import vladilena6 from '../drawings/vladilena6.jpeg'
import './Art.scss'

interface ArtPiece {
  id: number
  title: string
  medium: string
  src: string        // Replace with actual image paths when you have your art files
  placeholder: string
}

// ──────────────────────────────────────────────────────────────────────────────
// Replace the `src` values with your actual image paths, e.g.:
//   import myDrawing from '../assets/art/piece1.png'
//   and use `src: myDrawing`
// Or use relative URL strings: src: '/art/piece1.png'
// The placeholder is shown as a coloured gradient until images are added.
// ──────────────────────────────────────────────────────────────────────────────
const artPieces: ArtPiece[] = [
  { id: 1, title: 'Makise Kurisu', medium: 'Digital Art', src: makisekurisu1, placeholder: 'linear-gradient(135deg, #1565c0, #00e5ff)' },
  { id: 2, title: 'Makise Kurisu', medium: 'Digital Art', src: makisekurisu2, placeholder: 'linear-gradient(135deg, #0d2137, #2979ff)' },
  { id: 3, title: 'Makise Kurisu', medium: 'Digital Art', src: makisekurisu3, placeholder: 'linear-gradient(135deg, #020b18, #448aff)' },
  { id: 4, title: 'Vladilena Milizé', medium: 'Digital Art', src: vladilena4, placeholder: 'linear-gradient(135deg, #0a1929, #00e5ff)' },
  { id: 5, title: 'Vladilena Milizé', medium: 'Digital Art', src: vladilena5, placeholder: 'linear-gradient(135deg, #0e3460, #80deea)' },
  { id: 6, title: 'Vladilena Milizé', medium: 'Digital Art', src: vladilena6, placeholder: 'linear-gradient(135deg, #050f1f, #2979ff)' },
]

const hobbies = [
  { icon: '💻', label: 'Web Dev' },
  { icon: '🎨', label: 'Drawing' },
  { icon: '🍳', label: 'Cooking' },
  { icon: '🎵', label: 'Music' },
  { icon: '🎮', label: 'Gaming' },
]

const Art: React.FC = () => {
  const [lightbox, setLightbox] = useState<ArtPiece | null>(null)

  return (
    <section id="art" className="art">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">// art &amp; hobbies</span>
          <h2 className="section-header__title">
            Creative <span className="accent">Portfolio</span>
          </h2>
          <p className="section-header__sub">
            Beyond code, I create digital art — characters, environments, and fan art
            exploring the intersection of technology and visual storytelling.
          </p>
        </div>

        {/* Hobbies row */}
        <div className="art__hobbies">
          {hobbies.map(h => (
            <div key={h.label} className="art__hobby">
              <span className="art__hobby-icon">{h.icon}</span>
              <span className="art__hobby-label">{h.label}</span>
            </div>
          ))}
        </div>

        {/* Replace placeholder notice */}
        <div className="art__notice">
          <span className="art__notice-icon"></span>
          I've explored many interests and started digital art in August 2024. Here is a sample of my hobbies:
        </div>

        {/* Art grid */}
        <div className="art__grid">
          {artPieces.map(piece => (
            <div
              key={piece.id}
              className="art-card"
              onClick={() => setLightbox(piece)}
            >
              <div
                className="art-card__image"
                style={{ background: piece.src ? undefined : piece.placeholder }}
              >
                {piece.src ? (
                  <img src={piece.src} alt={piece.title} loading="lazy" />
                ) : (
                  <div className="art-card__placeholder">
                    <span>🎨</span>
                    <p>Add your artwork here</p>
                  </div>
                )}
                <div className="art-card__overlay">
                  <span className="art-card__zoom">⤢ View</span>
                </div>
              </div>
              <div className="art-card__info">
                <p className="art-card__title">{piece.title}</p>
                <p className="art-card__medium">{piece.medium}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="art-lightbox" onClick={() => setLightbox(null)}>
          <div className="art-lightbox__inner" onClick={e => e.stopPropagation()}>
            <button className="art-lightbox__close" onClick={() => setLightbox(null)}>✕</button>
            <div
              className="art-lightbox__image"
              style={{ background: lightbox.src ? undefined : lightbox.placeholder }}
            >
              {lightbox.src
                ? <img src={lightbox.src} alt={lightbox.title} />
                : <div className="art-card__placeholder"><span>🎨</span></div>
              }
            </div>
            <div className="art-lightbox__meta">
              <p className="art-lightbox__title">{lightbox.title}</p>
              <p className="art-lightbox__medium">{lightbox.medium}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Art
