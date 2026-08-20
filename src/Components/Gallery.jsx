import { useEffect, useState } from 'react'

// TEMP: stand-in photos (free-license, via Unsplash) until real shop photos
// are ready to swap back in. Replace the `src` values below when they are.
const photos = [
  { src: '/placeholder-salon-interior.jpg', alt: 'Barbershop interior with clients getting haircuts' },
  { src: '/placeholder-salon-brick.jpg', alt: 'Styling chair against an exposed brick wall' },
  { src: '/placeholder-barber-chair.jpg', alt: 'Row of classic barber chairs' },
  { src: '/placeholder-salon-vintage.jpg', alt: 'Barbershop interior with vintage-style signage' },
  { src: '/placeholder-haircut-styling.jpg', alt: 'Close-up of a straight razor' },
]

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const isOpen = lightboxIndex !== null

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + photos.length) % photos.length)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const showPrev = (e) => {
    e.stopPropagation()
    setLightboxIndex((i) => (i - 1 + photos.length) % photos.length)
  }

  const showNext = (e) => {
    e.stopPropagation()
    setLightboxIndex((i) => (i + 1) % photos.length)
  }

  return (
    <section className="gallery-section">
      <div className="gallery-head">
        <p className="eyebrow">Take a look around</p>
        <h2 className="section-heading">Our gallery</h2>
        <p className="section-sub">
          A peek at the shop — the space, the tools, and the work we're proud
          of.
        </p>
      </div>

      <div id="galleryCarousel" className="carousel slide gallery-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : undefined}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {photos.map((photo, index) => (
            <div
              className={`carousel-item${index === 0 ? ' active' : ''}`}
              key={photo.src}
            >
              <img
                src={photo.src}
                className="d-block w-100"
                alt={photo.alt}
                onClick={() => setLightboxIndex(index)}
                role="button"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div
            className="gallery-item"
            key={photo.src}
            onClick={() => setLightboxIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(index)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
          >
            &times;
          </button>

          <button className="lightbox-prev" type="button" aria-label="Previous photo" onClick={showPrev}>
            &#10094;
          </button>

          <img
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="lightbox-next" type="button" aria-label="Next photo" onClick={showNext}>
            &#10095;
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
