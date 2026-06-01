import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Clock, Scissors, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const SERVICES = [
  { id: 'cut', name: 'Precision Haircut', price: '$35', duration: '30 mins', category: 'Haircuts' },
  { id: 'fade', name: 'Skin Fade', price: '$40', duration: '45 mins', category: 'Fades' },
  { id: 'beard', name: 'Beard Trim & Line Up', price: '$25', duration: '25 mins', category: 'Beards' },
  { id: 'combo', name: 'Haircut & Beard Combo', price: '$55', duration: '60 mins', category: 'Combos' },
  { id: 'lineup', name: 'Shape Up / Line Up', price: '$20', duration: '15 mins', category: 'Lineups' },
  { id: 'kids', name: "Kid's Haircut", price: '$25', duration: '20 mins', category: 'Kids' },
];

const STYLISTS = [
  { id: 'lee', name: 'Lee', role: 'Master Barber & Founder', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'leon', name: 'Leon', role: 'Senior Hair Stylist', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'mere', name: 'Mere', role: 'Expert Grooming Artist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'swoop', name: 'Swoop', role: 'Senior Fade & Razor Specialist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200' },
];

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:15 AM', '12:30 PM', '01:45 PM', '03:00 PM', '04:15 PM', '05:30 PM', '06:45 PM'
];

