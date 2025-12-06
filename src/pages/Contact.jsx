import { useState, useEffect } from 'react'
import api from '../services/api'
import './Contact.css'

function Contact() {
  const [heroImage, setHeroImage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  useEffect(() => {
    const fetchHero = async () => {
      const hero = await api.getHero('contact');
      if (hero && hero.image_url) {
        setHeroImage(hero.image_url);
      }
    };
    fetchHero();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section 
        className="page-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>📞 Contact Us</h1>
          <p>We're here to help with all your transportation needs</p>
        </div>
      </section>
      <section className="section"><div className="container"><div className="contact-grid"><div className="contact-info"><h2>Get in Touch</h2><div className="info-item"><span className="info-icon">📍</span><div><h4>Address</h4><p>1234 Bus Lane, Bronx, NY 10001</p></div></div><div className="info-item"><span className="info-icon">📞</span><div><h4>Phone</h4><p>(718) 555-0123</p></div></div><div className="info-item"><span className="info-icon">✉️</span><div><h4>Email</h4><p>info@gvcbus.com</p></div></div><div className="info-item"><span className="info-icon">🕒</span><div><h4>Hours</h4><p>Mon-Fri: 6AM - 7PM</p></div></div></div><div className="contact-form-container"><h2>Send a Message</h2><form onSubmit={handleSubmit} className="contact-form"><input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /><input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required /><input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} /><input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required /><textarea placeholder="Your Message" rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea><button type="submit" className="btn btn-primary btn-large">Send Message</button></form></div></div></div></section>
    </div>
  )
}
export default Contact
