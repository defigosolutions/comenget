import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

export default function BookCTA({ onBookClick }) {
  return (
    <section
      style={{
        padding: '120px 0',
        position: 'relative',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-light)',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background Mesh Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.08,
          backgroundImage: `
            radial-gradient(var(--accent-fuchsia) 1px, transparent 1px),
            radial-gradient(var(--accent-violet) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          zIndex: 1,
        }}
      />

      {/* Extreme Color Glow Spheres */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(226, 43, 43, 0.12) 0%, rgba(26, 84, 225, 0.08) 50%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="glass-panel"
          style={{
            padding: '80px 40px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(226, 43, 43, 0.25)',
            boxShadow: 'var(--shadow-lg)',
            background: 'linear-gradient(135deg, rgba(17, 17, 21, 0.9) 0%, rgba(10, 10, 12, 0.95) 100%)',
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Animated sparkles badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-round)',
              background: 'rgba(226, 43, 43, 0.12)',
              border: '1px solid rgba(226, 43, 43, 0.25)',
              color: 'var(--accent-fuchsia)',
              fontSize: '12px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
            className="glow-active"
          >
            <Sparkles size={14} />
            <span>Weekend slots are filling fast!</span>
          </div>

          <h2
            style={{
              fontSize: '52px',
              fontWeight: '900',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            READY TO GET <br />
            YOUR <span className="text-gradient">EDGE BACK?</span>
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '550px',
              margin: '0 auto 40px auto',
              lineHeight: '1.6',
            }}
          >
            Book your slot in seconds with our online scheduling tool. Pick your service, select your barber, and find the perfect time.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={onBookClick}
              style={{ padding: '18px 48px', fontSize: '18px', boxShadow: '0 0 40px rgba(226, 43, 43, 0.4)' }}
            >
              <Calendar size={22} />
              <span>BOOK APPOINTMENT NOW</span>
            </button>
          </div>

          {/* Quick FAQ note */}
          <div style={{ marginTop: '30px', fontSize: '13px', color: 'var(--text-muted)' }}>
            ★ Free rescheduling up to 24 hours prior to appointment. No prepayment required.
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
