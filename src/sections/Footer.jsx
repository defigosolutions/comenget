import React, { useState } from 'react';
import { Instagram, Youtube, Facebook, ArrowUp, Send, Check } from 'lucide-react';
import Logo from '../components/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#050507',
        borderTop: '1px solid var(--border-light)',
        padding: '80px 0 30px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Main Footer Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            textAlign: 'left',
            marginBottom: '60px',
          }}
        >
          
          {/* Column 1: Logo & Statement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Logo height="44px" />
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
              The ultimate classic-modern barbershop in New Haven, CT. Crafting precision skin fades, sharp beard trims, and razor-sharp outlines for clients of all ages.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'var(--transition-fast)' }} className="social-icon-footer">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'var(--transition-fast)' }} className="social-icon-footer">
                <Youtube size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'var(--transition-fast)' }} className="social-icon-footer">
                <Facebook size={18} />
              </a>
              {/* TikTok Icon placeholder using Lucide styling */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'var(--transition-fast)', fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: '900' }} className="social-icon-footer">
                TKTK
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
              QUICK NAVIGATION
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Home</a>
                <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">About Us</a>
                <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Services</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#gallery" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Lookbook</a>
                <a href="#packages" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Pricing</a>
                <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">Contact</a>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter Sign-up */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
              THE NEWSLETTER
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px' }}>
              Subscribe to unlock 10% off your first appointment, hairstyle trend books, and crew announcements.
            </p>

            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '14px', fontWeight: '700' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={14} />
                </div>
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 50px 14px 18px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  className="footer-newsletter-input"
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Divider & Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '13px',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Come Get Right Barbershop. All rights reserved. Precision cuts and chilled vibes.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-meta-link">Privacy Policy</a>
            <a href="#terms" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-meta-link">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-light)',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
          transition: 'var(--transition-fast)',
        }}
        className="footer-scroll-top"
        title="Scroll to Top"
      >
        <ArrowUp size={18} />
      </button>

      <style>{`
        .social-icon-footer:hover {
          background: var(--gradient-primary) !important;
          border-color: transparent !important;
          color: white !important;
          transform: translateY(-2px);
        }
        .footer-link:hover {
          color: var(--accent-fuchsia) !important;
          padding-left: 2px;
        }
        .footer-meta-link:hover {
          color: var(--text-secondary) !important;
        }
        .footer-scroll-top:hover {
          background: var(--gradient-primary) !important;
          color: white !important;
          border-color: transparent !important;
          transform: translateY(-4px);
        }
        .footer-newsletter-input:focus {
          border-color: var(--accent-fuchsia) !important;
        }
      `}</style>
    </footer>
  );
}
