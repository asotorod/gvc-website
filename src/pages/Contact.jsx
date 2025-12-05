import { useState, useEffect } from 'react'
import api from '../services/api'
import './Contact.css'

function Contact() {
  const [companyInfo, setCompanyInfo] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'general', message: '' })

  useEffect(() => { loadCompanyInfo() }, [])

  const loadCompanyInfo = async () => {
    try {
      const data = await api.getCompanyInfo()
      setCompanyInfo(data)
    } catch (error) {
      console.error('Error loading company info:', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' })
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <div className="contact-page">
      <section className="page-hero"><div className="container"><h1>Contact Us</h1><p>Get in touch with our team</p></div></section>
      <section className="section"><div className="container"><div className="contact-grid">
        <div className="contact-info"><h2>Get In Touch</h2><p>Have questions? We'd love to hear from you.</p><div className="info-items"><div className="info-item"><span className="info-icon">📍</span><div><h4>Address</h4><p>{companyInfo?.address || '1392 Commerce Ave'}<br/>{companyInfo?.city || 'Bronx'}, {companyInfo?.state || 'NY'} {companyInfo?.zip || '10461'}</p></div></div><div className="info-item"><span className="info-icon">📞</span><div><h4>Phone</h4><p><a href="tel:+17188637934">{companyInfo?.phone || '(718) 863-7934'}</a></p></div></div><div className="info-item"><span className="info-icon">✉️</span><div><h4>Email</h4><p><a href="mailto:info@gvcbus.com">{companyInfo?.email || 'info@gvcbus.com'}</a></p></div></div><div className="info-item"><span className="info-icon">🕐</span><div><h4>Office Hours</h4><p>Monday - Friday: 6:00 AM - 6:00 PM<br/>Saturday & Sunday: Closed</p></div></div></div></div>
        <div className="contact-form-container"><form className="contact-form" onSubmit={handleSubmit}><div className="form-group"><label htmlFor="name">Your Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /></div><div className="form-row"><div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /></div><div className="form-group"><label htmlFor="phone">Phone</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} /></div></div><div className="form-group"><label htmlFor="subject">Subject</label><select id="subject" name="subject" value={formData.subject} onChange={handleChange}><option value="general">General Inquiry</option><option value="services">Service Request</option><option value="careers">Career Opportunity</option><option value="feedback">Feedback</option></select></div><div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea></div><button type="submit" className="btn btn-primary btn-large">Send Message</button></form></div>
      </div></div></section>
      <section className="map-section"><iframe title="GVC Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8986742825!2d-73.84432!3d40.83123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4d51e45e39f%3A0xc2bb05253846399a!2s1392%20Commerce%20Ave%2C%20Bronx%2C%20NY%2010461!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe></section>
    </div>
  )
}
export default Contact
