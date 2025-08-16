import React from "react";

export const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {article.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="material-symbols-outlined text-white text-5xl">
              play_circle
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{article.date}</p>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
        <p className="text-gray-700 mb-4">{article.description}</p>
        <button className="text-primary-600 font-medium hover:text-primary-800 transition-colors flex items-center">
          {article.isVideo ? "Watch Video" : "Read More"}{" "}
          <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
