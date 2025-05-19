// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md text-blue-900 shadow-lg py-2'
          : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span
                className={`text-xl font-bold ${scrolled ? 'text-blue-600' : 'text-blue-600'}`}
              >
                {process.env.NEXT_PUBLIC_WEB_NAME?.charAt(0) || 'S'}
              </span>
            </div>
            <h1 className="text-xl font-bold hidden sm:block transition-colors">
              {process.env.NEXT_PUBLIC_WEB_NAME || 'Site Name'}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={path}
                  className={`relative py-2 transition-all duration-300 ${
                    isActive(path)
                      ? scrolled
                        ? 'text-blue-600 font-medium'
                        : 'text-white font-medium'
                      : scrolled
                        ? 'text-blue-900 hover:text-blue-600'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                  {isActive(path) && (
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'} rounded-full`}
                    ></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-blue-900' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-blue-900' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-blue-900' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {['Home', 'About', 'Contact'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={path}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  isActive(path)
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-blue-900 hover:bg-blue-50'
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
