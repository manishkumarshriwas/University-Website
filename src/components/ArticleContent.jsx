import React from "react";

const ArticleContent = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return <p className="mb-5 leading-relaxed">{block.text}</p>;

    case "heading":
      const Tag = `h${block.level}`;
      return <Tag className="text-2xl font-serif font-bold mt-8 mb-4">{block.text}</Tag>;

    case "image":
      return (
        <img
          src={block.src}
          alt={block.alt || ""}
          className="w-full h-auto rounded-lg mb-6 object-cover hover:opacity-95 transition-opacity duration-300"
        />
      );

    case "blockquote":
      return (
        <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6 rounded-r-lg italic text-primary-800">
          {block.text}
        </div>
      );

    case "list":
      return (
        <ul className="list-disc pl-8 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};

export default ArticleContent;
