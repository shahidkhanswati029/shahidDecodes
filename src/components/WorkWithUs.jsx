import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaPaintBrush, FaBullhorn, FaArrowRight } from 'react-icons/fa';

const roles = [
  {
    title: 'Frontend Developer',
    description: 'Craft elegant UIs with React, Tailwind, and modern frameworks.',
    icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
  },
  {
    title: 'UI/UX Designer',
    description: 'Design beautiful, user-centric interfaces and seamless experiences.',
    icon: <FaPaintBrush className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Content Creator',
    description: 'Create tutorials, blogs, and videos to empower our community.',
    icon: <FaBullhorn className="text-yellow-500 text-3xl" />,
  },
];

const WorkWithUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Work With Us</h2>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
          At <span className="font-semibold text-blue-600 dark:text-blue-400">Mohit Decodes</span>, we're building a
          community that empowers learners and developers. Join us in shaping the future of education, one line of code
          at a time.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{role.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Let's Collaborate <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
