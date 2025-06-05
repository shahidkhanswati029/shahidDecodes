import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleMenu = () => setMobileMenuOpen(prev => !prev);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between text-gray-800 dark:text-white z-[9999]">
      {/* Logo */}
      <Link to="/" className="flex items-center ">
        <img src="/1.svg" alt="Logo" className="h-16 w-auto font-[6xl" />
      </Link>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex space-x-4">
        {navLinks.map(link => (
          <Link key={link.name} to={link.path} className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md px-2 py-1">
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Search + Theme */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 bg-white dark:bg-gray-800 outline-none text-black dark:text-white"
          />
          <button className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition">Search</button>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:text-yellow-400 dark:hover:text-yellow-300"
          title="Toggle Theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-[9998] md:hidden" onClick={toggleMenu} />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 ease-in-out z-[9999] text-gray-800 dark:text-white ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500">
            &times;
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4 text-center">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} onClick={toggleMenu} className="hover:text-blue-500">
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
            className="px-3 py-2 hover:text-yellow-400 dark:hover:text-yellow-300"
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
