const ScissorsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="6" cy="18" r="2.4" />
    <line x1="8" y1="7.6" x2="20" y2="17" />
    <line x1="8" y1="16.4" x2="20" y2="7" />
  </svg>
)

const RazorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="12" height="6" rx="1" />
    <line x1="8" y1="10" x2="20" y2="20" />
  </svg>
)

const CombIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <line x1="6" y1="8" x2="6" y2="20" />
    <line x1="10" y1="8" x2="10" y2="20" />
    <line x1="14" y1="8" x2="14" y2="20" />
    <line x1="18" y1="8" x2="18" y2="20" />
  </svg>
)

const services = [
  {
    icon: <ScissorsIcon />,
    title: 'Precision cuts',
    text: "Fades, tapers, and classic scissor cuts, shaped to your hair and your week — not a template.",
  },
  {
    icon: <RazorIcon />,
    title: 'Hot towel shaves',
    text: 'A straight-razor shave with hot towels front to back. Slow down for twenty minutes.',
  },
  {
    icon: <CombIcon />,
    title: 'Beard & grooming',
    text: 'Beard shaping, line-ups, and scalp treatments to finish the look, not just the haircut.',
  },
]

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-head">
        <p className="eyebrow">What we do</p>
        <h2 className="section-heading">Our services</h2>
      </div>
      <div className="container">
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-12 col-md-4" key={s.title}>
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
