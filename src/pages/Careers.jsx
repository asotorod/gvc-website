import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import './Careers.css'

function Careers() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await api.getHero('careers');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
    };
    fetchHero();
  }, []);

  const positions = [
    { title: 'School Bus Driver', type: 'Full-time', description: 'CDL required. Competitive pay and benefits.' },
    { title: 'Bus Attendant', type: 'Full-time', description: 'Assist students and ensure safe transportation.' },
    { title: 'Mechanic', type: 'Full-time', description: 'Maintain and repair our fleet of buses.' },
    { title: 'Dispatcher', type: 'Full-time', description: 'Coordinate routes and communicate with drivers.' }
  ]
  return (
    <div className="careers-page">
      <section 
        className="page-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Join Our Team</h1>
          <p>Build a rewarding career with GVC School Bus</p>
        </div>
      </section>
      <section className="section"><div className="container"><div className="careers-intro text-center"><h2>Why Work at GVC?</h2><p>Join a team that values safety, community, and professional growth. We offer competitive pay, benefits, and a supportive work environment.</p></div></div></section>
      <section className="section bg-light"><div className="container"><h2 className="section-title text-center">Open Positions</h2><div className="positions-grid">{positions.map((position, index) => (<div key={index} className="position-card"><h3>{position.title}</h3><span className="position-type">{position.type}</span><p>{position.description}</p><Link to="/contact" className="btn btn-primary">Apply Now</Link></div>))}</div></div></section>
      <section className="section"><div className="container"><h2 className="section-title text-center">Benefits</h2><div className="grid grid-4"><div className="benefit-item">💰<span>Competitive Pay</span></div><div className="benefit-item">🏥<span>Health Insurance</span></div><div className="benefit-item">🏖️<span>Paid Time Off</span></div><div className="benefit-item">📈<span>Career Growth</span></div></div></div></section>
    </div>
  )
}
export default Careers
