import React from "react";

const newsItems = [
  {
    img: "https://images.unsplash.com/photo-1623461487986-9400110de28e?auto=format&fit=crop&w=1080&q=80",
    date: "May 15, 2023",
    title: "University Celebrates Record Graduation Rate",
    description:
      "This year's graduation ceremony saw over 5,000 students receive their degrees, the largest class in university history.",
  },
  {
    img: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=1470&q=80",
    date: "May 8, 2023",
    title: "$25M Grant Awarded for Renewable Energy Research",
    description:
      "The Department of Energy has awarded our Engineering faculty a major grant to advance solar energy technology.",
  },
  {
    img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1074&q=80",
    date: "May 3, 2023",
    title: "University Basketball Team Wins National Championship",
    description:
      "Our men's basketball team secured their third national title with a thrilling overtime victory.",
  },
];

export const NewsEvents = () => (
  <section className="bg-gray-100 py-16" aria-labelledby="news-events-title">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="news-events-title" className="text-3xl font-bold mb-4">News & Events</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest happenings and upcoming events at our university.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="material-symbols-outlined mr-2" aria-hidden="true">newspaper</span> Latest News
          </h3>
          <div className="space-y-6">
            {newsItems.map(({ img, date, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <img
                    src={img}
                    alt={title}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div>
                    <time className="text-sm text-gray-500 block mb-1">{date}</time>
                    <h4 className="text-lg font-semibold mb-2">{title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{description}</p>
                    <button
                      type="button"
                      className="text-blue-800 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 flex items-center"
                      onClick={() => alert(`Read more about "${title}" coming soon!`)}
                    >
                      Read More <span className="material-symbols-outlined ml-1">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
        {/* You can add an Upcoming Events section here similarly */}
      </div>
    </div>
  </section>
);
