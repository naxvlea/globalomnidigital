import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Footer,
  Partners,
  Director,
  Whatsapp,
} from "./components";
import Inquiry from "./components/Inquiry";

const App = () => {
  
  const [showInquiry, setShowInquiry] = useState(true); 

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        {/* Navbar */}
      
        <Navbar scrollToSection={scrollToSection} />
        
        <Routes>
          {/* Route Halaman About */}
          <Route path="/about" element={<About />} />

          {/* Route Halaman Home */}
          <Route
            path="/"
            element={
              <div>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>
                <Experience />
                <Works />
                <Partners />
                <Director />
                <Feedbacks />
                <div className="relative z-0">
                  <StarsCanvas />
                </div>
                <Footer />
              </div>
            }
          />
        </Routes>

       
         {showInquiry && <Inquiry />}

   
        <Whatsapp />
      </div>
    </BrowserRouter>
  );
};

export default App;
