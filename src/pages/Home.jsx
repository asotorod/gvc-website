import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import './Home.css'

// Professional SVG Icons
const Icons = {
  safety: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )
};

function Home() {
  const [heroImage, setHeroImage] = useState('/hero-home.jpg'); // fallback to static

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await api.getHero('home');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
    };
    fetchHero();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div 
          className="hero-background" 
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">Safe & Reliable<span className="text-yellow"> Student Transportation</span></h1>
          <p className="hero-subtitle">Serving the Bronx community with professional school bus services since 1991. Your children's safety is our top priority.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
            <Link to="/careers" className="btn btn-outline btn-large" style={{borderColor: 'white', color: 'white'}}>Join Our Team</Link>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">{Icons.safety}</div>
              <h3>Safety First</h3>
              <p>All drivers are DOE certified with clean driving records. Buses equipped with GPS tracking and cameras.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">{Icons.clock}</div>
              <h3>On-Time Service</h3>
              <p>We pride ourselves on punctual pickups and drop-offs, ensuring students arrive at school on time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">{Icons.leaf}</div>
              <h3>Green Fleet</h3>
              <p>Committed to sustainability with our growing fleet of clean-energy and low-emission buses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="mission-title">Our Mission</h2>
              <p>When parents see their children off in the morning, the last thing they want to do is worry about their well-being on the way to school. With GVC LTD, they don't have to.</p>
              <p>We're proud to be an award-winning provider of school transportation services in the Bronx, NY. Since 1991, GVC has provided DOE-certified drivers and matrons.</p>
              <p>In addition to elementary levels, our school bus services offer pre-school pickups and drop offs. We staff our buses with DOE-certified matrons who help kids get on and off our buses.</p>
              <p className="mission-tagline">Every child arrives to school safely with GVC LTD.</p>
            </div>
            <div className="mission-stats">
              <div className="mission-stat-card">
                <span className="mission-stat-number">98%+</span>
                <span className="mission-stat-label">Safety Rating</span>
                <span className="mission-stat-detail">Average over the last 3 years with NYS DOT</span>
              </div>
              <div className="mission-stat-card">
                <span className="mission-stat-number">34+</span>
                <span className="mission-stat-label">Years of Service</span>
                <span className="mission-stat-detail">Proudly serving the Bronx since 1991</span>
              </div>
              <div className="mission-stat-card">
                <span className="mission-stat-number">DOE</span>
                <span className="mission-stat-label">Certified Staff</span>
                <span className="mission-stat-detail">All drivers and matrons fully certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section awards-section">
        <div className="container text-center">
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle">Proud to be recognized as the Best Bus Company in the Bronx</p>
          <div className="award-image-container">
            <img src="/best-of-bronx-award.jpg" alt="Ponce Bank Best of the Bronx Award" className="award-image" />
          </div>
          <div className="award-years">
            <div className="award-year">2023</div>
            <div className="award-year-divider"></div>
            <div className="award-year">2024</div>
            <div className="award-year-divider"></div>
            <div className="award-year">2025</div>
          </div>
          <div className="award-description">
            <h3>GVC LTD Named the Best Bus Company by the Bronx Times</h3>
            <p>The Bronx Times awarded GVC LTD the title of <strong>"Best Bus Company in the Bronx"</strong> for three consecutive years. This recognition celebrates our commitment to safety, comfort, and reliability. Our modern fleet and passenger-focused approach have made GVC LTD a preferred choice in the Bronx community.</p>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive transportation solutions for every need</p>
          <div className="grid grid-4">
            <div className="service-card"><div className="service-icon">🏫</div><h4>School Routes</h4><p>Daily home-to-school transportation</p></div>
            <div className="service-card"><div className="service-icon">🎯</div><h4>Field Trips</h4><p>Educational excursions and outings</p></div>
            <div className="service-card"><div className="service-icon">♿</div><h4>Special Needs</h4><p>Accessible vehicles and trained staff</p></div>
            <div className="service-card"><div className="service-icon">🎉</div><h4>Charter Services</h4><p>Sports events and special occasions</p></div>
          </div>
          <Link to="/services" className="btn btn-secondary" style={{marginTop: '2rem'}}>View All Services</Link>
        </div>
      </section>

      <section className="section fleet-preview bg-light">
        <div className="container">
          <div className="fleet-preview-grid">
            <div className="fleet-preview-content">
              <h2 className="section-title">Our Fleet</h2>
              <p>GVC LTD operates a modern fleet of over 50 buses, including wheelchair-accessible vehicles and buses equipped with the latest safety technology.</p>
              <ul className="fleet-features">
                <li>GPS tracking on all vehicles</li>
                <li>Interior and exterior cameras</li>
                <li>Air conditioning</li>
                <li>ADA compliant accessibility</li>
              </ul>
              <Link to="/fleet" className="btn btn-primary">View Our Fleet</Link>
            </div>
            <div className="fleet-preview-image">
              <Link to="/fleet" className="fleet-image-link">
                <img src="/fleet image.jpg" alt="GVC Fleet" className="fleet-img" />
                <div className="fleet-image-overlay">
                  <span className="fleet-image-label">FLEET</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Join Our Team?</h2>
          <p>We're always looking for dedicated professionals to join our growing family.</p>
          <Link to="/careers" className="btn btn-primary btn-large">View Open Positions</Link>
        </div>
      </section>
    </div>
  )
}
export default Home
