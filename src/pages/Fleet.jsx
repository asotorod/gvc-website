import { useState, useEffect } from 'react'
import api from '../services/api'
import './Fleet.css'

function Fleet() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await api.getHero('fleet');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
    };
    fetchHero();
  }, []);

  return (
    <div className="fleet-page">
      <section 
        className="page-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>🚌 Our Fleet</h1>
          <p>Modern, safe, and well-maintained vehicles</p>
        </div>
      </section>
      <section className="section"><div className="container"><div className="fleet-intro text-center"><h2>50+ Buses Ready to Serve</h2><p>Our diverse fleet includes vehicles for every transportation need, from standard school buses to wheelchair-accessible vehicles and charter coaches.</p></div></div></section>
      <section className="section bg-light"><div className="container"><div className="grid grid-3"><div className="fleet-card"><div className="fleet-icon">🚌</div><h3>Full-Size School Buses</h3><p>Traditional yellow school buses seating up to 72 passengers</p></div><div className="fleet-card"><div className="fleet-icon">🚐</div><h3>Mini Buses</h3><p>Perfect for smaller groups and special routes</p></div><div className="fleet-card"><div className="fleet-icon">♿</div><h3>Wheelchair Accessible</h3><p>Fully ADA compliant with wheelchair lifts</p></div></div></div></section>
      <section className="section"><div className="container"><h2 className="section-title text-center">Safety Features</h2><div className="features-list"><div className="feature-item"><span className="feature-check">✓</span>GPS Tracking on all vehicles</div><div className="feature-item"><span className="feature-check">✓</span>Interior and exterior cameras</div><div className="feature-item"><span className="feature-check">✓</span>Regular safety inspections</div><div className="feature-item"><span className="feature-check">✓</span>Air conditioning</div></div></div></section>
    </div>
  )
}
export default Fleet
