import React from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1470&q=80",
    alt: "University campus",
    tagline: "Excellence in Education Since 1890",
    description:
      "Empowering minds, inspiring futures. Join our prestigious university for a transformative educational experience.",
  },
  // Add more slides here if you want a carousel
];

export const HeroSection = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={slides[0].img}
          alt={slides[0].alt}
          className="w-full h-full object-cover animate-fade-in"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              {slides[0].tagline}
            </h1>
            <p className="text-xl mb-8 animate-slide-up animation-delay-100">
              {slides[0].description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up animation-delay-200">
              <a
                href="/applypage"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition transform hover:-translate-y-1"
              >
                Apply Now
              </a>
              <a
                href="#"
                className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-6 rounded-md transition transform hover:-translate-y-1"
              >
                Virtual Tour
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-10">
        <button className="w-3 h-3 rounded-full bg-white opacity-100"></button>
        <button className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition"></button>
        <button className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition"></button>
      </div>
    </div>
  );
};
