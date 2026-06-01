import React from 'react';

export default function Logo({ className = '', height = '45px' }) {
  return (
    <div className={`${className}`} style={{ height, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      {/* Premium Stylized Barber Pole Icon */}
      <svg 
        viewBox="0 0 24 24" 
        style={{ height: '32px', width: '32px', fill: 'none', stroke: 'url(#pole-grad)', strokeWidth: 2 }}
      >
        <defs>
          <linearGradient id="pole-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-fuchsia)" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="var(--accent-violet)" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M12 3v18M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zM6 9h12M6 15h12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l4 4M10 10l4 4M10 14l4 4" />
      </svg>
      <span style={{ 
        fontFamily: 'var(--font-heading)', 
        fontSize: '22px', 
        fontWeight: '900', 
        letterSpacing: '0.02em', 
        color: 'var(--text-primary)',
        textTransform: 'uppercase'
      }}>
        Come Get <span className="text-gradient">Right</span>
      </span>
    </div>
  );
}
