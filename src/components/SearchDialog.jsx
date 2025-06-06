import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom"; // ✅ import Link

const SearchDialog = ({ isOpen, onClose, data = [] }) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    all: true,
    courses: false,
    tutorials: false,
    blog: false,
  });

  const handleFilter = (type) => {
    const updated = {
      all: false,
      courses: false,
      tutorials: false,
      blog: false,
      [type]: true,
    };
    setFilters(updated);
  };

  const filteredResults = data
    .filter(
      (item) =>
        filters.all ||
        (filters.tutorials && item.type === "Tutorial") ||
        (filters.courses && item.type === "Course") ||
        (filters.blog && item.type === "Blog")
    )
    .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-[9999] inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 bg-black/40">
        <Dialog.Panel className="w-full max-w-2xl p-6 bg-white dark:bg-gray-900 rounded shadow-xl text-gray-800 dark:text-white">
          <Dialog.Title className="text-2xl font-bold mb-4">Search</Dialog.Title>

          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 mb-4 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white"
          />

          <div className="flex space-x-2 mb-4">
            {["all", "courses", "tutorials", "blog"].map((type) => (
              <button
                key={type}
                className={`px-4 py-1 rounded-full ${
                  filters[type]
                    ? "bg-green-200 dark:bg-green-700"
                    : "bg-gray-200 dark:bg-gray-800"
                }`}
                onClick={() => handleFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div>
            <p className="mb-2">
              Showing {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""}
            </p>
            {filteredResults.map((item) => (
              <Link
                to={item.path} // ✅ Navigate using `path`
                key={item.id}
                onClick={onClose} // ✅ Close modal when clicked
                className="flex items-start space-x-3 border-t pt-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded p-2"
              >
                <img src={item.icon} alt="icon" className="w-10 h-10" />
                <div>
                  <h4 className="text-lg font-semibold">
                    <span className="bg-yellow-300 px-1 rounded">
                      {item.title.split(" ")[0]}
                    </span>{" "}
                    {item.title}
                    <span className="ml-2 text-xs bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-100 px-2 py-0.5 rounded-full">
                      {item.type}
                    </span>
                  </h4>
                  <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SearchDialog;
