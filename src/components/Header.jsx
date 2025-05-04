
import {useNavigate } from 'react-router-dom';

import { Link } from 'react-scroll';

import {Bars3Icon} from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {

    const [toggleMenu,setToggleMenu]=useState(false);

    const navLinks = [
        { href: "home", label: "Home" },
        { href: "about", label: "About" },
        { href: "services", label: "Services" },
        { href: "works", label: "Explore" },
        { href: "new", label: "New Arrival" },
        { href: "contact", label: "Contact Us" },
    ];

    const navigate =useNavigate();

    

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
      <Link
        key={index}
        to={navLink.href}
        smooth={true}
        duration={600}
        offset={-70}
        className={`${navLink.href === "new" ? "text-green-500 hover:text-red-500" : "text-navText hover:text-white"} cursor-pointer px-8 py-1 rounded-xl text-xl font-bold transition-all duration-700`}
      >
        {navLink.label}
      </Link>
    ))}
  </div>

{/* Mobile Dropdown Menu with Animation */}
<div
  className={`md:hidden overflow-hidden bg-primary rounded-xl px-5 transition-all duration-500 ease-in-out ${
    toggleMenu ? 'max-h-[250px] py-4 mt-2' : 'max-h-0'
  }`}
>
  {navLinks.map((navLink, index) => (
    <Link
      key={index}
      to={navLink.href}
      smooth={true}
      duration={600}
      offset={-70}
      onClick={() => setToggleMenu(false)}
      className={`${navLink.href === "new" ? "text-green-500 hover:text-red-500" : "text-navText"} block py-1 text-lg font-bold transition-all duration-300`}
    >
      {navLink.label}
    </Link>
  ))}
</div>

</header>

    );
}