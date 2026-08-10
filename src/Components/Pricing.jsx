import { Link } from 'react-router-dom'

const menus = [
  {
    title: 'Haircuts',
    items: [
      { name: 'Classic haircut', price: '$32' },
      { name: 'Skin fade', price: '$38' },
      { name: 'Buzz cut', price: '$24' },
      { name: "Kids cut (12 & under)", price: '$22' },
    ],
  },
  {
    title: 'Shaves & beard',
    items: [
      { name: 'Hot towel shave', price: '$45' },
      { name: 'Beard trim & line-up', price: '$18' },
      { name: 'Beard shape & shave combo', price: '$55' },
    ],
  },
  {
    title: 'Grooming',
    items: [
      { name: 'Scalp treatment', price: '$15' },
      { name: 'Hair wash & style', price: '$12' },
      { name: 'Cut, shave & style combo', price: '$68' },
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
          Every service below includes a consultation with your barber before
          the first cut.
        </p>
      </div>
      <div className="container">
        <div className="row g-4">
          {menus.map((menu) => (
            <div className="col-12 col-md-4" key={menu.title}>
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
                <Link className="btn-pill" to="/booking">
                  Book appointment
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
