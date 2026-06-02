import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function Logo({ className = '', height = '45px' }) {
  return (
    <div className={`${className}`} style={{ height, display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
      {/* Monogram image cropped from the shared JPEG logo, with filters to blend into dark background */}
      <div style={{ 
        height: '100%', 
        aspectRatio: '1', 
        overflow: 'hidden', 
        position: 'relative',
        filter: 'invert(1)',
        mixBlendMode: 'screen',
        flexShrink: 0
      }}>
        <img 
          src={logoImg} 
          alt="CGR Monogram" 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            display: 'block',
            transform: 'scale(1.4)', // Zooms in on the CGR monogram symbol
            transformOrigin: 'top center',
            marginTop: '-5%' // Centers the monogram vertically within the cropped frame
          }} 
        />
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: '18px', 
          fontWeight: '900', 
          letterSpacing: '0.06em', 
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          lineHeight: '1.1'
        }}>
          COME GET RIGHT
        </span>
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: '8.5px', 
          fontWeight: '700', 
          letterSpacing: '0.36em', 
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          lineHeight: '1',
          marginTop: '3px',
          opacity: 0.85,
          whiteSpace: 'nowrap'
        }}>
          — BARBERSHOP —
        </span>
      </div>
    </div>
  );
}



