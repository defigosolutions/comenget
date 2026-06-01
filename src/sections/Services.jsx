import React from 'react';
import { Scissors, Palette, Sparkles, Droplet, Crown, RefreshCw, Calendar, ArrowRight } from 'lucide-react';

export default function Services({ onBookClick }) {
  const servicesList = [
    {
      id: 'cut',
      icon: <Scissors size={28} />,
      title: 'Precision Haircut',
      desc: 'Tailored classic cut suited perfectly to your head shape, completed with clean edges and classic neck detailing.',
      price: '$35',
      duration: '30 mins',
      features: ['Personalized style consultation', 'Closer wash & rinse', 'Premium pomade styling & finish']
    },
    {
      id: 'fade',
      icon: <Scissors size={28} />,
      title: 'Skin Fade',
      desc: 'Modern high-precision fade down to the skin, blended with expert detail and seamless gradients.',
      price: '$40',
      duration: '45 mins',
      features: ['Master clipper fade technique', 'Straight razor neck lineup', 'High-quality hair styling gel finish']
    },
    {
      id: 'beard',
      icon: <Sparkles size={28} />,
      title: 'Beard Trim & Line Up',
      desc: 'Expert beard grooming, shape up, and clean detailing with a premium straight razor neck lining.',
      price: '$25',
      duration: '25 mins',
      features: ['Beard length consultation', 'Hot towel razor shave lining', 'Nourishing organic beard oil treatment']
    },
    {
      id: 'combo',
      icon: <Crown size={28} />,
      title: 'Haircut & Beard Combo',
      desc: 'The ultimate signature package. A precision customized haircut combined with expert beard styling.',
      price: '$55',
      duration: '60 mins',
      features: ['Custom signature haircut', 'Beard trim & straight razor line-up', 'Dual hot towel & scalp cooling massage']
    },
    {
      id: 'lineup',
      icon: <RefreshCw size={28} />,
      title: 'Shape Up / Line Up',
      desc: 'Quick clean up of the hairline, neck, and sideburns to keep you looking sharp and fresh between main cuts.',
      price: '$20',
      duration: '15 mins',
      features: ['Precision edge lining', 'Neck hairline detailing', 'Clarifying cool mist styling spray']
    },
    {
      id: 'kids',
      icon: <Droplet size={28} />,
      title: "Kid's Haircut",
      desc: "Precision haircut for children under 12, delivered in our exceptionally friendly, welcoming, and chilled atmosphere.",
      price: '$25',
      duration: '20 mins',
      features: ['Patient & caring child experience', 'Quick & clean trimming', 'Complimentary fresh styling & candy']
    }
  ];

  return (
    <section id="services" style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-light)' }}>
      {/* Decorative Blur Bubble */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(226, 43, 43, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">SERVICES</span>
          <h2 className="section-title">OUR PRECISE <span className="text-gradient">SERVICES & GROOMING</span></h2>
          <p className="section-desc">
            Experience classic barber traditions blended with modern fade styles and top-tier grooming. Book your sharp look today.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '20px' }}>
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="glass-panel hover-card"
              style={{
                padding: '32px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                borderColor: 'var(--border-light)',
              }}
            >
              {/* Card Glow Border Top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: 'var(--gradient-primary)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                className="card-line"
              />

              <div>
                {/* Header Icon */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(226, 43, 43, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-fuchsia)',
                    marginBottom: '24px',
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>
                
                {/* Desc */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                  {service.desc}
                </p>

                {/* Bullet Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {service.features.map((feat, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-fuchsia)' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price / Action Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-light)',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    STARTING AT
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ fontSize: '24px', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                      {service.price}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      / {service.duration}
                    </span>
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => onBookClick(service.id)}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Book Service"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hover-card:hover .card-line {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
