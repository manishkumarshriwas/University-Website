import React from "react";

const departments = [
  {
    icon: "science",
    title: "Sciences",
    description:
      "Offering programs in Physics, Chemistry, Biology, and Environmental Sciences with state-of-the-art laboratories.",
    link: "/departments/sciencedepartment",
  },
  {
    icon: "code",
    title: "Engineering",
    description:
      "From Civil to Computer Engineering, our programs blend theoretical knowledge with practical applications.",
    link: "/departments/engineering",
  },
  {
    icon: "business",
    title: "Business",
    description:
      "Our Business School provides rigorous training in management, finance, marketing, and entrepreneurship.",
    link: "/departments/business",
  },
  {
    icon: "menu_book",
    title: "Humanities",
    description:
      "Explore literature, philosophy, history, and languages with our distinguished humanities faculty.",
    link: "/departments/humanities",
  },
  {
    icon: "medical_services",
    title: "Medicine",
    description:
      "Our Medical School offers cutting-edge education in medicine, nursing, and allied health professions.",
    link: "/departments/medicine",
  },
  {
    icon: "balance",
    title: "Law",
    description:
      "Our Law School prepares students for legal careers with comprehensive coursework and practical experience.",
    link: "/departments/law",
  },
];

export const AcademicOverview = () => (
  <section className="bg-gray-100 py-16" aria-labelledby="academic-overview-title">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="academic-overview-title" className="text-3xl font-bold mb-4">Academic Excellence</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our diverse range of faculties and departments offering cutting-edge programs taught by world-renowned faculty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map(({ icon, title, description, link }) => (
          <article
            key={title}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4" aria-hidden="true">
                <span className="material-symbols-outlined text-blue-800">{icon}</span>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <a
              href={link}
              className="text-blue-800 font-medium hover:underline flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Explore <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
