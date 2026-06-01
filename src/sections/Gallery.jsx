import React, { useState } from 'react';
import { Camera, Heart, Eye } from 'lucide-react';

const FILTER_TABS = ['All', 'Fades', 'Beards', 'Classic', 'Lineup'];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Mid Skin Fade with Crop',
    stylist: 'Lee',
    category: ['Fades', 'Classic'],
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600',
    likes: '1.2k',
    tag: '#SKINFADE'
  },
  {
    id: 2,
    title: 'Classic Scissor Cut',
    stylist: 'Leon',
    category: ['Classic'],
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600',
    likes: '840',
    tag: '#CLASSICCUT'
  },
  {
    id: 3,
    title: 'Razor Beard Detailing',
    stylist: 'Swoop',
    category: ['Beards', 'Lineup'],
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600',
    likes: '2.4k',
    tag: '#BEARDSHAPE'
  },
  {
    id: 4,
    title: 'Textured Pompadour',
    stylist: 'Mere',
    category: ['Classic'],
    image: 'https://images.unsplash.com/photo-1593702295094-aec22597af05?auto=format&fit=crop&q=80&w=600',
    likes: '915',
    tag: '#POMPADOUR'
  },
  {
    id: 5,
    title: 'Beard Grooming & Oil',
    stylist: 'Swoop',
    category: ['Beards'],
    image: 'https://images.unsplash.com/photo-1599351431247-f5094087930b?auto=format&fit=crop&q=80&w=600',
    likes: '1.7k',
    tag: '#BEARDS'
  },
  {
    id: 6,
    title: 'Buzz Cut with Razor Lineup',
    stylist: 'Lee',
    category: ['Fades', 'Lineup'],
    image: 'https://images.unsplash.com/photo-1605497746445-97d1b0a9eaf4?auto=format&fit=crop&q=80&w=600',
    likes: '1.1k',
    tag: '#BUZZCUT'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.includes(activeFilter));

  return (
    <section id="gallery" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">THE LOOKBOOK</span>
          <h2 className="section-title">THE LOOKBOOK: <span className="text-gradient">OUR WORK</span></h2>
          <p className="section-desc">
            Check out our collection of clean skin fades, sharp beard linings, and master scissor styling from our New Haven shop.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-round)',
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'var(--transition-normal)',
                background: activeFilter === tab ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                border: activeFilter === tab ? 'none' : '1px solid var(--border-light)',
                color: 'var(--text-primary)',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            minHeight: '400px',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item-card"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-tertiary)',
                cursor: 'pointer',
                animation: 'fadeIn 0.5s ease',
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="gallery-img"
              />

              {/* Hover Backdrop Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(10, 10, 12, 0.95) 0%, rgba(26, 84, 225, 0.4) 70%, rgba(226, 43, 43, 0.1) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  textAlign: 'left',
                }}
                className="gallery-overlay"
              >
                {/* Overlay Icons */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', color: 'white', display: 'flex' }}>
                    <Heart size={16} fill="white" />
                  </div>
                  <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', color: 'white', display: 'flex' }}>
                    <Eye size={16} />
                  </div>
                </div>

                {/* Details */}
                <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--accent-fuchsia)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px', fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Created by {item.stylist}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}
                >
                  <Heart size={14} fill="var(--accent-fuchsia)" stroke="none" />
                  <span>{item.likes} Likes on Socials</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-item-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
