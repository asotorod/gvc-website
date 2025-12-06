import { useState, useEffect } from 'react'
import api from '../services/api'
import './Gallery.css'

function Gallery() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await api.getHero('gallery');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
    };
    fetchHero();
  }, []);

  return (
    <div className="gallery-page">
      <section 
        className="page-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>📸 Photo Gallery</h1>
          <p>See our fleet, team, and community in action</p>
        </div>
      </section>
      <section className="section"><div className="container"><div className="gallery-placeholder text-center"><div className="placeholder-icon">🖼️</div><h2>Gallery Coming Soon</h2><p>We're curating photos of our fleet, team events, and community involvement. Check back soon!</p></div></div></section>
    </div>
  )
}
export default Gallery
