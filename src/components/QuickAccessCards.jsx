import React from "react";

const cards = [
  {
    icon: "calendar_today",
    title: "Admissions Deadlines",
    description: "Fall 2023 applications due by April 15th. Early decision by January 1st.",
    link: "/admissiondeadlines",
    linkText: "View Deadlines",
  },
  {
    icon: "event",
    title: "Upcoming Events",
    description: "Spring Open House on March 15. Research Symposium April 10-12.",
    link: "/upcomingevents",
    linkText: "View Calendar",
  },
  {
    icon: "newspaper",
    title: "Latest News",
    description:
      "Professor Smith awarded prestigious research grant. New dormitory to open Fall 2023.",
    link: "/latestnews",
    linkText: "Read More",
  },
  {
    icon: "library_books",
    title: "Student Resources",
    description: "Academic advising, career services, and mental health support available.",
    link: "/studentresource",
    linkText: "Access Resources",
  },
  {
    icon: "view_in_ar",
    title: "Virtual Tour",
    description: "Explore our campus from anywhere. Take a guided 3D tour of our facilities.",
    link: "/virtualtour",
    linkText: "Start Tour",
  },
];

export const QuickAccessCards = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map(({ icon, title, description, link, linkText }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <span className="material-symbols-outlined text-blue-800">{icon}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <a
              href={link}
              className="text-blue-800 font-medium hover:underline flex items-center"
            >
              {linkText}
              <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
