import { Link } from "react-router-dom";
import { logo1 } from "../assets";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="Footer" className="bg-black-200 lg:px-14 p-4 mx-auto mt-5 lg:mt-5 py-4 text-white">
      <div className="my-6 flex flex-col lg:flex-row gap-10">
       
        <div className="lg:w-7/12 space-y-6">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer text-2xl font-semibold flex items-center ml-4"
          >
            <img
              src={logo1}
              alt="logo"
              className="w-10 inline-block overflow-hidden text-ellipsis items-center"
            />
            <span>Global Omni Digital</span>
          </Link>
          <p className="ml-6 text-white">
          <a
            href="https://www.google.com/maps?q=PT GPAM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Jl. Pararaton Raya No.9 <br />
            Kuta, Bali 80361
          </a>
          </p>

        </div>

      
        <div className="lg:w-5/12 flex flex-col lg:flex-row flex-wrap justify-between gap-9 items-start mt-5 lg:mt-0">
          <div className="space-y-6 mr-[100px] ">
            <h4 className="kontak text-xl font-semibold">Contacts</h4>
            <ul className="kontak1 space-y-4">
               <a href="https://info@globalomnidigital.com" className="block text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2 h-5 w-5 text-white">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                info@globalomnidigital.com
              </a>
              <a href="https://wa.me/6281147606060" className="block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2 h-5 w-5 text-white">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd "
                  />
                </svg>
                +62 811 4760 6060
              </a>
            </ul>
          </div>
         
          <ul className="ml-[20px] flex space-x-4 flex-wrap justify-center mt-10 lg:mt-0 items-center mx-auto ">
        
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  
                </li>
           
            ))}
          </ul> 

        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
       
        <div className="flex items-center space-x-5 justify-center sm:justify-start">
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center" href="https://www.facebook.com/share/NY9eBTzZyXdW7EKA/?mibextid=qi2Omg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center text-3xl md:text-xl" href="https://www.tiktok.com/@global.omni.digital" target="_blank">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center" href="https://www.instagram.com/globalomnidigital">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center" href="https://www.linkedin.com/company/pt-gpam/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a className="hover:-translate-y-1 transition-all duration-300 flex items-center" href="https://wa.me/+6281147606060">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-8 w-8 md:h-5 md:w-5" fill="currentColor"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.822.734 5.593 2.129 8.044L0 32l8.154-2.106A15.92 15.92 0 0 0 16 32c8.837 0 16-7.164 16-16S24.837 0 16 0zm0 29.31a13.23 13.23 0 0 1-6.767-1.832l-.484-.29-4.848 1.252 1.29-4.731-.315-.486A13.158 13.158 0 0 1 2.703 16c0-7.317 5.982-13.3 13.297-13.3 7.315 0 13.297 5.982 13.297 13.3 0 7.315-5.983 13.297-13.297 13.297zM23.6 18.638c-.337-.168-2.007-.992-2.32-1.107-.315-.113-.545-.168-.773.169-.227.337-.89 1.107-1.09 1.337-.2.227-.405.253-.743.084-.337-.169-1.422-.524-2.707-1.672-1-1-1.674-2.24-1.871-2.577-.196-.337-.021-.518.149-.686.152-.15.337-.39.506-.586.169-.196.226-.338.339-.563.113-.227.056-.422-.028-.586-.084-.168-.743-1.793-1.018-2.457-.27-.649-.546-.563-.773-.572h-.65c-.2 0-.52.084-.793.39-.275.337-1.043 1.02-1.043 2.487 0 1.467 1.067 2.888 1.213 3.086.15.196 2.094 3.18 5.072 4.459.709.3 1.26.477 1.693.61.712.227 1.36.196 1.871.118.572-.084 2.007-.822 2.29-1.62.282-.794.282-1.476.197-1.62-.084-.141-.304-.226-.64-.39z" />
      </svg>
          </a>
        </div>
        <div className="text-center sm:text-left text-white">
          <p>©2024 Global Omni Digital</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
