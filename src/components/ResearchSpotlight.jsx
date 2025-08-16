import React from "react";
import { Link } from "react-router-dom";

const researchProjects = [
  {
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1587&q=80",
    alt: "Climate research",
    category: "Environmental Science",
    title: "Climate Change Impact on Coastal Ecosystems",
    description:
      "Dr. Jane Rodriguez's team discovers new patterns in coastal ecosystem adaptations to rising sea levels.",
  },
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1470&q=80",
    alt: "AI research",
    category: "Computer Science",
    title: "Breakthrough in AI Natural Language Processing",
    description:
      "Professor Michael Chen's lab develops new algorithm improving machine understanding of context by 40%.",
  },
  {
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1480&q=80",
    alt: "Medical research",
    category: "Medicine",
    title: "Novel Treatment for Alzheimer's Disease Shows Promise",
    description:
      "Groundbreaking clinical trial led by Dr. Sarah Williams demonstrates cognitive improvement in early-stage patients.",
  },
];

export const ResearchSpotlight = () => (
  <section className="container mx-auto px-4 py-16" aria-labelledby="research-spotlight-title">
    <div className="text-center mb-12">
      <h2 id="research-spotlight-title" className="text-3xl font-bold mb-4">Research Spotlight</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover groundbreaking research and innovations from our talented faculty and students.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {researchProjects.map(({ img, alt, category, title, description }) => (
        <article
          key={title}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <img src={img} alt={alt} className="w-full h-48 object-cover" />
          <div className="p-6">
            <span className="text-xs font-semibold text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
              {category}
            </span>
            <h3 className="text-xl font-semibold mt-3 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <button
              type="button"
              className="text-blue-800 font-medium hover:underline flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() => alert(`Read full study on "${title}" coming soon!`)}
            >
              Read Full Study <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </button>
          </div>
        </article>
      ))}
    </div>

    <div className="text-center mt-10">
      <Link
        to="/researchpaper"
        className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-md transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-900"
      >
        Explore All Research
      </Link>
    </div>
  </section>
);
