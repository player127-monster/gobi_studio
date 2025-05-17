import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: "home", label: "Home", type: "scroll" },
    { href: "about", label: "About", type: "scroll" },
    { href: "/services", label: "Services", type: "route" },
    { href: "/explore", label: "Explore", type: "route" },
    { href: "/new", label: "New Arrival", type: "route" },
    { href: "contact", label: "Contact Us", type: "scroll" },
  ];

  // Scroll to section even when not on home page
  const handleScrollNav = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for navigation to complete
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const renderLink = (navLink, isMobile = false) => {
    if (navLink.type === "scroll") {
      return location.pathname === "/" ? (
        <ScrollLink
          to={navLink.href}
          smooth={true}
          duration={600}
          offset={-70}
          onClick={() => isMobile && setToggleMenu(false)}
          className={`${navLink.href === "new" ? "text-green-500 hover:text-red-500" : "text-navText hover:text-white"} cursor-pointer px-8 py-1 rounded-xl text-xl font-bold lg:hover:scale-110 transition-all duration-700`}
        >
          {navLink.label}
        </ScrollLink>
      ) : (
        <span
          onClick={() => {
            handleScrollNav(navLink.href);
            isMobile && setToggleMenu(false);
          }}
          className="cursor-pointer px-8 py-1 text-navText text-xl font-bold hover:text-white transition-all duration-700"
        >
          {navLink.label}
        </span>
      );
    } else {
      return (
        <RouterLink
          to={navLink.href}
          onClick={() => isMobile && setToggleMenu(false)}
          className={`${navLink.href === "/new" ? "text-green-500 hover:text-red-500" : "text-navText hover:text-white"}text-navText hover:text-white cursor-pointer md:px-2 xl:px-8 py-1 rounded-xl text-xl font-bold lg:hover:scale-110 transition-all duration-700`}
        >
          {navLink.label}
        </RouterLink>
      );
    }
  };

  return (
    <header className="relative flex flex-col md:flex-row md:items-center text-textColor md:justify-between mt-3 bg-primary py-2 z-50">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center w-full px-5">
        <p className="text-white text-2xl">Gobi Studio</p>
        <button onClick={() => setToggleMenu(!toggleMenu)} className="text-white">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full justify-center items-center gap-10 py-3">
        {navLinks.map((navLink, index) => (
          <div key={index}>{renderLink(navLink)}</div>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden bg-primary rounded-xl px-5 transition-all duration-500 ease-in-out ${
          toggleMenu ? "max-h-[250px] py-4 mt-2" : "max-h-0"
        }`}
      >
        {navLinks.map((navLink, index) => (
          <div key={index}>{renderLink(navLink, true)}</div>
        ))}
      </div>
    </header>
  );
}
