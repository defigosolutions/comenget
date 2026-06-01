import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AppointmentModal from './components/AppointmentModal';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import StylistTeam from './sections/StylistTeam';
import Reviews from './sections/Reviews';
import PricingPackages from './sections/PricingPackages';
import BookCTA from './sections/BookCTA';
import InstagramFeed from './sections/InstagramFeed';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);

  const handleOpenBooking = (serviceId = null) => {
    // If a serviceId was provided, we can look up the details or pass it directly
    setPreselectedService(serviceId);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setPreselectedService(null);
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <Navbar onBookClick={() => handleOpenBooking()} />

      {/* Main Page Layout Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onBookClick={() => handleOpenBooking()} />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services onBookClick={(id) => handleOpenBooking(id)} />

        {/* 4. Trending Hairstyles Gallery */}
        <Gallery />

        {/* 5. Stylist Team */}
        <StylistTeam />

        {/* 6. Customer Reviews */}
        <Reviews />

        {/* 7. Pricing Packages */}
        <PricingPackages onBookClick={() => handleOpenBooking()} />

        {/* 8. Book Appointment CTA Banner */}
        <BookCTA onBookClick={() => handleOpenBooking()} />

        {/* 9. Instagram Feed Grid */}
        <InstagramFeed />

        {/* 10. Contact Details & Inquiry Form */}
        <Contact />
      </main>

      {/* 11. Footer Section */}
      <Footer />

      {/* Full Screen Interactive Booking Wizard Modal */}
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseBooking} 
        initialServiceId={preselectedService} 
      />
    </>
  );
}
