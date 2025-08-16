import React from "react";
import { useParams } from "react-router-dom";
import { researchPapersData } from "../data/researchPapers";
import { researchPaperContent } from "../data/researchPaperContent";

const Icon = ({ name, className }) => (
  <span className={`material-symbols-outlined ${className || ""}`}>{name}</span>
);

const renderContent = (content) =>
  content.map((block, idx) => {
    switch (block.type) {
      case "title":
        return (
          <h1
            key={idx}
            className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-300 hover:text-primary-600"
          >
            {block.text}
          </h1>
        );

      case "meta":
        return (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm mb-4"
          >
            {block.items.map((item, i) => (
              <React.Fragment key={i}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-2 hover:text-primary-600 transition-all duration-300 font-medium"
                  >
                    <Icon name={item.icon} className="text-primary-500" />
                    {item.text}
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Icon name={item.icon} className="text-primary-500" />
                    <span>{item.text}</span>
                  </div>
                )}
                {i < block.items.length - 1 && (
                  <span className="hidden md:block text-gray-400">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        );

      case "section":
        return (
          <section
            key={idx}
            className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center">
              {block.icon && (
                <Icon name={block.icon} className="mr-2 text-primary-500" />
              )}
              {block.title}
            </h2>
            {renderContent(block.content)}
          </section>
        );

      case "paragraph":
        return (
          <p key={idx} className="text-gray-700 leading-relaxed mb-6">
            {block.text}
          </p>
        );

      case "keywords":
        return (
          <div key={idx} className="flex flex-wrap gap-2 mb-6">
            {block.keywords.map((kw, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              >
                {kw}
              </span>
            ))}
          </div>
        );

      case "tags":
        return (
          <div key={idx} className="flex flex-wrap gap-2">
            {block.tags.map((tag, i) => (
              <a
                key={i}
                href={tag.href || "#"}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
              >
                <Icon name={tag.icon} className="text-sm" />
                {tag.text}
              </a>
            ))}
          </div>
        );

      case "button":
        return (
          <div key={idx} className="flex justify-center mt-6">
            <button className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <Icon name={block.icon} />
              {block.text}
            </button>
          </div>
        );

      case "detailsList":
        return (
          <div key={idx} className="space-y-4">
            {block.items.map((item, i) => (
              <details key={i} className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Icon name={item.icon} className="text-primary-500" />
                    {item.title}
                  </span>
                  <Icon
                    name="expand_more"
                    className="group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="p-4 mt-2 bg-gray-50 rounded-lg text-gray-700">
                  {item.content}
                </div>
              </details>
            ))}
          </div>
        );

      case "list":
        return (
          <ul
            key={idx}
            className="list-disc pl-5 space-y-1 text-gray-700 mb-6"
          >
            {block.items.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        );

      case "subsection":
        return (
          <div key={idx} className="mb-8">
            <h3 className="font-semibold mb-4">{block.title}</h3>
            {renderContent(block.content)}
          </div>
        );

      case "image":
        return (
          <img
            key={idx}
            src={block.src}
            alt={block.alt}
            className="max-h-full rounded shadow-md hover:shadow-lg transition-all duration-300"
          />
        );

      case "impactStats":
        return (
          <div key={idx}>
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full">
                <Icon name="format_quote" className="text-3xl" />
              </div>
              <div>
                <div className="text-2xl font-bold">{block.citations}</div>
                <div className="text-sm text-gray-600">
                  Citations in peer-reviewed journals
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="emoji_events" className="text-yellow-500" />
                <span className="font-medium">Awards & Recognition</span>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                <p className="text-sm">{block.awards}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">References</h3>
              <div className="text-sm text-gray-700 p-4 bg-gray-50 rounded-lg">
                {block.references.map((ref, i) => (
                  <p key={i} className="mb-3">
                    {ref}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Related Research</h3>
              <div className="space-y-3">
                {block.relatedResearch.map((rel, i) => (
                  <a
                    key={i}
                    href={rel.href}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-all duration-300"
                  >
                    <h4 className="font-medium">{rel.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {rel.institution}, {rel.year}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div key={idx} className="text-red-500">
            Unknown content type: {block.type}
          </div>
        );
    }
  });

export const ResearchPaperStructure = () => {
  const { paperId } = useParams();

  // Find the paper by id (number)
  const paper = researchPapersData.find((p) => p.id === Number(paperId));

  if (!paper) {
    return (
      <div className="p-8 text-center text-red-600">
        Research Paper Not Found
      </div>
    );
  }

  // Get content for this paper from researchPaperContent keyed by paperId
  // You need to structure your researchPaperContent like: { [paperId]: [...content blocks...] }
  // For example:
  // researchPaperContent = {
  //   1: [...],
  //   2: [...],
  // }
  const content = researchPaperContent[paperId];

  return (
      <div className="bg-white min-h-screen p-4 md:p-8">
        {/* Fallback simple header (title/authors/date/description/pdf) */}
        <h1 className="text-3xl font-bold mb-4">{paper.title}</h1>
        <p className="text-gray-700 mb-2">
          <strong>Authors:</strong>{" "}
          {paper.authors.map((author, i) => (
            <span key={i}>
              <a href={author.link} className="text-primary-600 hover:underline">
                {author.name}
              </a>
              {i < paper.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p className="text-gray-500 mb-6">{paper.date}</p>
        <p className="mb-6">{paper.description}</p>
        <a
          href={paper.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700 mb-8"
        >
          Download Full Paper (PDF)
        </a>

        {/* If structured rich content exists, render it here */}
        {content ? renderContent(content) : null}
      </div>
  );
};
