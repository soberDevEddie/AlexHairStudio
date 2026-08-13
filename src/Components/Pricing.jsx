import { Link } from 'react-router-dom'

const menus = [
  {
    title: 'Haircuts',
    items: [
      { name: "Women's cut — layer cutting", price: '$55' },
      { name: "Women's cut — linear cutting", price: '$50' },
      { name: "Men's haircut", price: '$30' },
      { name: 'Beard trim & shape', price: '$15' },
    ],
  },
  {
    title: 'Color & styling',
    items: [
      { name: 'Highlights', price: '$95' },
      { name: 'Color retouch', price: '$70' },
      { name: 'Straightener or curls', price: '$50' },
      { name: 'Blowout, dry & peinado', price: '$40' },
    ],
  },
  {
    title: 'Facials & massage',
    items: [
      { name: 'Facial treatment', price: '$50' },
      { name: 'Relaxation massage', price: '$60' },
    ],
  },
  {
    title: 'Nails & finishing touches',
    items: [
      { name: 'Manicure — nail care & polish', price: '$20' },
      { name: 'Pedicure', price: '$30' },
      { name: 'Eyebrow shaping', price: '$15' },
      { name: 'Ear piercing', price: '$25' },
    ],
  },
]

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-head">
        <p className="eyebrow">No surprises at the register</p>
        <h2 className="section-heading">Our pricing</h2>
        <p className="section-sub">
          Every service below includes a consultation first. Manicures cover
          nail care and polish only — we don't apply extensions.
        </p>
      </div>
      <div className="container">
        <div className="row g-4">
          {menus.map((menu) => (
            <div className="col-12 col-sm-6 col-lg-3" key={menu.title}>
              <div className="pricing-card">
                <h3>{menu.title}</h3>
                <div>
                  {menu.items.map((item) => (
                    <div className="pricing-row" key={item.name}>
                      <span>{item.name}</span>
                      <span className="price">{item.price}</span>
                    </div>
                  ))}
                </div>
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

export default Pricing
