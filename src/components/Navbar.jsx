import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = ({ onInquiryClick, scrollToSection }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const isAboutPage = location.pathname === "/about";


  const filteredNavLinks = isAboutPage
    ? navLinks.filter((nav) => nav.title !== "Works" && nav.title !== "Our Partners")
    : navLinks;

  const handleLinkClick = (nav) => {
    setActive(nav.title);
    setToggle(false); 
    if (nav.id === "About") {
      if (isAboutPage) {
        
        window.location.reload();
      } else {
        
        navigate("/about");
      }
    } else if (nav.id === "Home") {
      navigate("/"); 
    } else {
      scrollToSection(nav.id); 
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-black text-[18px] font-bold cursor-pointer">
            Global Omni Digital
          </p>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
      
          {isAboutPage && (
            <li
              className={`${
                active === "Home" ? "text-black" : "text-gray-700"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
            >
              <Link to="/" onClick={() => handleLinkClick({ id: "Home", title: "Home" })}>
                Home
              </Link>
            </li>
          )}

         
          {filteredNavLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-black" : "text-gray-700"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
            >
              <Link
                to={nav.id === "About" ? "/about" : "#"}
                onClick={() => handleLinkClick(nav)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            style={{ filter: "invert(100%)" }} 
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl shadow-lg z-50`}
          >
            <ul className="list-none flex flex-col gap-4">
              {/* Always show Home in the About page */}
              {isAboutPage && (
                <li className="text-gray-700 font-medium text-[16px]">
                  <Link
                    to="/"
                    onClick={() => handleLinkClick({ id: "Home", title: "Home" })}
                    className="cursor-pointer hover:text-black"
                  >
                    Home
                  </Link>
                </li>
              )}

              {/* Render filtered nav links */}
              {filteredNavLinks.map((nav) => (
                <li key={nav.id} className="text-gray-700 font-medium text-[16px]">
                  <Link
                    to={nav.id === "About" ? "/about" : "#"}
                    onClick={() => handleLinkClick(nav)}
                    className="cursor-pointer hover:text-black"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
