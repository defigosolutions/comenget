import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Check shop active status in real-time
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const min = now.getMinutes();
      const timeDecimal = hour + min / 60;

      let isOpen = false;
      let nextAction = '';

      // Everyday: 9:00 AM - 5:00 PM
      if (timeDecimal >= 9 && timeDecimal < 17) {
        isOpen = true;
        nextAction = 'until 5:00 PM today';
      } else {
        isOpen = false;
        nextAction = 'tomorrow at 9:00 AM';
      }

      setIsOpenNow(isOpen);
      setStatusMessage(isOpen ? `WE ARE OPEN • Closes ${nextAction}` : `CLOSED NOW • Opens ${nextAction}`);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Reset form fields
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
      {/* Decorative radial pink glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(226, 43, 43, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="section-title">CONTACT & <span className="text-gradient">LOCATION</span></h2>
          <p className="section-desc">
            Have a question or looking for a customized makeover consulting? Reach out to our crew anytime.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
          
          {/* Left Column: Details & Real-time Indicator & Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
            
            {/* Real-time shop hour indicator */}
            <div
              className={`status-badge ${isOpenNow ? 'open' : 'closed'}`}
              style={{
                alignSelf: 'flex-start',
                padding: '10px 18px',
                fontSize: '14px',
                boxShadow: isOpenNow ? '0 0 20px rgba(16, 185, 129, 0.15)' : 'none',
              }}
            >
              <div className="status-dot" />
              <span>{statusMessage}</span>
            </div>

            {/* Address, Phone, Email details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--accent-fuchsia)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.05em' }}>ADDRESS</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '700', marginTop: '2px' }}>
                    374 Whalley Ave, New Haven, CT 06511
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--accent-fuchsia)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.05em' }}>PHONE CALL</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '700', marginTop: '2px' }}>
                    +1 (475) 287-5924
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--accent-fuchsia)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.05em' }}>ALTERNATIVE PHONE</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '700', marginTop: '2px' }}>
                    +1 (203) 694-1417
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--accent-fuchsia)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.05em' }}>EMAIL SUPPORT</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '700', marginTop: '2px' }}>
                    hello@comegetrightbarber.com
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--accent-fuchsia)', flexShrink: 0 }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.05em' }}>OPEN HOURS</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '220px' }}>
                      <span style={{ fontWeight: '700' }}>Mon - Sun:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Dark Map Placeholder */}
            <div
              className="glass-panel"
              style={{
                height: '220px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'var(--border-light)',
                backgroundImage: "radial-gradient(rgba(226, 43, 43, 0.15) 1px, transparent 0), radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)",
                backgroundSize: '24px 24px',
                backgroundPosition: '0 0, 12px 12px',
                backgroundColor: 'var(--bg-tertiary)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    boxShadow: 'var(--shadow-accent)',
                    marginBottom: '10px',
                    animation: 'float 3s ease-in-out infinite',
                  }}
                >
                  <MapPin size={26} />
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'white', fontFamily: 'var(--font-heading)' }}>COME GET RIGHT BARBER PIN</h4>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=374+Whalley+Ave,+New+Haven,+CT+06511"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '12px', color: 'var(--accent-fuchsia)', fontWeight: '700', textDecoration: 'none', marginTop: '4px', display: 'inline-block' }}
                >
                  GET DIRECTIONS ON MAPS →
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact quick inquiry form */}
          <div className="glass-panel" style={{ padding: '36px', borderColor: 'var(--border-light)', background: 'var(--gradient-card)' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10B981',
                    marginBottom: '20px',
                  }}
                >
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
                  Message Transmitted!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  Thank you for reaching out. Our support crew will review your inquiry and reply back via email within 2 hours.
                </p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)} style={{ padding: '10px 24px' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '24px', fontFamily: 'var(--font-heading)', textAlign: 'left' }}>
                  Send Quick Inquiry
                </h3>

                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. John Doe"
                  />
                  {errors.name && <span style={{ color: 'var(--accent-fuchsia)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. john@example.com"
                  />
                  {errors.email && <span style={{ color: 'var(--accent-fuchsia)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject (Optional)</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Skin fade lining query"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Write your notes or styling questions here..."
                  />
                  {errors.message && <span style={{ color: 'var(--accent-fuchsia)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  <span>TRANSMIT MESSAGE</span>
                  <Send size={16} />
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
