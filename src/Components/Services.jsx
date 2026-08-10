const ScissorsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="6" cy="18" r="2.4" />
    <line x1="8" y1="7.6" x2="20" y2="17" />
    <line x1="8" y1="16.4" x2="20" y2="7" />
  </svg>
)

const DropletIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c4 5 6 8.2 6 11a6 6 0 1 1-12 0c0-2.8 2-6 6-11z" />
  </svg>
)

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20c8 0 14-6 14-14-8 0-14 6-14 14z" />
    <path d="M4 20c3-5 6-8 12-12.5" />
  </svg>
)

const SparkleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    <path d="M6.5 6.5l3 3M14.5 14.5l3 3M17.5 6.5l-3 3M9.5 14.5l-3 3" />
  </svg>
)

const services = [
  {
    icon: <ScissorsIcon />,
    title: 'Cuts, for everyone',
    text: "Women's haircuts (layer or linear cutting), men's cuts, and beard shaping — precise, every time.",
  },
  {
    icon: <DropletIcon />,
    title: 'Color & styling',
    text: 'Highlights, color retouches, straightening, curls, blowouts, and peinados for any occasion.',
  },
  {
    icon: <LeafIcon />,
    title: 'Facials & massage',
    text: 'Facial treatments and massages to help you actually relax while you wait for the rest.',
  },
  {
    icon: <SparkleIcon />,
    title: 'Nails & finishing touches',
    text: 'Manicure and pedicure nail care, eyebrow shaping, and ear piercings.',
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
            <div className="col-12 col-sm-6 col-lg-3" key={s.title}>
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
