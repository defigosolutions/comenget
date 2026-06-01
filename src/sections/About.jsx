import React from 'react';
import { Scissors, Flame, Users, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Flame size={20} />, title: 'Classic & Modern', desc: 'We blend classic barber traditions with the latest modern styling trends.' },
    { icon: <Scissors size={20} />, title: 'Precision Cuts', desc: 'Precision fades, customized cuts, and clean razor lineups tailored for your head shape.' },
    { icon: <Users size={20} />, title: 'Chilled Vibe', desc: 'A comfortable, highly energetic, and welcoming environment designed for all ages.' },
    { icon: <Sparkles size={20} />, title: 'Top-Tier Products', desc: 'We use professional, high-quality styling products for clean hair and beard health.' },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
      {/* Dynamic Background Circle */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          {/* Left Column: Visual Collage */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400"
                alt="Salon Interior Styling Chairs"
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}
                className="hover-card"
              />
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=400"
                alt="Hair Washing Stations"
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}
                className="hover-card"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '32px' }}>
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400"
                alt="Barber Styling Client"
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}
                className="hover-card"
              />
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=400"
                alt="Clean Clipper Detailing"
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}
                className="hover-card"
              />
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div style={{ textAlign: 'left' }}>
            <span className="section-tag">ABOUT US</span>
            <h2 className="section-title">A BLEND OF <span className="text-gradient">TRADITION & INNOVATION</span></h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '24px', lineHeight: '1.8' }}>
              Our barbershop is a blend of tradition and innovation, where classic cuts are infused with modern styling. We cater to those who appreciate attention to detail and personalized service.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '40px', lineHeight: '1.8' }}>
              Our goal is not just to help you find your style but to ensure you enjoy every moment spent with us. Experience our chilled, kid-friendly atmosphere and the unmatched grooming vibes right here in New Haven.
            </p>

            {/* highlights grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-fuchsia)',
                      flexShrink: 0,
                    }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                      {h.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
