import { useState, useEffect } from 'react'
import api from '../services/api'
import './Events.css'

function Events() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await api.getHero('events');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
    };
    fetchHero();
  }, []);

  return (
    <div className="events-page">
      <section 
        className="page-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>📅 Events</h1>
          <p>Stay updated with GVC news and community events</p>
        </div>
      </section>
      <section className="section"><div className="container"><div className="events-placeholder text-center"><div className="placeholder-icon">🎉</div><h2>Events Coming Soon</h2><p>We're planning exciting community events and updates. Check back soon for announcements!</p></div></div></section>
    </div>
  )
}
export default Events
