import React, { useState } from "react";
import { newsArticles } from "../data/newsArticles";
import { NewsCard } from "../components/NewsCard";
import { article1 } from "../data/article1";


export const LatestNews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState("All");

  const tags = [
    "All",
    "Academic Achievements",
    "Research",
    "Student Life",
    "Awards",
    "Events",
    "Energy",
  ];

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = filterTag === "All" || article.tags.includes(filterTag);

    return matchesSearch && matchesTag;
  });

  return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Latest News
          </h1>
          <p className="text-xl italic font-light text-gray-600 mb-8">
            Stay updated with our latest happenings.
          </p>

          {/* Search & Tag Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search news..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">
                search
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilterTag(tag)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    filterTag === tag
                      ? "bg-primary-100 text-primary-800"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredArticles.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">
                No articles found.
              </p>
            ) : (
              filteredArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))
            )}
          </div>

          {/* Load More button placeholder */}
          <div className="flex justify-center mb-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center">
              Load More News{" "}
              <span className="material-symbols-outlined ml-2">expand_more</span>
            </button>
          </div>
        </div>
      </div>
  );
};
