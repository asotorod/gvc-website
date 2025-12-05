import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  const services = [
    { icon: '🏫', title: 'School Route Transportation', description: 'Daily home-to-school and school-to-home transportation services.', features: ['GPS-tracked buses', 'Trained drivers', 'On-time guarantee', 'Parent notifications'] },
    { icon: '🎯', title: 'Field Trips & Excursions', description: 'Safe transportation for educational field trips and outings.', features: ['Flexible scheduling', 'Competitive rates', 'Experienced drivers', 'All destinations'] },
    { icon: '♿', title: 'Special Needs Transportation', description: 'Wheelchair-accessible buses and specially trained staff.', features: ['ADA compliant', 'Wheelchair lifts', 'Trained attendants', 'Individualized care'] },
    { icon: '🎉', title: 'Charter Services', description: 'Charter bus services for sports, camps, and special occasions.', features: ['Flexible bookings', 'Group rates', 'Long distance', 'Weekend availability'] },
    { icon: '🏕️', title: 'Summer Camp Transportation', description: 'Reliable camp transportation services.', features: ['Daily routes', 'Door-to-door', 'Air conditioning', 'Camp coordination'] },
    { icon: '⚽', title: 'Athletic Events', description: 'Get your teams to games and practices safely.', features: ['Team scheduling', 'Equipment storage', 'All locations', 'Late returns'] }
  ]
  return (
    <div className="services-page">
      <section className="page-hero"><div className="container"><h1>Our Services</h1><p>Comprehensive transportation solutions for every need</p></div></section>
      <section className="section"><div className="container"><div className="services-grid">{services.map((service, index) => (<div key={index} className="service-detail-card"><div className="service-header"><span className="service-icon-large">{service.icon}</span><h3>{service.title}</h3></div><p>{service.description}</p><ul className="service-features">{service.features.map((feature, i) => (<li key={i}>✓ {feature}</li>))}</ul></div>))}</div></div></section>
      <section className="section bg-light"><div className="container text-center"><h2 className="section-title">Need Transportation Services?</h2><p className="section-subtitle">Contact us today to discuss your transportation needs</p><Link to="/contact" className="btn btn-primary btn-large">Get a Quote</Link></div></section>
    </div>
  )
}
export default Services
