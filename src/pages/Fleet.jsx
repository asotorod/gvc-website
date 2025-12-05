import './Fleet.css'

function Fleet() {
  const busTypes = [
    { type: 'Full-Size School Bus', capacity: '72 passengers', features: ['Air conditioning', 'GPS tracking', 'Safety cameras', 'Emergency exits'], icon: '🚌' },
    { type: 'Mini Bus', capacity: '24-30 passengers', features: ['Compact design', 'Maneuverability', 'GPS tracking', 'Air conditioning'], icon: '🚐' },
    { type: 'Wheelchair Accessible', capacity: '20+ passengers', features: ['Wheelchair lifts', 'Securement systems', 'ADA compliant', 'Climate control'], icon: '♿' }
  ]
  return (
    <div className="fleet-page">
      <section className="page-hero"><div className="container"><h1>Our Fleet</h1><p>Modern, well-maintained vehicles for safe transportation</p></div></section>
      <section className="section"><div className="container"><div className="fleet-intro text-center"><h2>50+ Vehicles Ready to Serve</h2><p>Our fleet consists of modern, well-maintained school buses equipped with the latest safety features.</p></div><div className="bus-types-grid">{busTypes.map((bus, index) => (<div key={index} className="bus-type-card"><div className="bus-icon">{bus.icon}</div><h3>{bus.type}</h3><p className="bus-capacity">{bus.capacity}</p><ul className="bus-features">{bus.features.map((feature, i) => (<li key={i}>✓ {feature}</li>))}</ul></div>))}</div></div></section>
      <section className="section bg-light"><div className="container"><h2 className="section-title text-center">Safety Features</h2><div className="grid grid-4"><div className="safety-feature"><span className="safety-icon">📍</span><h4>GPS Tracking</h4><p>Real-time location monitoring</p></div><div className="safety-feature"><span className="safety-icon">📹</span><h4>Camera Systems</h4><p>Interior and exterior cameras</p></div><div className="safety-feature"><span className="safety-icon">🚨</span><h4>Emergency Systems</h4><p>Multiple emergency exits</p></div><div className="safety-feature"><span className="safety-icon">🔧</span><h4>Regular Maintenance</h4><p>DOT certified inspections</p></div></div></div></section>
    </div>
  )
}
export default Fleet
