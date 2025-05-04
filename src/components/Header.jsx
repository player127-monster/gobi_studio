
import {useNavigate } from 'react-router-dom';

import { Link } from 'react-scroll';

export default function Header() {
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
        <header className="flex items-center text-textColor justify-between mt-3 bg-primary py-2 z-50">
           

            {/* Middle Navigation */}
            <div className="w-full flex justify-center items-center space-x-10 rounded-4xl py-3 px-6">
                {navLinks.map((navLink, index) => (
                    <div className='px-5 hover:scale-110 transition-all duration-400'>
                        <Link 
                            key={index}
                            to={navLink.href}
                            smooth={true}
                            duration={600}
                            offset={-70} // adjust for fixed header height 
                            className={`${navLink.href === "new" ? "text-green-500 hover:text-red-500" : "text-navText"} cursor-pointer px-8 py-1 rounded-xl text-navText text-xl hover:text-white hover:text-navHoverText font-bold transition-all duration-700`}
                    >
                        {navLink.label}
                    </Link>
                    </div>
                ))}
            </div>

        </header>
    );
}