export default function AppointmentModal({ isOpen, onClose, initialServiceId }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: null,
    stylist: null,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialServiceId && isOpen) {
      const selected = SERVICES.find(s => s.id === initialServiceId);
      if (selected) {
        setFormData(prev => ({ ...prev, service: selected }));
        setStep(2);
      }
    }
  }, [initialServiceId, isOpen]);

  if (!isOpen) return null;

  const handleSelectService = (service) => {
    setFormData({ ...formData, service });
    setStep(2);
  };

  const handleSelectStylist = (stylist) => {
    setFormData({ ...formData, stylist });
    setStep(3);
  };

  const handleSelectDateTime = (date, time) => {
    setFormData({ ...formData, date, time });
    setStep(4);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(5); // Show Success State!
    }
  };

  const handleReset = () => {
    setFormData({
      service: null,
      stylist: null,
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: '',
    });
    setErrors({});
    setStep(1);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '16px',
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '650px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          borderColor: 'rgba(255, 42, 95, 0.2)',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-secondary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar className="text-gradient" size={24} />
            <h3 style={{ fontSize: '20px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
              {step === 5 ? 'Booking Confirmed' : `Book Appointment - Step ${step} of 4`}
            </h3>
          </div>
          <button
            onClick={handleReset}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              padding: '6px',
              borderRadius: '50%',
              transition: 'var(--transition-fast)',
            }}
            className="close-hover"
          >
            <X size={20} />
          </button>
        </div>

        {/* Wizard Progress Indicator */}
        {step < 5 && (
          <div style={{ display: 'flex', height: '4px', background: 'var(--bg-tertiary)' }}>
            <div
              style={{
                height: '100%',
                background: 'var(--gradient-primary)',
                width: `${(step / 4) * 100}%`,
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        )}

        {/* Modal Content Scrollable Area */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1, background: 'var(--gradient-dark)' }}>
          
          {/* STEP 1: SELECT SERVICE */}
          {step === 1 && (
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                Select a Service
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {SERVICES.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => handleSelectService(s)}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-sm)',
                      background: formData.service?.id === s.id ? 'var(--bg-accent-trans)' : 'var(--bg-tertiary)',
                      border: formData.service?.id === s.id ? '1px solid var(--accent-fuchsia)' : '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                    }}
                    className="service-selection-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(255, 42, 95, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-fuchsia)',
                        }}
                      >
                        <Scissors size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>{s.name}</div>
                        <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{s.category} • {s.duration}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-primary)' }}>{s.price}</span>
                      <ArrowRight size={16} className="text-muted-arrow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT STYLIST */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <button
                  onClick={() => setStep(1)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ArrowLeft size={18} />
                </button>
                <h4 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>
                  Select a Stylist
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {STYLISTS.map((st) => (
                  <div
                    key={st.id}
                    onClick={() => handleSelectStylist(st)}
                    style={{
                      padding: '20px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: formData.stylist?.id === st.id ? 'var(--bg-accent-trans)' : 'var(--bg-tertiary)',
                      border: formData.stylist?.id === st.id ? '1px solid var(--accent-fuchsia)' : '1px solid var(--border-light)',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                    }}
                    className="stylist-selection-card"
                  >
                    <img
                      src={st.image}
                      alt={st.name}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '12px',
                        border: formData.stylist?.id === st.id ? '2px solid var(--accent-fuchsia)' : '2px solid transparent',
                      }}
                    />
                    <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)' }}>{st.name}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>{st.role}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: DATE & TIME */}
          {step === 3 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <button
                  onClick={() => setStep(2)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ArrowLeft size={18} />
                </button>
                <h4 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>
                  Choose Date & Time
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                {/* Date Input */}
                <div>
                  <label className="form-label">Select Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{ colorScheme: 'dark' }}
                  />
                </div>

                {/* Timeslots */}
                <div>
                  <label className="form-label">Available Time Slots</label>
                  {formData.date ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                      {TIME_SLOTS.map((t) => (
                        <button
                          key={t}
                          onClick={() => handleSelectDateTime(formData.date, t)}
                          style={{
                            padding: '10px 4px',
                            borderRadius: 'var(--radius-sm)',
                            background: formData.time === t ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                            border: formData.time === t ? 'none' : '1px solid var(--border-light)',
                            color: 'var(--text-primary)',
                            fontSize: '13px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'var(--transition-fast)',
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        height: '120px',
                        border: '1px dashed var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                      }}
                    >
                      Please select a date first
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT DETAILS & FINALIZE */}
          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ArrowLeft size={18} />
                </button>
                <h4 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>
                  Confirm Booking Details
                </h4>
              </div>

              {/* Order Summary banner */}
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px',
                  marginBottom: '20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '12px',
                  fontSize: '13px',
                  textAlign: 'left',
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: '600' }}>SERVICE</div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '700', marginTop: '2px' }}>{formData.service?.name}</div>
                  <div style={{ color: 'var(--accent-fuchsia)', fontWeight: '800', marginTop: '2px' }}>{formData.service?.price}</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: '600' }}>STYLIST</div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '700', marginTop: '2px' }}>{formData.stylist?.name}</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: '600' }}>DATE & TIME</div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '700', marginTop: '2px' }}>{formData.date}</div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '700', marginTop: '2px' }}>{formData.time}</div>
                </div>
              </div>

              {/* Fields */}
              <div className="form-group">
                <label htmlFor="modal-name" className="form-label">Full Name *</label>
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g. John Doe"
                />
                {errors.name && <span style={{ color: 'var(--accent-fuchsia)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label htmlFor="modal-email" className="form-label">Email Address *</label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. john@example.com"
                  />
                  {errors.email && <span style={{ color: 'var(--accent-fuchsia)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="modal-phone" className="form-label">Phone Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. +1 555 123 4567"
                  />
                  {errors.phone && <span style={{ color: 'var(--accent-fuchsia)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-notes" className="form-label">Special Notes / Requests</label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Tell us about your hair type, preferences or specific styling details"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                <span>Confirm & Request Booking</span>
                <CheckCircle size={18} />
              </button>
            </form>
          )}

          {/* STEP 5: SUCCESS STATE */}
          {step === 5 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  marginBottom: '20px',
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <CheckCircle size={40} />
              </div>
              <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px', color: '#10B981', fontFamily: 'var(--font-heading)' }}>
                Appointment Requested!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '400px', margin: '0 auto 24px auto' }}>
                Your booking request is in our system. A confirmation SMS/Email containing your access token has been sent to you.
              </p>

              {/* Receipt */}
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px dashed rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                  maxWidth: '420px',
                  margin: '0 auto 24px auto',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontWeight: '600' }}>BOOKING ID</span>
                  <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: '800' }}>#CRB-{(Math.random()*10000).toFixed(0)}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Client Name:</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{formData.name}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Service Chosen:</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{formData.service?.name}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Stylist:</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{formData.stylist?.name}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Scheduled Time:</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{formData.date} at {formData.time}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '8px', marginTop: '4px' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: '700' }}>Est. Total:</span>
                    <span style={{ color: 'var(--accent-fuchsia)', fontWeight: '800' }}>{formData.service?.price}</span>
                  </div>
                </div>
              </div>

              <button className="btn btn-secondary" onClick={handleReset} style={{ padding: '12px 30px' }}>
                Done, Close Window
              </button>
            </div>
          )}

        </div>
      </div>

      <style>{`
        .service-selection-card:hover {
          border-color: var(--accent-fuchsia) !important;
          background: rgba(226, 43, 43, 0.03) !important;
        }
        .stylist-selection-card:hover {
          border-color: var(--accent-fuchsia) !important;
          background: rgba(226, 43, 43, 0.03) !important;
        }
        .close-hover:hover {
          background: var(--bg-tertiary) !important;
          color: var(--accent-fuchsia) !important;
        }
        .text-muted-arrow {
          color: var(--text-muted);
          transition: transform 0.2s ease;
        }
        .service-selection-card:hover .text-muted-arrow {
          color: var(--accent-fuchsia);
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
