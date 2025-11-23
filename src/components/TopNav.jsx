import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faFlask, faInfo, faPhone, faProjectDiagram, faHome } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: "#introduction", label: "Home", icon: faHome },
    { href: "#about", label: "About", icon: faInfo },
    { href: "#experience", label: "Experience", icon: faBuilding },
    { href: "#projects", label: "Projects", icon: faProjectDiagram },
    { href: "#articles", label: "Articles", icon: faFlask },
    { href: "#education", label: "Education", icon: faBook },
    { href: "#contact", label: "Contact", icon: faPhone },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center">
          <div className="hidden md:block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
            VS
          </div>
          <div className="flex space-x-1 md:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center group"
              >
                <FontAwesomeIcon icon={link.icon} className={`h-4 w-4 ${link.label !== 'Home' ? 'md:mr-2' : ''} group-hover:text-emerald-400 transition-colors`} />
                <span className={`${link.label === 'Home' ? 'hidden' : 'hidden md:inline'}`}>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;