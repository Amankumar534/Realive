import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: 'home', path: '/' },
    { label: 'about us', path: '/about' },
    { label: 'book appointment', path: '/appointment' },
    { label: 'services', path: '/services' },
    { label: 'careers', path: '/career' },
    { label: 'contact us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-700 to-orange-400 rounded-full flex items-center justify-center">
                <img src={Logo} alt="Logo" className="w-11 h-11 rounded-full" />
              </div>
              <Link to="/" className="font-display text-2xl font-bold text-teal-800">Realive</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link capitalize font-medium ${isActive ? 'text-teal-700 active' : 'text-gray-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="flex flex-col px-4 py-6 space-y-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)} // 👈 close menu after click
                  className={({ isActive }) =>
                    `block w-full text-lg capitalize font-medium transition-colors ${isActive
                      ? 'text-teal-700 border-b-2 border-teal-700 pb-1'
                      : 'text-gray-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}