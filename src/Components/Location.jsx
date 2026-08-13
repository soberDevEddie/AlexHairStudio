import Hours from './Hours'

const ADDRESS = '2300 S Leavitt St, Chicago, IL 60608'
const PHONE_DISPLAY = '(773) 956-1499'
const PHONE_TEL = '+17739561499'
const MAP_QUERY = encodeURIComponent(ADDRESS)

const Location = () => {
  return (
    <section className="location-section" id="location">
      <div className="location-head">
        <p className="eyebrow">Find us</p>
        <h2 className="section-heading">Come see us in Pilsen</h2>
        <p className="section-sub">
          Walk-ins welcome, regulars always taken care of. Call ahead if you
          want to check we're not slammed.
        </p>
      </div>

      <div className="location-body">
        <div className="location-map">
          <iframe
            title="Alex's Hair Studio location"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="location-details">
          <div>
            <p className="location-label">Address</p>
            <p className="location-value">{ADDRESS}</p>
          </div>
          <div>
            <p className="location-label">Phone</p>
            <a className="location-value location-link" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
          </div>

          <Hours />

          <div className="location-actions">
            <a
              className="btn-pill"
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
            <a className="btn-pill-ghost" href={`tel:${PHONE_TEL}`}>
              Call the shop
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
