import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `nav-link${isActive ? ' active' : ''}`

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg site-navbar">
      <div className="container-fluid px-0 d-flex align-items-center justify-content-between">
        <NavLink className="navbar-brand" to="/" onClick={() => setOpen(false)}>
          Alex's <span className="accent">Hair Studio</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse${open ? '' : ' collapse'}`}>
          <div className="navbar-nav ms-lg-auto">
            <NavLink className={navLinkClass} to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink className={navLinkClass} to="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </NavLink>
            <NavLink className={navLinkClass} to="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </NavLink>
            <NavLink className={navLinkClass} to="/booking" onClick={() => setOpen(false)}>
              Booking
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
