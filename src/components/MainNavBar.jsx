import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "About", path: "/aboutuniversity",
    submenu: ["History", "Mission", "Leadership"],
  },
  {
    title: "Academics",
    submenu: [
      { name: "Departments" , path: "/departments/department"},
      { name: "Programs", path: "/academic-programs" },
      "Calendar",
    ],
  },
  {
    title: "Admissions",
    path: "/admissions",  // Added path here
    submenu: ["Undergraduate", "Graduate", "International"],
  },
  { title: "Research" , path: "/research"},
  { title: "Campus Life", path:"studentresources" },
  { title: "News & Media", path: "/newsandevents" },
  { title: "Contact Us" , path: "/contactus" },
];

export const MainNavBar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="https://placehold.co/200x60?text=University+Logo"
            alt="University Logo"
            className="h-12"
          />
        </div>

        {/* Mobile Hamburger Menu */}
        <details className="md:hidden w-full mb-4 md:mb-0 relative">
          <summary className="list-none flex justify-end cursor-pointer">
            <span className="material-symbols-outlined p-2 rounded-md hover:bg-gray-100">
              menu
            </span>
          </summary>
          <nav className="absolute left-0 right-0 bg-white shadow-lg rounded-b-lg mt-2 py-2 px-4 z-30">
            <ul className="space-y-2">
              {menuItems.map(({ title, submenu }) => (
                <li key={title}>
                  <span className="block py-2 font-semibold">{title}</span>
                  {submenu && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {submenu.map((sub) =>
                        typeof sub === "string" ? (
                          <li key={sub}>
                            <a
                              href="#"
                              className="block py-1 text-sm hover:text-blue-600 transition"
                            >
                              {sub}
                            </a>
                          </li>
                        ) : (
                          <li key={sub.name}>
                            <Link
                              to={sub.path}
                              className="block py-1 text-sm hover:text-blue-600 transition"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </details>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map(({ title, submenu, path }) =>
              submenu ? (
                <li key={title} className="group relative">
                  {/* Changed from span to Link here */}
                  <Link
                    to={path || "#"}
                    className="py-2 hover:text-blue-800 transition flex items-center cursor-pointer"
                  >
                    {title}
                    <span className="material-symbols-outlined text-sm ml-1">
                      expand_more
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                    {submenu.map((sub) =>
                      typeof sub === "string" ? (
                        <a
                          href="#"
                          key={sub}
                          className="block py-2 hover:text-blue-800 transition"
                        >
                          {sub}
                        </a>
                      ) : (
                        <Link
                          to={sub.path}
                          key={sub.name}
                          className="block py-2 hover:text-blue-800 transition"
                        >
                          {sub.name}
                        </Link>
                      )
                    )}
                  </div>
                </li>
              ) : (
                <li key={title}>
                  <Link to={path || "#"} className="py-2 hover:text-blue-800 transition">
                    {title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Search Box */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none w-32 lg:w-48"
            />
            <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-blue-800 transition">
              search
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
