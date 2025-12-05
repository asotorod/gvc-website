import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/fleet', label: 'Fleet' },
    { to: '/green', label: 'Green Initiative' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/events', label: 'Events' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">🚌</div>
          <div className="logo-text">
            <span className="logo-name">GVC</span>
            <span className="logo-tagline">School Bus</span>
          </div>
        </Link>
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)} end={link.to === '/'}>{link.label}</NavLink>
          ))}
        </nav>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  )
}
export default Header
