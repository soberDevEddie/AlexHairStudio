const testimonials = [
  {
    quote:
      "Been getting my fade here for two years. Never had to explain what I want twice.",
    who: 'Diego M.',
  },
  {
    quote:
      "The hot towel shave is worth the drive on its own. Booked in thirty seconds online.",
    who: 'Priya K.',
  },
  {
    quote:
      "Took my son for his first real haircut. Patient with him, and it actually looked good after.",
    who: 'Chris T.',
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="services-head">
        <p className="eyebrow">Word of mouth</p>
        <h2 className="section-heading">What clients say</h2>
      </div>
      <div className="container">
        <div className="row g-4">
          {testimonials.map((t) => (
            <div className="col-12 col-md-4" key={t.who}>
              <div className="testimonial-card">
                <p className="quote-mark">&ldquo;</p>
                <p className="quote">{t.quote}</p>
                <p className="who">{t.who}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
