// src/components/ProjectCard.js

import React from "react";

const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  style,
  url,
}) => {
  return (
    <a
      href={url}
      style={style}
      className={`w-full  overflow-hidden shadow-lg bg-gray-800 text-white border border-green-500 cursor-pointer transition-all rounded-md animate-fade-up animate-duration-[800ms] hover:shadow-off hover:shadow-green-500`}
    >
      <div className="w-full ">
        <img className="w-full" src={imageUrl} alt={`${title} screenshot`} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-1 pb-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
