import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import './Careers.css'

function Careers() {
  const [positions, setPositions] = useState([])
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadCareers() }, [])

  const loadCareers = async () => {
    try {
      const data = await api.getCareers()
      setPositions(data.positions || [])
    } catch (error) {
      console.error('Error loading careers:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="careers-page">
      <section className="page-hero"><div className="container"><h1>Join Our Team</h1><p>Build a rewarding career with GVC School Bus</p></div></section>
      <section className="section"><div className="container"><div className="careers-intro text-center"><h2>Why Work at GVC?</h2><p>We're more than just a bus company - we're a family committed to serving our community.</p></div><div className="benefits-grid"><div className="benefit-card"><span>💰</span><h4>Competitive Pay</h4></div><div className="benefit-card"><span>🏥</span><h4>Health Insurance</h4></div><div className="benefit-card"><span>📚</span><h4>Paid Training</h4></div><div className="benefit-card"><span>⏰</span><h4>Flexible Schedule</h4></div></div></div></section>
      <section className="section bg-light"><div className="container"><h2 className="section-title text-center">Open Positions</h2>{loading ? (<p className="text-center">Loading positions...</p>) : (<div className="positions-grid">{positions.map(position => (<div key={position.id} className={`position-card ${selectedPosition === position.id ? 'expanded' : ''}`}><div className="position-header" onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}><h3>{position.title}</h3><span className="expand-icon">{selectedPosition === position.id ? '−' : '+'}</span></div>{selectedPosition === position.id && (<div className="position-details"><p>{position.description}</p><h4>Requirements:</h4><ul>{position.requirements.map((req, i) => (<li key={i}>{req}</li>))}</ul><h4>Benefits:</h4><ul>{position.benefits.map((benefit, i) => (<li key={i}>{benefit}</li>))}</ul><Link to="/contact" className="btn btn-primary">Apply Now</Link></div>)}</div>))}</div>)}</div></section>
      <section className="section"><div className="container text-center"><h2 className="section-title">Ready to Apply?</h2><p className="section-subtitle">Contact us to start your application</p><Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link></div></section>
    </div>
  )
}
export default Careers
