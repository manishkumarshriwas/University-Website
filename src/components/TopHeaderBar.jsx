import React from "react";

export const TopHeaderBar = () => (
  <div className="bg-blue-900 text-white py-2 px-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-sm">call</span>
          <span className="ml-1 text-sm">+1 (800) 555-0100</span>
        </div>
        <div className="flex items-center">
          <span className="material-symbols-outlined text-sm">mail</span>
          <span className="ml-1 text-sm">admissions@university.edu</span>
        </div>
      </div>
      <div className="flex space-x-4 text-sm">
        <a href="#" className="hover:text-blue-200 transition">Admissions</a>
        <a href="#" className="hover:text-blue-200 transition">Research</a>
        <a href="#" className="hover:text-blue-200 transition">Library</a>
        <a href="/studentportal" className="hover:text-blue-200 transition">Student Portal</a>
      </div>
      <div className="flex space-x-2 mt-2 md:mt-0">
        <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 transition">
          <i className="fa-brands fa-facebook text-blue-800"></i>
        </a>
        <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 transition">
          <i className="fa-brands fa-twitter text-blue-400"></i>
        </a>
        <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 transition">
          <i className="fa-brands fa-instagram text-pink-600"></i>
        </a>
      </div>
    </div>
  </div>
);
