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
              <div className="footer-logo">
                <img src="/GVC LOGO.avif" alt="GVC School Bus" className="footer-logo-image" />
                <span className="footer-logo-text">GVC School Bus</span>
              </div>
              <p className="footer-description">Safe, reliable student transportation serving the Bronx community since 1995.</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/gaborivargascorp" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/gaborivargascorp" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
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
