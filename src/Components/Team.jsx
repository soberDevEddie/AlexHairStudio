const team = [
  { name: 'Alex Rivera', role: 'Owner & colorist', initials: 'AR' },
  { name: 'Marcus Lee', role: 'Barber', initials: 'ML' },
  { name: 'Sam Okafor', role: 'Hair stylist', initials: 'SO' },
  { name: 'Jordan Price', role: 'Esthetician & nail care', initials: 'JP' },
]

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="services-head">
        <p className="eyebrow">Our people</p>
        <h2 className="section-heading">Meet the team</h2>
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
