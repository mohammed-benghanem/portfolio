import React, { useState } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Resume from './Components/Resume';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import useLocalStorage from 'use-local-storage'
import Timeline from './Components/Timeline';



const App = () => {
  const [isDark, setIsDark] = useLocalStorage(false);

  return (
    <div className='app' data-theme={isDark ? 'dark' : 'light'}>
      {/* Pass both isDark and setIsDark */}
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero />
     <About/>
     <Timeline/>
     <Portfolio/>
     <ContactMe/>
     <Footer/>
    </div>
  );
};

export default App;
