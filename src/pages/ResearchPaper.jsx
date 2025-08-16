import React from "react";
import { researchPapersData } from "../data/researchPapers";
import { useNavigate } from "react-router-dom";

export const ResearchPaper = () => {
  const navigate = useNavigate();

  // Handler to navigate to detail page
  const goToDetail = (id) => {
    navigate(`/researchpapers/${id}`);
  };

  return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header Section */}
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-3xl font-bold text-primary-700 mb-4 md:mb-0 hover:text-primary-800 transition-colors">
                Research Database
              </h1>
              <nav className="w-full md:w-auto">
                <ul className="flex flex-wrap justify-center gap-6 text-gray-700">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 hover:underline transition-all transform hover:-translate-y-0.5"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 hover:underline transition-all transform hover:-translate-y-0.5"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 hover:underline transition-all transform hover:-translate-y-0.5"
                    >
                      Researchers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 hover:underline transition-all transform hover:-translate-y-0.5"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 hover:underline transition-all transform hover:-translate-y-0.5"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Search Research Papers"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              />
              <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">
                search
              </span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 flex-1">
          {/* Sidebar/Filter Section */}
          <aside className="w-full md:w-1/4 bg-white p-5 rounded-lg shadow-sm h-fit">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">Filters</h2>

            <div className="mb-5">
              <h3 className="font-medium mb-2">Categories</h3>

              <details className="mb-3">
                <summary className="cursor-pointer hover:text-primary-600 transition-colors">
                  Computer Science
                </summary>
                <div className="pl-4 pt-2 space-y-1">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Software Development
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Machine Learning
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Data Science
                  </label>
                </div>
              </details>

              <details className="mb-3">
                <summary className="cursor-pointer hover:text-primary-600 transition-colors">
                  Electrical Engineering
                </summary>
                <div className="pl-4 pt-2 space-y-1">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Electrical Circuits
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Signal Processing
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Embedded Systems
                  </label>
                </div>
              </details>

              <details className="mb-3">
                <summary className="cursor-pointer hover:text-primary-600 transition-colors">
                  Mathematics
                </summary>
                <div className="pl-4 pt-2 space-y-1">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Algebra
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Calculus
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Statistics
                  </label>
                </div>
              </details>

              <details className="mb-3">
                <summary className="cursor-pointer hover:text-primary-600 transition-colors">
                  More Categories
                </summary>
                <div className="pl-4 pt-2 space-y-1">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Physics
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Biology
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Chemistry
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Social Sciences
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Medical Sciences
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary-600">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
                    Arts & Humanities
                  </label>
                </div>
              </details>
            </div>

            <div className="mb-5">
              <h3 className="font-medium mb-2">Date Range</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm text-gray-600">From</label>
                  <select className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50">
                    <option>2000</option>
                    <option>2005</option>
                    <option>2010</option>
                    <option>2015</option>
                    <option>2020</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600">To</label>
                  <select className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50">
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-medium mb-2">Sort By</h3>
              <select className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50">
                <option>Newest First</option>
                <option>Most Relevant</option>
                <option>Most Cited</option>
                <option>Highest Impact</option>
              </select>
            </div>

            <button className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200">
              Apply Filters
            </button>
          </aside>

          {/* Main Content Section */}
          <main className="w-full md:w-3/4">
            <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">Research Results</h2>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">View:</span>
                  <button className="p-2 rounded-md bg-gray-100 hover:bg-primary-100 transition-colors">
                    <span className="material-symbols-outlined">grid_view</span>
                  </button>
                  <button className="p-2 rounded-md bg-gray-100 hover:bg-primary-100 transition-colors">
                    <span className="material-symbols-outlined">view_list</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Research Cards dynamically rendered */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {researchPapersData.map((paper) => (
                <article
                  key={paper.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => goToDetail(paper.id)} // Navigate on click anywhere in card
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium bg-${paper.categoryColor}-100 text-${paper.categoryColor}-800 rounded-full`}
                      >
                        {paper.category}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                          onClick={(e) => e.stopPropagation()} // prevent click bubbling
                          title="Bookmark"
                        >
                          <span className="material-symbols-outlined">bookmark</span>
                        </button>
                        <button
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          onClick={(e) => e.stopPropagation()} // prevent click bubbling
                          title="Favorite"
                        >
                          <span className="material-symbols-outlined">favorite</span>
                        </button>
                      </div>
                    </div>
                    <h3
                      className="text-lg font-semibold mb-2 hover:text-primary-700 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToDetail(paper.id);
                      }}
                    >
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Authors: </span>
                      {paper.authors.map((author, i) => (
                        <React.Fragment key={i}>
                          <a href={author.link} className="text-primary-600 hover:underline">
                            {author.name}
                          </a>
                          {i < paper.authors.length - 1 ? ", " : ""}
                        </React.Fragment>
                      ))}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{paper.date}</p>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">{paper.description}</p>
                    <div className="flex flex-wrap justify-between items-center pt-3 border-t">
                      <a
                        href={paper.pdfLink}
                        className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-800 font-medium text-sm group"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Download PDF</span>
                        <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                          download
                        </span>
                      </a>
                      <span className="text-sm text-gray-500">Cited by {paper.citations}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
  );
};
