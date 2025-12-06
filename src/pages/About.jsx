import { useState, useEffect } from 'react'
import api from '../services/api'
import './About.css'

function About() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await api.getHero('about');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
    };
    fetchHero();
  }, []);

  return (
    <div className="about-page">
      <section 
        className="page-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>About GVC School Bus</h1>
          <p>Dedicated to safe student transportation since 1995</p>
        </div>
      </section>
      <section className="section"><div className="container"><div className="about-intro"><h2>Our Story</h2><p>GVC LTD has been serving the Bronx community for over three decades, providing safe and reliable student transportation services. What started as a small family business has grown into one of the most trusted school bus companies in the area.</p><p>Our commitment to safety, professionalism, and community service has remained unchanged throughout the years. We take pride in being more than just a transportation company – we're a partner in your children's education.</p></div></div></section>
      <section className="section bg-light"><div className="container"><h2 className="section-title text-center">Our Core Values</h2><div className="grid grid-3"><div className="value-card"><div className="value-icon">🛡️</div><h3>Safety</h3><p>The safety of our students is our number one priority. Every decision we make puts safety first.</p></div><div className="value-card"><div className="value-icon">🤝</div><h3>Reliability</h3><p>Parents and schools count on us to be there, on time, every time. We never let them down.</p></div><div className="value-card"><div className="value-icon">💚</div><h3>Community</h3><p>We're proud members of the Bronx community and committed to giving back whenever we can.</p></div></div></div></section>
      <section className="section"><div className="container"><h2 className="section-title text-center">By The Numbers</h2><div className="stats-grid"><div className="stat-card"><span className="stat-value">30+</span><span className="stat-label">Years of Service</span></div><div className="stat-card"><span className="stat-value">50+</span><span className="stat-label">Buses in Fleet</span></div><div className="stat-card"><span className="stat-value">100+</span><span className="stat-label">Professional Drivers</span></div><div className="stat-card"><span className="stat-value">1000s</span><span className="stat-label">Students Served</span></div></div></div></section>
    </div>
  )
}
export default About
