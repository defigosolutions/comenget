import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trending Styles', href: '#gallery' },
    { name: 'Our Team', href: '#team' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          padding: isScrolled ? '12px 0' : '20px 0',
          background: isScrolled ? 'rgba(10, 10, 12, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Logo height="42px" />
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'none', alignItems: 'center', gap: '30px' }} className="desktop-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease',
                }}
                className="nav-link"
                onClick={(e) => {
                  // Standard smooth scrolling is handled by CSS, but nice to close drawer (if open)
                  setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: 'none', alignItems: 'center', gap: '15px' }} className="desktop-menu">
            <button 
              className="btn btn-primary" 
              onClick={onBookClick}
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              zIndex: 1001,
            }}
            className="hamburger-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(10, 10, 12, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '22px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              transition: 'color 0.2s ease',
            }}
            className="mobile-nav-link"
          >
            {link.name}
          </a>
        ))}
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsOpen(false);
            onBookClick();
          }}
          style={{ marginTop: '20px', padding: '14px 32px' }}
        >
          <Calendar size={18} />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Add Custom styles for Media Queries in page */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-menu {
            display: flex !important;
          }
          .hamburger-btn {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--accent-fuchsia) !important;
        }
        .mobile-nav-link:hover {
          color: var(--accent-fuchsia) !important;
        }
      `}</style>
    </>
  );
}
