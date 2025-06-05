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

const MainLayout = ({ theme, toggleTheme }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main className="p-4 pt-24"> {/* padding top for fixed navbar */}
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

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
      element: <MainLayout theme={theme} toggleTheme={toggleTheme} />,
      children: [
        { index: true, element: <Home /> },
        { path: 'tutorials', element: <Tutorials /> },
        { path: 'courses', element: <Courses /> },
        { path: 'course/:courseId', element: <CourseDetail /> },
        { path: 'contact', element: <ContactUs /> },
        { path: 'blog', element: <BlogList /> },
        { path: 'blogs/:id', element: <BlogView /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
