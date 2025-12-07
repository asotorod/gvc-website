import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import './Services.css'

function Services() {
  const [heroImage, setHeroImage] = useState(null);
  const [transportationImage, setTransportationImage] = useState(null);
  const [preschoolImage, setPreschoolImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      // Fetch main hero
      const hero = await api.getHero('services');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
      
      // Fetch transportation section image
      const transportation = await api.getHero('services-transportation');
      if (transportation && transportation.image_url) {
        setTransportationImage(transportation.image_url);
      }
      
      // Fetch preschool section image
      const preschool = await api.getHero('services-preschool');
      if (preschool && preschool.image_url) {
        setPreschoolImage(preschool.image_url);
      }
    };
    fetchImages();
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
      <section className="section service-section-split">
        <div className="service-split-container">
          <div className="service-split-content dark">
            <h2>Bus Transportation Services in the Bronx</h2>
            <p>
              School buses are the safest mode of transportation for getting children, including pre-school children, to and from school. GVC LTD provides the highest-rated bus transportation services in the Bronx, NY. We're also recognized by the Department of Education.
            </p>
            <div className="service-badges">
              <span className="badge">🛡️ Highest Safety Ratings</span>
              <span className="badge">✓ DOE Recognized</span>
              <span className="badge">📍 Bronx, NY</span>
              <span className="badge">👶 All Ages Welcome</span>
            </div>
          </div>
          <div 
            className="service-split-image"
            style={transportationImage ? { backgroundImage: `url(${transportationImage})` } : {}}
          >
            {!transportationImage && (
              <div className="image-placeholder">
                <span>🚌</span>
                <p>Upload image in Portal CMS</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pre-School and Elementary Section */}
      <section className="section service-section-split reverse">
        <div className="service-split-container">
          <div 
            className="service-split-image"
            style={preschoolImage ? { backgroundImage: `url(${preschoolImage})` } : {}}
          >
            {!preschoolImage && (
              <div className="image-placeholder">
                <span>🎒</span>
                <p>Upload image in Portal CMS</p>
              </div>
            )}
          </div>
          <div className="service-split-content dark">
            <h2>Pre-School and Elementary Bus Transportation</h2>
            <p>
              Our parents have peace of mind that their kids make it to school safely and on time with our bus transportation. We transport special-needs children who attend pre-school and elementary school, year round. Our professional drivers pick up your child from their home and bring them to and from school. Our DOE-certified matrons assist your child getting on and off our buses.
            </p>
            <div className="service-badges">
              <span className="badge">🏠 Door-to-Door Service</span>
              <span className="badge">👩‍✈️ Professional Drivers</span>
              <span className="badge">👩‍🏫 DOE-Certified Matrons</span>
              <span className="badge">📅 Year Round Service</span>
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
