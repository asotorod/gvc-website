import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import './Careers.css'

// Professional SVG Icons
const Icons = {
  pay: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v12M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5 1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5"/>
    </svg>
  ),
  health: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      <path d="M12 8v8M8 12h8"/>
    </svg>
  ),
  vacation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  )
};

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

      {/* Why Work Section */}
      <section className="section">
        <div className="container">
          <div className="careers-intro text-center">
            <h2>Why Work at GVC?</h2>
            <p>For over 34 years, GVC LTD has been a trusted name in student transportation. Join a team that values safety, community, and professional growth.</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">{Icons.pay}</div>
              <h3>Competitive Pay</h3>
              <p>We offer industry-leading wages and regular pay increases</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">{Icons.health}</div>
              <h3>Health Benefits</h3>
              <p>Comprehensive health insurance for you and your family</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">{Icons.vacation}</div>
              <h3>Paid Time Off</h3>
              <p>Generous vacation and holiday schedule</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">{Icons.growth}</div>
              <h3>Career Growth</h3>
              <p>Training programs and advancement opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* We're Hiring Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="hiring-content">
            <div className="hiring-text">
              <h2>We're Hiring!</h2>
              <p>We're always looking for dedicated professionals to join our growing team. Whether you're an experienced driver or looking to start a new career, we want to hear from you.</p>
              <ul className="positions-list">
                <li>School Bus Drivers</li>
                <li>Bus Attendants / Matrons</li>
                <li>Mechanics</li>
                <li>Dispatchers</li>
                <li>Administrative Staff</li>
              </ul>
              <p className="note">CDL training available for qualified candidates</p>
            </div>
            <div className="hiring-cta">
              <div className="cta-card">
                <h3>Ready to Apply?</h3>
                <p>Start your career with the Bronx's most trusted school bus company</p>
                <Link to="/apply" className="btn btn-primary btn-large">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">What We Look For</h2>
          <div className="qualities-grid">
            <div className="quality-item">
              <span className="quality-icon">✓</span>
              <span>Safety-focused mindset</span>
            </div>
            <div className="quality-item">
              <span className="quality-icon">✓</span>
              <span>Reliable and punctual</span>
            </div>
            <div className="quality-item">
              <span className="quality-icon">✓</span>
              <span>Great with children</span>
            </div>
            <div className="quality-item">
              <span className="quality-icon">✓</span>
              <span>Team player attitude</span>
            </div>
            <div className="quality-item">
              <span className="quality-icon">✓</span>
              <span>Clean driving record</span>
            </div>
            <div className="quality-item">
              <span className="quality-icon">✓</span>
              <span>Professional demeanor</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
