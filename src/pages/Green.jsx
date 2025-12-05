import './Green.css'

function Green() {
  return (
    <div className="green-page">
      <section className="page-hero green-hero"><div className="container"><h1>🌿 Green Initiative</h1><p>Our commitment to a sustainable future</p></div></section>
      <section className="section"><div className="container"><div className="green-intro text-center"><h2>Driving Towards a Cleaner Future</h2><p>At GVC, we believe in protecting the environment for future generations. That's why we're actively investing in clean energy solutions and sustainable practices.</p></div></div></section>
      <section className="section bg-light"><div className="container"><div className="grid grid-3"><div className="green-card"><div className="green-icon">⚡</div><h3>Electric Buses</h3><p>We're adding electric buses to our fleet, producing zero direct emissions.</p></div><div className="green-card"><div className="green-icon">🌱</div><h3>Propane Buses</h3><p>Our propane-powered buses produce significantly fewer emissions than diesel.</p></div><div className="green-card"><div className="green-icon">♻️</div><h3>Eco-Friendly Practices</h3><p>From efficient routing to recycling programs at our facilities.</p></div></div></div></section>
      <section className="section"><div className="container"><h2 className="section-title text-center">Our Environmental Goals</h2><div className="goals-list"><div className="goal-item"><span className="goal-number">50%</span><span className="goal-text">Clean energy fleet by 2027</span></div><div className="goal-item"><span className="goal-number">30%</span><span className="goal-text">Reduction in emissions</span></div><div className="goal-item"><span className="goal-number">100%</span><span className="goal-text">Renewable energy at facilities</span></div></div></div></section>
    </div>
  )
}
export default Green
