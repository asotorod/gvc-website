import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background"><div className="hero-overlay"></div></div>
        <div className="container hero-content">
          <h1 className="hero-title">Safe & Reliable<span className="text-yellow"> Student Transportation</span></h1>
          <p className="hero-subtitle">Serving the Bronx community with professional school bus services since 1995. Your children's safety is our top priority.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
            <Link to="/careers" className="btn btn-outline btn-large" style={{borderColor: 'white', color: 'white'}}>Join Our Team</Link>
          </div>
        </div>
      </section>
      <section className="section features-section">
        <div className="container">
          <div className="grid grid-3">
            <div className="feature-card"><div className="feature-icon">🛡️</div><h3>Safety First</h3><p>All drivers are DOE certified with clean driving records. Buses equipped with GPS tracking and cameras.</p></div>
            <div className="feature-card"><div className="feature-icon">⏰</div><h3>On-Time Service</h3><p>We pride ourselves on punctual pickups and drop-offs, ensuring students arrive at school on time.</p></div>
            <div className="feature-card"><div className="feature-icon">🌿</div><h3>Green Fleet</h3><p>Committed to sustainability with our growing fleet of clean-energy and low-emission buses.</p></div>
          </div>
        </div>
      </section>
      <section className="section about-preview bg-light">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content">
              <h2 className="section-title">Serving Our Community for 30 Years</h2>
              <p>GVC LTD has been a trusted name in student transportation throughout the Bronx. Our commitment to safety, reliability, and professionalism has made us the preferred choice for schools and parents alike.</p>
              <ul className="about-stats"><li><span className="stat-number">50+</span> Buses in Fleet</li><li><span className="stat-number">100+</span> Professional Drivers</li><li><span className="stat-number">30+</span> Years of Service</li></ul>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="about-preview-image"><div className="image-placeholder"><span>🚌</span><p>GVC Fleet</p></div></div>
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
