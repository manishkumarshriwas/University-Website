import React from "react";

export const Footer = () => (
  <footer className="bg-blue-900 text-gray-200 py-12 mt-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Contact Info */}
      <div>
        <h4 className="font-bold mb-4 text-white">Contact Us</h4>
        <p>University of Excellence</p>
        <p>123 University Ave, City, State, ZIP</p>
        <p>Phone: +1 (800) 555-0100</p>
        <p>Email: info@university.edu</p>
      </div>

      {/* Navigation Links */}
      <div>
        <h4 className="font-bold mb-4 text-white">Quick Links</h4>
        <ul>
          <li>
            <a href="#" className="hover:text-gold-400 transition">
              Admissions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gold-400 transition">
              Academics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gold-400 transition">
              Research
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gold-400 transition">
              Campus Life
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gold-400 transition">
              News & Media
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gold-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div>
        <h4 className="font-bold mb-4 text-white">Newsletter Signup</h4>
        <p>Get the latest news and updates delivered to your inbox.</p>
        <form className="mt-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 rounded-md text-gray-900"
          />
          <button
            type="submit"
            className="mt-2 bg-gold-500 hover:bg-gold-600 text-blue-900 font-semibold py-2 px-4 rounded-md w-full"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Social Icons & Accreditation */}
      <div>
        <h4 className="font-bold mb-4 text-white">Follow Us</h4>
        <div className="flex space-x-4 mb-6">
          <a href="#" className="hover:text-gold-400 transition">
            <i className="fa-brands fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="hover:text-gold-400 transition">
            <i className="fa-brands fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="hover:text-gold-400 transition">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="hover:text-gold-400 transition">
            <i className="fa-brands fa-linkedin fa-lg"></i>
          </a>
        </div>
        <div className="flex space-x-4">
          {/* Accreditation logos placeholders */}
          <img
            src="https://placehold.co/80x40?text=Accred1"
            alt="Accreditation 1"
            className="h-10"
          />
          <img
            src="https://placehold.co/80x40?text=Accred2"
            alt="Accreditation 2"
            className="h-10"
          />
          <img
            src="https://placehold.co/80x40?text=Accred3"
            alt="Accreditation 3"
            className="h-10"
          />
        </div>
      </div>
    </div>

    <div className="text-center mt-8 text-sm text-gray-400">
      &copy; {new Date().getFullYear()} University of Excellence. All rights reserved.
    </div>
  </footer>
);
