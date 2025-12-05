import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo"><span className="footer-logo-icon">🚌</span><span className="footer-logo-text">GVC School Bus</span></div>
              <p className="footer-description">Safe, reliable student transportation serving the Bronx community since 1995.</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/Gvc.lt" target="_blank" rel="noopener noreferrer" className="social-link">FB</a>
                <a href="https://www.instagram.com/gvc.bronxbus/" target="_blank" rel="noopener noreferrer" className="social-link">IG</a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <nav className="footer-nav"><Link to="/about">About Us</Link><Link to="/services">Our Services</Link><Link to="/fleet">Our Fleet</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link></nav>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <nav className="footer-nav"><Link to="/services">School Routes</Link><Link to="/services">Charter Services</Link><Link to="/services">Field Trips</Link><Link to="/services">Special Needs</Link></nav>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact Us</h4>
              <div className="footer-contact"><p>📍 1392 Commerce Ave<br/>Bronx, NY 10461</p><p>📞 <a href="tel:+17188637934">(718) 863-7934</a></p><p>✉️ <a href="mailto:info@gvcbus.com">info@gvcbus.com</a></p><p>🕐 Mon-Fri: 6AM - 6PM</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><div className="container"><p>© {currentYear} GVC LTD. All rights reserved.</p><p className="powered-by">Powered by <a href="https://www.svtav.com" target="_blank" rel="noopener noreferrer">SVT</a></p></div></div>
    </footer>
  )
}
export default Footer
