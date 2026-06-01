import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Darrell M.',
    role: 'New Haven Local',
    rating: 5,
    date: '2 days ago',
    service: 'Precision Skin Fade',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    text: 'Precision cuts and the absolute best vibes in New Haven! Swoop is incredible with fades, razor lineups and is extremely reliable. The shop vibe is super chilled!'
  },
  {
    id: 2,
    name: 'Justin T.',
    role: 'Yale Student',
    rating: 5,
    date: '1 week ago',
    service: 'Classic Cut & Wash',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    text: 'Lee has been my barber for years. Always punctual, professional, and consistent every single time. The shop has excellent hip-hop tunes and highly energetic conversation.'
  },
  {
    id: 3,
    name: 'Sarah K.',
    role: 'Family Client',
    rating: 5,
    date: '2 weeks ago',
    service: "Kid's Haircut",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    text: "Perfect place for my son! Mere and the barbers here have a chilled, kid-friendly atmosphere and do an amazing job with kids' cuts. Absolutely patient and super welcoming."
  },
  {
    id: 4,
    name: 'Marcus L.',
    role: 'Visual Artist',
    rating: 5,
    date: '3 weeks ago',
    service: 'Beard Trim & Razor Lining',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    text: 'Absolutely the best beard lining and outline work I have ever gotten. Punctual scheduling, high-quality blade work, nourishing organic oils, and warm hot towel steam. Five stars!'
  }
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section id="reviews" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
      {/* Decorative radial purple glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(26, 84, 225, 0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">CLIENTS <span className="text-gradient">SPEAK</span></h2>
          <p className="section-desc">
            Check out what our amazing community has to say about their fresh transformations.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            position: 'relative',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Frame */}
          <div
            className="glass-panel"
            style={{
              padding: '48px 40px',
              borderRadius: 'var(--radius-lg)',
              borderColor: 'rgba(226, 43, 43, 0.15)',
              position: 'relative',
              boxShadow: 'var(--shadow-md)',
              background: 'var(--gradient-card)',
              overflow: 'hidden',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Quote watermark icon */}
            <Quote
              size={120}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '20px',
                opacity: 0.03,
                color: 'var(--text-primary)',
                pointerEvents: 'none',
              }}
            />

            {/* active review content wrapper */}
            <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', textAlign: 'left' }}>
                {/* Avatar */}
                <img
                  src={REVIEWS[activeIndex].avatar}
                  alt={REVIEWS[activeIndex].name}
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--accent-fuchsia)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                />

                {/* Info block */}
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                    {REVIEWS[activeIndex].name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    <span>{REVIEWS[activeIndex].role}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--accent-fuchsia)', fontWeight: '700' }}>{REVIEWS[activeIndex].service}</span>
                  </div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-amber)', marginTop: '8px' }}>
                    {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--accent-amber)" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>

              {/* review text */}
              <p
                style={{
                  fontSize: '18px',
                  color: 'var(--text-primary)',
                  lineHeight: '1.7',
                  fontWeight: '500',
                  textAlign: 'left',
                  fontStyle: 'italic',
                }}
              >
                "{REVIEWS[activeIndex].text}"
              </p>

              {/* Footer Meta */}
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>Verified Studio Client</span>
                <span>{REVIEWS[activeIndex].date}</span>
              </div>

            </div>

          </div>

          {/* Nav Buttons (Left/Right Chevrons) */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-24px',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
              zIndex: 3,
              transition: 'var(--transition-fast)',
            }}
            className="slider-btn"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-24px',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
              zIndex: 3,
              transition: 'var(--transition-fast)',
            }}
            className="slider-btn"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: activeIndex === index ? 'var(--accent-fuchsia)' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .slider-btn:hover {
          background: var(--gradient-primary) !important;
          border-color: transparent !important;
          transform: translateY(-50%) scale(1.08) !important;
        }
        @media (max-width: 900px) {
          .slider-btn {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
