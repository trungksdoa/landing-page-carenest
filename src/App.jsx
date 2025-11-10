// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css'; // Nếu bạn có App-specific CSS, còn không thì index.css đủ

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;