import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchDialog from './SearchDialog.jsx';
import searchData from './data/searchData.js';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
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
    <>
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between text-gray-800 dark:text-white z-[9999]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/1.svg"
            alt="Logo"
            className="h-16 w-auto filter dark:invert"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md px-2 py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="button"
            value="Search"
            onClick={() => setSearchOpen(true)}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          />

          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:text-yellow-400 dark:hover:text-yellow-300"
            title="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Search Icon in Mobile */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 text-gray-800 dark:text-white hover:text-blue-500"
            title="Search"
          >
            <FiSearch size={22} />
          </button>

          {/* Hamburger */}
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
      </header>

      {/* Mobile Slide Menu from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 ease-in-out z-[9998]
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleMenu} className="text-xl focus:outline-none">×</button>
        </div>
        <nav className="flex flex-col px-4 py-2 space-y-2">
          {navLinks.map(link => (
  <Link
    key={link.name}
    to={link.path}
    onClick={toggleMenu}
    className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md px-2 py-2 mt-10"
  >
    {link.name}
  </Link>
))}


          <button
            onClick={() => {
              toggleMenu();
              setSearchOpen(true);
            }}
            className="mt-4 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Search
          </button>

          <button
            onClick={toggleTheme}
            className="mt-2 p-2 rounded hover:text-yellow-400 dark:hover:text-yellow-300"
            title="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[9997] md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Search Dialog */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} data={searchData} />
    </>
  );
};

export default Navbar;
