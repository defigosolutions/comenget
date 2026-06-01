import React from 'react';
import { Check, Calendar } from 'lucide-react';

const PACKAGES = [
  {
    id: 1,
    name: 'Outline & Fade Combo',
    tagline: 'Quick Fresh Look',
    price: '$50',
    frequency: 'per session',
    popular: false,
    color: 'var(--text-primary)',
    features: [
      'Precision side fade or structural cut',
      'Straight razor neck outline & shave',
      'Warm shampoo wash & scalp rub',
      'Premium pomade finish & styling',
      'Complimentary fresh cold beverage'
    ]
  },
  {
    id: 2,
    name: 'Come Get Right Signature',
    tagline: 'The Full Royal Detailing',
    price: '$75',
    frequency: 'per session',
    popular: true,
    color: 'var(--accent-fuchsia)',
    features: [
      'Custom signature haircut & styling',
      'Full beard trim & straight razor line-up',
      'Soothing hot towel facial steam',
      'Nourishing organic beard oil treatment',
      'Refreshing neck & shoulder massage',
      'Complimentary premium craft soda'
    ]
  },
  {
    id: 3,
    name: 'Ultimate Barber Grooming',
    tagline: 'The VIP Grooming Package',
    price: '$110',
    frequency: 'per session',
    popular: false,
    color: 'var(--text-primary)',
    features: [
      'Signature haircut & customized skin fade',
      'Complete beard detailing & hot lather shave',
      'Premium charcoal peel-off face mask',
      'Deep nourishing hair spa scalp steam',
      'Take-home premium beard balm & wax set',
      'Priority express scheduling access'
    ]
  }
];

export default function PricingPackages({ onBookClick }) {
  return (
    <section id="packages" style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-light)' }}>
      {/* Dynamic Background Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(226, 43, 43, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">POPULAR BUNDLES</span>
          <h2 className="section-title">PRICING & <span className="text-gradient">PACKAGES</span></h2>
          <p className="section-desc">
            Get elite styling value with our curated hair fashion bundles. High premium treatment at simplified flat rates.
          </p>
        </div>

        {/* Packages Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
            marginTop: '20px',
          }}
        >
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-panel hover-card pricing-card ${pkg.popular ? 'popular-glow' : ''}`}
              style={{
                padding: '40px 32px',
                textAlign: 'left',
                borderRadius: 'var(--radius-lg)',
                border: pkg.popular ? '2px solid var(--accent-fuchsia)' : '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: 'var(--gradient-card)',
              }}
            >
              {/* Popular Ribbon Tag */}
              {pkg.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '24px',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-round)',
                    fontSize: '11px',
                    fontWeight: '900',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  BEST SELLER
                </div>
              )}

              <div>
                {/* Header */}
                <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--accent-violet)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {pkg.tagline}
                </h4>
                <h3 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '24px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {pkg.name}
                </h3>

                {/* Price block */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px', borderBottom: '1px solid var(--border-light)', paddingBottom: '24px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', lineHeight: '1' }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    / {pkg.frequency}
                  </span>
                </div>

                {/* Features Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: pkg.popular ? 'rgba(226, 43, 43, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: pkg.popular ? 'var(--accent-fuchsia)' : 'var(--text-secondary)',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <button
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => onBookClick()}
                style={{ width: '100%' }}
              >
                <Calendar size={18} />
                <span>BOOK THIS BUNDLE</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .popular-glow {
          box-shadow: 0 0 30px rgba(226, 43, 43, 0.15) !important;
        }
        .pricing-card:hover {
          transform: translateY(-10px) !important;
        }
      `}</style>
    </section>
  );
}
