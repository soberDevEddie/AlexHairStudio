import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="eyebrow">Hair &amp; beauty studio &middot; walk-ins welcome</p>
        <h1 className="section-heading">Welcome to Alex's Hair Studio</h1>
        <p className="section-sub">
          Haircuts and color for the whole family, plus the beard trims,
          facials, and nail care that finish the look.
        </p>
        <div className="hero-actions">
          <Link className="btn-pill" to="/booking">
            Book appointment
          </Link>
          <Link className="btn-pill-ghost" to="/gallery">
            View our work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
