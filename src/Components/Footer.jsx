import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="brand">
          Alex's <span className="accent">Hair Studio</span>
        </span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services &amp; pricing</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/location">Location</Link>
        </nav>
        <p className="fine-print">
          &copy; {new Date().getFullYear()} Alex's Hair Studio. Sun &amp; Sat, 7am&ndash;6pm &middot; Mon &amp; Wed&ndash;Fri, 7am&ndash;8pm &middot; Closed Tuesdays.
        </p>
      </div>
    </footer>
  )
}

export default Footer
