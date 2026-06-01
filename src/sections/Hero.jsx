import React from 'react';
import { Calendar, Scissors, Award, Compass } from 'lucide-react';

export default function Hero({ onBookClick }) {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 0 100px 0',
        background: 'linear-gradient(to bottom, rgba(10, 10, 12, 0.4) 0%, rgba(10, 10, 12, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image Container */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1605497746445-97d1b0a9eaf4?auto=format&fit=crop&q=80&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          opacity: 0.28,
          zIndex: -1,
          filter: 'grayscale(30%) contrast(110%)',
        }}
      />

      {/* Decorative Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(226, 43, 43, 0.15) 0%, rgba(26, 84, 225, 0.05) 50%, transparent 100%)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Hero Text Content */}
          <div style={{ textAlign: 'left' }} className="animate-fade-in">
            <span className="section-tag glow-active" style={{ padding: '4px 12px', background: 'rgba(226, 43, 43, 0.15)', borderRadius: 'var(--radius-round)' }}>
              ★ THE ULTIMATE SHARP LOOK
            </span>
            <h1 style={{ fontSize: '64px', fontWeight: '900', lineHeight: '1.05', letterSpacing: '-0.04em', margin: '20px 0' }}>
              FIND YOUR <br />
              <span className="text-gradient">EDGE</span>
            </h1>
            <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', fontWeight: '400' }}>
              Blend tradition with trend at Come Get Right Barbershop. Where classic cuts meet modern styling, precision skin fades, and expert beard detailing. Find your edge and express your unique style.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button className="btn btn-primary" onClick={onBookClick} style={{ padding: '16px 36px' }}>
                <Calendar size={20} />
                <span>BOOK APPOINTMENT</span>
              </button>
              <a href="#services" className="btn btn-secondary" style={{ padding: '16px 36px' }}>
                <span>EXPLORE SERVICES</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div style={{ display: 'flex', gap: '30px', marginTop: '48px', flexWrap: 'wrap' }} className="hero-trust">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Scissors size={24} className="text-gradient" />
                <div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>12K+</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>FRESH CUTS</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={24} className="text-gradient" />
                <div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>4.9★</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>GOOGLE & YELP RATED</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Compass size={24} className="text-gradient" />
                <div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>100%</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>SHARP DETAIL</div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Visual Card Panel */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="animate-float">
            <div
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '420px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                borderColor: 'rgba(226, 43, 43, 0.2)',
                position: 'relative',
              }}
            >
              <div style={{ padding: '16px 20px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', display: 'flex', justifycontent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>@COMEGETRIGHTBARBER</div>
              </div>
              
              <div style={{ position: 'relative', height: '340px' }}>
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600"
                  alt="Trendy Hairstyle Studio"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '24px',
                    background: 'linear-gradient(to top, rgba(10, 10, 12, 0.95) 0%, transparent 100%)',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--accent-fuchsia)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cut of the Week</div>
                  <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>Mid Skin Fade with Crop</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>Styled by Master Barber Lee</p>
                </div>
              </div>
            </div>
            
            {/* Absolute floating banner */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-md)',
                borderColor: 'var(--accent-violet)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#10B981',
                  animation: 'pulse-glow 1.5s infinite',
                }}
              />
              <span style={{ fontSize: '13px', fontWeight: '700', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
                OPEN NOW FOR BOOKINGS
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 40px !important;
          }
          .hero-trust {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
