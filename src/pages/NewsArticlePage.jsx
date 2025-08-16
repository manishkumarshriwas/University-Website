import React from "react";
import ArticleContent from "../components/ArticleContent";

const NewsArticlePage = ({ data }) => {
  if (!data) return <p>No article data found.</p>;

  const { title, date, author, content, relatedArticles, popularArticles } = data;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-3 transition-all duration-300 hover:text-primary-600">
            {title}
          </h1>
          <p className="text-gray-600 italic mb-4">
            {date} | By {author.name}, {author.title}
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article */}
        <article className="lg:col-span-2 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          {content.map((block, idx) => (
            <ArticleContent key={idx} block={block} />
          ))}

          {/* CTA Section */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              <span className="material-symbols-outlined mr-2">article</span>
              Read More Articles
            </a>
            <a
              href="#"
              className="bg-white hover:bg-gray-100 text-primary-600 border border-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              <span className="material-symbols-outlined mr-2">science</span>
              Explore Research
            </a>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Author Profile */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">About the Author</h3>
            <div className="flex flex-col items-center text-center">
              <img
                src={author.photoUrl}
                alt={author.name}
                className="w-24 h-24 rounded-full border-4 border-primary-100 mb-4"
              />
              <h4 className="font-bold text-lg">{author.name}</h4>
              <p className="text-primary-600 mb-2">{author.title}</p>
              <p className="text-sm text-gray-600 mb-4">{author.bio}</p>
              <div className="flex space-x-3">
                <a href={author.socials.twitter} className="text-gray-500 hover:text-primary-600 transition-colors duration-200">
                  <i className="fa-brands fa-twitter text-lg"></i>
                </a>
                <a href={author.socials.linkedin} className="text-gray-500 hover:text-primary-600 transition-colors duration-200">
                  <i className="fa-brands fa-linkedin text-lg"></i>
                </a>
                <a href={`mailto:${author.socials.email}`} className="text-gray-500 hover:text-primary-600 transition-colors duration-200">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Related Articles</h3>
            <div className="space-y-4">
              {relatedArticles.map((article, idx) => (
                <a href={article.link} key={idx} className="group block">
                  <div className="flex gap-3">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-20 h-16 object-cover rounded group-hover:opacity-90 transition-opacity"
                    />
                    <div>
                      <h4 className="font-medium group-hover:text-primary-600 transition-colors duration-200">{article.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{article.date}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="#"
              className="text-primary-600 font-medium flex items-center mt-4 hover:text-primary-700 transition-colors duration-200"
            >
              View all related articles
              <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </a>
          </div>

          {/* Popular Articles */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Popular This Week</h3>
            <ol className="list-decimal list-inside space-y-3 pl-1">
              {popularArticles.map((article, idx) => (
                <li key={idx} className="text-gray-600">
                  <a href={article.link} className="text-gray-800 hover:text-primary-600 transition-colors duration-200">
                    {article.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </main>

      {/* Newsletter Section */}
      <section className="bg-primary-50 py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Latest Research</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest news, research papers, and event invitations directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsArticlePage;
