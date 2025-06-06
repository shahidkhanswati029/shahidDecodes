import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchDialog from './SearchDialog.jsx';
import searchData from './data/searchData.js';

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
        <Link to="/" className="flex items-center ">
          <img src="/1.svg" alt="Logo" className="h-16 w-auto font-[6xl" />
        </Link>

        <nav className="hidden md:flex space-x-4">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md px-2 py-1">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Search
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:text-yellow-400 dark:hover:text-yellow-300"
            title="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

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
      </header>

     <SearchDialog
  isOpen={isSearchOpen}
  onClose={() => setSearchOpen(false)}
  data={searchData}
/>

    </>
  );
};

export default Navbar;
