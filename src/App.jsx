import './App.css';
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Tutorials from './components/Tutorials';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import ContactUs from './components/ContactUs';
import BlogList from './components/BlogList';
import BlogView from './components/BlogView';
import SearchDialog from './components/SearchDialog';
import searchData from '../src/components/data/searchData';
import Terms from "./components/Terms"
import PrivacyPolicy from "./components/PrivacyPolicy"
import RefundPolicy from "./components/RefundPolicy"
import WorkWithUs from "./components/WorkWithUs"
import MyGear from "./components/MyGear"





const MainLayout = ({ theme, toggleTheme, onOpenSearch }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <Navbar theme={theme} toggleTheme={toggleTheme} onOpenSearch={onOpenSearch} />
    <main className="p-4 pt-24">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout theme={theme} toggleTheme={toggleTheme} onOpenSearch={() => setIsSearchOpen(true)} />,
      children: [
        { index: true, element: <Home /> },
        { path: 'tutorials', element: <Tutorials /> },
        { path: 'courses', element: <Courses /> },
       { path: 'tutorials/:tutorialId', element: <CourseDetail /> },
        { path: 'contact', element: <ContactUs /> },
        { path: 'blog', element: <BlogList /> },
        { path: 'blogs/:id', element: <BlogView /> },
        { path: 'terms', element: <Terms /> },
        { path: 'privacy', element: <PrivacyPolicy /> },
        { path: 'refund', element: <RefundPolicy/> },
        { path: 'work-with-us', element: <WorkWithUs/> },
        { path: 'my-gear', element: <MyGear/> },
        
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        data={searchData}
      />
    </>
  );
};

export default App;
