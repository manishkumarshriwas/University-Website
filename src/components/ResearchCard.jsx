import React from "react";
import researchPapers from "../data/researchPapers";

const ResearchCard = ({ paper }) => {
  const categoryColors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              categoryColors[paper.categoryColor] || "bg-gray-100 text-gray-800"
            }`}
          >
            {paper.category}
          </span>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-primary-600 transition-colors">
              <span className="material-symbols-outlined">bookmark</span>
            </button>
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 hover:text-primary-700 cursor-pointer">
          {paper.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Authors: </span>
          {paper.authors.map((author, idx) => (
            <span key={author.name}>
              <a href={author.url} className="text-primary-600 hover:underline">
                {author.name}
              </a>
              {idx < paper.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p className="text-sm text-gray-500 mb-3">{paper.date}</p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{paper.summary}</p>
        <div className="flex flex-wrap justify-between items-center pt-3 border-t">
          <a
            href={paper.pdfLink}
            className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-800 font-medium text-sm group"
          >
            <span>Download PDF</span>
            <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
              download
            </span>
          </a>
          <span className="text-sm text-gray-500">Cited by {paper.citedBy}</span>
        </div>
      </div>
    </article>
  );
};

export const Component = () => {
  return (
    <div id="webcrumbs">
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header Section */}
        {/* ... your unchanged header code ... */}

        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 flex-1">
          {/* Sidebar/Filter Section */}
          {/* ... your unchanged sidebar/filter code ... */}

          {/* Main Content Section */}
          <main className="w-full md:w-3/4">
            {/* ... your unchanged research results header ... */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {researchPapers.map((paper) => (
                <ResearchCard key={paper.id} paper={paper} />
              ))}
            </div>

            {/* Pagination */}
            {/* ... your unchanged pagination ... */}
          </main>
        </div>

        {/* Footer */}
        {/* ... your unchanged footer ... */}
      </div>
    </div>
  );
};
