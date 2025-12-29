import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VenueMap from './components/VenueMap';
import LineupSection from './components/LineupSection';
import PackageFeatures from './components/PackageFeatures';
import WhyUs from './components/WhyUs';
import Audience from './components/Audience';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white selection:bg-anhanga-yellow selection:text-anhanga-darkBlue">
      <Navbar />
      <Hero />
      <VenueMap />
      <PackageFeatures />
      <LineupSection />
      <WhyUs />
      <Audience />
      <CTASection />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default App;