import React from 'react';
import { Instagram, Twitter, Heart } from 'lucide-react';

const TEAM = [
  {
    id: 'lee',
    name: 'Lee',
    role: 'Master Barber & Founder',
    specialty: 'Skin Fades & Outlines',
    bio: 'Lee is highly respected for his consistent precision cuts, seamless fading skills, and punctual bookings. The go-to fade master.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500',
    instagram: '#',
    twitter: '#'
  },
  {
    id: 'leon',
    name: 'Leon',
    role: 'Senior Hair Stylist',
    specialty: 'Classic Scissor Cuts',
    bio: 'Leon specializes in combining classic scissor styling techniques with contemporary hair lines for standard to complex cuts.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=500',
    instagram: '#',
    twitter: '#'
  },
  {
    id: 'mere',
    name: 'Mere',
    role: 'Expert Grooming Artist',
    specialty: 'Kid-Friendly Precision',
    bio: 'Mere is famous for his gentle, patient styling approach, making him the absolute favorite for kid-friendly sessions and sharp styling.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500',
    instagram: '#',
    twitter: '#'
  },
  {
    id: 'swoop',
    name: 'Swoop',
    role: 'Senior Fade & Razor Specialist',
    specialty: 'Beard & Razor Detailing',
    bio: 'Swoop (praised as "Swoopy" in reviews) delivers razor-sharp lining details and incredibly chilled, high-energy vibes.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500',
    instagram: '#',
    twitter: '#'
  }
];

export default function StylistTeam() {
  return (
    <section id="team" style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-light)' }}>
      {/* Background Decorative Element */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(26, 84, 225, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">OUR BARBERS</span>
          <h2 className="section-title">OUR EXPERT <span className="text-gradient">BARBERS</span></h2>
          <p className="section-desc">
            Meet our talented New Haven squad dedicated to delivering premium precision cuts, custom lining, and unmatched vibes.
          </p>
        </div>

        {/* Team Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', marginTop: '20px' }}>
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="glass-panel hover-card stylist-card"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                borderColor: 'var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
              }}
            >
              {/* Image Frame */}
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  className="stylist-img"
                />
                
                {/* Floating Social Icons Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    zIndex: 3,
                  }}
                >
                  <a
                    href={member.instagram}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(5px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-light)',
                      transition: 'var(--transition-fast)',
                    }}
                    className="social-hover"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href={member.twitter}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(5px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-light)',
                      transition: 'var(--transition-fast)',
                    }}
                    className="social-hover"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>

              {/* Text Info */}
              <div style={{ padding: '24px', textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Specialty Badge */}
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: '800',
                      color: 'var(--accent-fuchsia)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '8px',
                    }}
                  >
                    {member.specialty}
                  </span>

                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                    {member.name}
                  </h3>
                  
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '14px' }}>
                    {member.role}
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                    {member.bio}
                  </p>
                </div>

                {/* Rating / Endorse */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-light)',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    fontWeight: '700',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Heart size={14} fill="var(--accent-fuchsia)" stroke="none" />
                    <span>99% Client Joy</span>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>@comegetright_barber</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stylist-card:hover .stylist-img {
          transform: scale(1.05);
        }
        .social-hover:hover {
          background: var(--gradient-primary) !important;
          border-color: transparent !important;
          color: white !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
