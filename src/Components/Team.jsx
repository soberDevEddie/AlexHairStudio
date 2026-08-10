const team = [
  { name: 'Alex Rivera', role: 'Owner & barber', initials: 'AR' },
  { name: 'Marcus Lee', role: 'Barber', initials: 'ML' },
  { name: 'Sam Okafor', role: 'Barber', initials: 'SO' },
  { name: 'Jordan Price', role: 'Hair stylist', initials: 'JP' },
]

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="services-head">
        <p className="eyebrow">Who's cutting</p>
        <h2 className="section-heading">Our team</h2>
      </div>
      <div className="container">
        <div className="row g-4">
          {team.map((member) => (
            <div className="col-6 col-md-3" key={member.name}>
              <div className="team-card">
                <div className="team-avatar">
                  <span>{member.initials}</span>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
