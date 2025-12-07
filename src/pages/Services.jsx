import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import './Services.css'

function Services() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await api.getHero('services');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
    };
    fetchHero();
  }, []);

  return (
    <div className="services-page">
      <section 
        className="page-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Our Services</h1>
          <p>Safe, reliable student transportation in the Bronx</p>
        </div>
      </section>

      {/* Bus Transportation Services Section */}
      <section className="section service-section">
        <div className="container">
          <div className="service-content-card">
            <div className="service-icon-wrapper">
              <span className="service-icon-large">🚌</span>
            </div>
            <h2>Bus Transportation Services in the Bronx</h2>
            <p className="service-description">
              School buses are the safest mode of transportation for getting children, including pre-school children, to and from school. GVC LTD provides the highest-rated bus transportation services in the Bronx, NY. We're also recognized by the Department of Education.
            </p>
            <div className="service-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🛡️</span>
                <span>Highest Safety Ratings</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <span>DOE Recognized</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📍</span>
                <span>Bronx, NY</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">👶</span>
                <span>All Ages Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-School and Elementary Section */}
      <section className="section service-section bg-light">
        <div className="container">
          <div className="service-content-card">
            <div className="service-icon-wrapper">
              <span className="service-icon-large">🎒</span>
            </div>
            <h2>Pre-School and Elementary Bus Transportation</h2>
            <p className="service-description">
              Our parents have peace of mind that their kids make it to school safely and on time with our bus transportation. We transport special-needs children who attend pre-school and elementary school, year round. Our professional drivers pick up your child from their home and bring them to and from school. Our DOE-certified matrons assist your child getting on and off our buses.
            </p>
            <div className="service-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🏠</span>
                <span>Door-to-Door Service</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">👩‍✈️</span>
                <span>Professional Drivers</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">👩‍🏫</span>
                <span>DOE-Certified Matrons</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📅</span>
                <span>Year Round Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Need Transportation Services?</h2>
          <p className="section-subtitle">Contact us today to discuss your transportation needs</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get a Quote</Link>
        </div>
      </section>
    </div>
  )
}
export default Services
