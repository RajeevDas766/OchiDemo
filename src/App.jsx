import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });
    setLocomotiveScroll(scroll);

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Update scroll on resize
    window.addEventListener('resize', () => {
      scroll.update();
    });

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div 
      className='w-full min-h-screen text-white bg-zinc-900 overflow-x-hidden'
      data-scroll-container
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar isMobile={isMobile} />
        <main>
          <LandingPage />
          <Marquee />
          <About />
          <Eyes />
          <Featured />
          <Cards />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;