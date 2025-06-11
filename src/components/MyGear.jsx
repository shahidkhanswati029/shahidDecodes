import React from 'react';
import { FaLaptop, FaCamera, FaMicrophoneAlt, FaHeadphones, FaEdit } from 'react-icons/fa';

const gearItems = [
  {
    name: 'MacBook Pro M2 (16-inch)',
    description: 'Fast, reliable, and perfect for development, editing, and multitasking.',
    icon: <FaLaptop className="text-indigo-600 text-3xl" />,
  },
  {
    name: 'Sony ZV-E10 Camera',
    description: 'Used for recording high-quality videos and livestreams.',
    icon: <FaCamera className="text-red-500 text-3xl" />,
  },
  {
    name: 'Shure MV7 Microphone',
    description: 'Crisp audio for tutorials, livestreams, and podcasts.',
    icon: <FaMicrophoneAlt className="text-green-500 text-3xl" />,
  },
  {
    name: 'Audio-Technica ATH-M50x',
    description: 'Studio-grade monitoring headphones for editing and content creation.',
    icon: <FaHeadphones className="text-purple-600 text-3xl" />,
  },
  {
    name: 'Notion & VS Code',
    description: 'Used daily for planning, scripting, and writing clean code.',
    icon: <FaEdit className="text-yellow-500 text-3xl" />,
  },
];

const MyGear = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">My Gear</h2>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
          Here's the tech that powers <span className="text-blue-600 dark:text-blue-400 font-semibold">Mohit Decodes</span> — from coding to content creation.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gearItems.map((gear, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-md transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{gear.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{gear.name}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{gear.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyGear;
