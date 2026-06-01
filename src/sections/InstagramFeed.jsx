import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const INSTA_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=400',
    likes: '450',
    comments: '24',
    caption: 'Clean fades and razor precision. Mid-skin crop for the weekend! Cut by @lee #skinfade'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599351431247-f5094087930b?auto=format&fit=crop&q=80&w=400',
    likes: '912',
    comments: '46',
    caption: 'Beard conditioning session. Keeping outlines strictly on point. Beard oil magic by @swoop #beardgrooming'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400',
    likes: '680',
    comments: '31',
    caption: 'Relaxed classic vibe. Clean combs, sharp details, absolute client comfort. Styled by @leon #barberpole'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=400',
    likes: '1.2k',
    comments: '88',
    caption: 'Razor lining in real-time. Unbelievable precision and clean blade action. Detailing by @swoop #barberlines'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400',
    likes: '512',
    comments: '18',
    caption: 'A chilled and highly welcoming family atmosphere. Bring the kids down to get right. #newhavenbarber'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1605497746445-97d1b0a9eaf4?auto=format&fit=crop&q=80&w=400',
    likes: '822',
    comments: '39',
    caption: 'Sharp buzz cut and lineup combo to keep it clean and minimal. Trimmed by @lee #buzzcut'
  }
];

export default function InstagramFeed() {
  return (
    <section id="instagram" style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">SOCIAL CONNECTION</span>
          <h2 className="section-title">JOIN OUR <span className="text-gradient">COMMUNITY</span></h2>
          <p className="section-desc">
            Get your daily dose of hair styling inspiration, exclusive product discounts, and client highlights on our grid.
          </p>
        </div>

        {/* Grid Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginTop: '20px',
          }}
        >
          {INSTA_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '1 / 1',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
              }}
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt="Instagram Salon Post"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                className="insta-img"
              />

              {/* Instagram Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(10, 10, 12, 0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  textAlign: 'center',
                }}
                className="insta-overlay"
              >
                <Instagram size={28} className="text-gradient" style={{ marginBottom: '14px' }} />
                
                {/* Stats */}
                <div style={{ display: 'flex', gap: '20px', color: 'white', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Heart size={16} fill="white" />
                    <span>{post.likes}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MessageCircle size={16} fill="white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Caption Snippet */}
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4', maxLines: 2, overflow: 'hidden' }}>
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer social action */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '14px 32px' }}
          >
            <Instagram size={18} className="text-gradient" />
            <span>FOLLOW @COMEGETRIGHTBARBER</span>
          </a>
        </div>
      </div>

      <style>{`
        .insta-card:hover .insta-img {
          transform: scale(1.06);
        }
        .insta-card:hover .insta-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
