import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/Splashscreen';


function App() {
   const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <div className={`app ${showSplash ? '' : 'show-content'}`}>
      {showSplash && <SplashScreen />}
      <div className="content">
       
        <div>
          <div className="relative z-0">
              <div>
                <NavBar />
                <Banner />
                <About />
                <Tech />
                <Projects />
                <div
                  className="bg-experience bg-cover bg-center bg-no-repeat 
                    rounded-tl-[150px] rounded-br-[150px]">
                  <div
                    className="bg-experienceLight bg-cover bg-center 
                    bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                    <Experience />
                  </div>
                </div>
                <Contact />
                <Footer />
              
              </div>
            </div>
        </div>
      </div>
    </div>
  
  
  );
}

export default App;
