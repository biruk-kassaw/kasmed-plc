/* eslint-disable @typescript-eslint/no-require-imports */
'use client'
import Hero from "../ui/hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import About from './about';
import Stats from './stats';
import Services from './services';
import Departments from './departments';
// import Testimonials from './testimonials';
// import Gallery from './gallery';
import Contact from './contact';
import PartnersCarousel from './partners';

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      require("bootstrap/dist/css/bootstrap.min.css");
      require("../public/static/css/main.css");
      require('../public/static/css/vendor/bootstrap-icons/bootstrap-icons.css');
      require('../public/static/css/vendor/fontawesome-free/css/all.min.css');
      require('../public/static/css/vendor/glightbox/css/glightbox.min.css');
      require('../public/static/css/vendor/swiper/swiper-bundle.min.css');
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
      AOS.refresh();
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);

    }, []);
    
    return (
      <>
          <main className="main">
              <Hero/>
              <PartnersCarousel/>
              <About/>
              <Stats/>
              <Services/>
              <Departments/>
              {/* <Testimonials/> */}
              {/* <Gallery/> */}
              <Contact/>
          </main>
              
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        {
          loading && <div id="preloader"></div>
        }
      </>
    );
  }
  