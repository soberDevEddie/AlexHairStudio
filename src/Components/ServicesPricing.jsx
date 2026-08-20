import { Link } from 'react-router-dom'

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

const categories = [
  {
    icon: <ScissorsIcon />,
    title: 'Cuts, for everyone',
    text: "Women's haircuts (layer or linear cutting), men's cuts, and beard shaping — precise, every time.",
    items: [
      { name: "Women's cut — layer cutting", price: '$55' },
      { name: "Women's cut — linear cutting", price: '$50' },
      { name: "Men's haircut", price: '$30' },
      { name: 'Beard trim & shape', price: '$15' },
    ],
  },
  {
    icon: <DropletIcon />,
    title: 'Color & styling',
    text: 'Highlights, color retouches, straightening, curls, blowouts, and peinados for any occasion.',
    items: [
      { name: 'Highlights', price: '$95' },
      { name: 'Color retouch', price: '$70' },
      { name: 'Straightener or curls', price: '$50' },
      { name: 'Blowout, dry & peinado', price: '$40' },
    ],
  },
  {
    icon: <LeafIcon />,
    title: 'Facials & massage',
    text: 'Facial treatments and massages to help you actually relax while you wait for the rest.',
    items: [
      { name: 'Facial treatment', price: '$50' },
      { name: 'Relaxation massage', price: '$60' },
    ],
  },
  {
    icon: <SparkleIcon />,
    title: 'Nails & finishing touches',
    text: 'Manicure and pedicure nail care, eyebrow shaping, and ear piercings.',
    items: [
      { name: 'Manicure — nail care & polish', price: '$20' },
      { name: 'Pedicure', price: '$30' },
      { name: 'Eyebrow shaping', price: '$15' },
      { name: 'Ear piercing', price: '$25' },
    ],
  },
]

const ServicesPricing = () => {
  return (
    <section className="service-detail-section" id="services">
      <div className="service-detail-head">
        <p className="eyebrow">No surprises at the register</p>
        <h2 className="section-heading">Services &amp; pricing</h2>
        <p className="section-sub">
          Every service below includes a consultation first. Manicures cover
          nail care and polish only — we don't apply extensions.
        </p>
      </div>
      <div className="container">
        <div className="row g-4">
          {categories.map((category) => (
            <div className="col-12 col-md-6" key={category.title}>
              <div className="service-detail-card">
                <div className="service-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p className="service-detail-text">{category.text}</p>
                <dl className="price-list">
                  {category.items.map((item) => (
                    <div className="price-row" key={item.name}>
                      <dt>{item.name}</dt>
                      <dd>{item.price}</dd>
                    </div>
                  ))}
                </dl>
                <Link className="btn-pill" to="/location">
                  Visit us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPricing
