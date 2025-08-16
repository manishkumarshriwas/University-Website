import React, { useState } from "react";

export const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error sending message");
    }
  };
    return (
        
        <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-[#001F4D] sticky top-0 z-50 shadow-md"></header>
  
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-r from-[#001F4D] to-[#800000]">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="University Campus"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FFD700] font-bold animate-[fadeIn_1.5s_ease-in-out] tracking-wide">
              Contact Us
            </h1>
          </div>
        </div>
  
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form Section */}
            <section
              className="bg-white p-6 rounded-lg shadow-md animate-[fadeIn_1s_ease-in-out]"
              aria-labelledby="contact-form-heading"
            >
              <h2
                id="contact-form-heading"
                className="text-2xl font-serif text-[#001F4D] mb-6 flex items-center"
              >
                <span className="material-symbols-outlined mr-2">mail</span>
                Send Us a Message
              </h2>
  
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 font-medium text-[#001F4D]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000] transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 font-medium text-[#001F4D]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000] transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-medium text-[#001F4D]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000] resize-none transition-all"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="bg-[#800000] text-white px-6 py-3 rounded-md hover:bg-[#600000] focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined mr-2">send</span>
                  Submit Message
                </button>
  
                {status && (
                  <p
                    className={`mt-3 text-sm ${
                      status.includes("✅") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </section>
  

                        {/* Contact Information Section */}
                        <section className="space-y-8" aria-label="Contact Information">
                            {/* Admissions */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h2 className="text-xl font-serif text-[#001F4D] mb-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">school</span>
                                    Admissions Office
                                </h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-[#800000] mr-2 mt-1">
                                            location_on
                                        </span>
                                        <span>123 University Avenue, Building A, Room 101</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-[#800000] mr-2 mt-1">call</span>
                                        <a href="tel:+15551234567" className="hover:text-[#800000] transition-colors">
                                            +91 888888888
                                        </a>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-[#800000] mr-2 mt-1">
                                            email
                                        </span>
                                        <a
                                            href="mailto:admissions@university.edu"
                                            className="hover:text-[#800000] transition-colors"
                                        >
                                            admissions@university.edu
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-4 border border-gray-200 rounded-md overflow-hidden">
                                    <div className="bg-[#800000] text-[#FFD700] px-4 py-2 font-medium">
                                        Office Hours
                                    </div>
                                    <div className="p-4">
                                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Registrar */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h2 className="text-xl font-serif text-[#001F4D] mb-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">description</span>
                                    Registrar's Office
                                </h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-[#800000] mr-2 mt-1">
                                            location_on
                                        </span>
                                        <span>123 University Avenue, Admin Building, Room 220</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-[#800000] mr-2 mt-1">call</span>
                                        <a href="tel:+15551234577" className="hover:text-[#800000] transition-colors">
                                            +91 8888888888
                                        </a>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-[#800000] mr-2 mt-1">
                                            email
                                        </span>
                                        <a
                                            href="mailto:registrar@university.edu"
                                            className="hover:text-[#800000] transition-colors"
                                        >
                                            registrar@university.edu
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-4 border border-gray-200 rounded-md overflow-hidden">
                                    <div className="bg-[#800000] text-[#FFD700] px-4 py-2 font-medium">
                                        Office Hours
                                    </div>
                                    <div className="p-4">
                                        <p>Monday - Friday: 9:00 AM - 4:00 PM</p>
                                        <p>Saturday - Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="bg-[#FFEEEE] border-l-4 border-[#800000] p-6 rounded-r-lg shadow-md">
                                <h2 className="text-xl font-serif text-[#800000] mb-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">emergency</span>
                                    Emergency Contact
                                </h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-[#800000] mr-2 mt-1">call</span>
                                        <a
                                            href="tel:+15551239911"
                                            className="font-bold hover:text-[#800000] transition-colors"
                                        >
                                            +92 8888888888
                                        </a>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-[#800000] mr-2 mt-1">
                                            shield
                                        </span>
                                        <span>Campus Security is available 24/7</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Map Section */}
                    {/* <section className="mt-12" aria-labelledby="campus-map-heading">
                        <h2
                            id="campus-map-heading"
                            className="text-2xl font-serif text-[#001F4D] mb-6 flex items-center"
                        >
                            <span className="material-symbols-outlined mr-2">map</span>
                            Find Us on Campus
                        </h2>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00594674878554!3d40.71277717932907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sNew%20York%20City%20College%20of%20Technology!5e0!3m2!1sen!2sus!4v1625103034793!5m2!1sen!2sus"
                                width="100%"
                                height="450"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                title="University Campus Map"
                                aria-label="Google Map showing the location of our university campus"
                                className="rounded-lg shadow-inner"
                            ></iframe>
                        </div>
                    </section> */}
                </main>

               
            </div>
        
    )
}
