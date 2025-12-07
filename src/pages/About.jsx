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
          <p>Dedicated to safe student transportation since 1991</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <h2>Our Story</h2>
            <p>For more than 34 years, GVC LTD has been a trusted school bus partner for families across the Bronx. Today, we are the borough's largest provider of transportation for children with special needs, delivering safe, reliable, and compassionate service every day.</p>
            <p>Our unwavering focus on safety and professionalism has earned GVC LTD the highest ratings from both the New York City Department of Transportation and the Department of Education.</p>
            <p>We are proud to serve our Bronx community and honored to help students get where they need to go, ready to learn.</p>
          </div>
        </div>
      </section>
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="grid grid-3">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Safety</h3>
              <p>The safety of our students is our number one priority. Every decision we make puts safety first.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Reliability</h3>
              <p>Parents and schools count on us to be there, on time, every time. We never let them down.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Community</h3>
              <p>We're proud members of the Bronx community and committed to giving back whenever we can.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">34+</span>
              <span className="stat-label">Years of Service</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">50+</span>
              <span className="stat-label">Buses in Fleet</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">100+</span>
              <span className="stat-label">Professional Drivers</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">1000s</span>
              <span className="stat-label">Students Served</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About
