"use client"
import React from 'react';

const Newscomponent = ({ title, desc, imgUrl, newsurl, author, time, source }) => {
  return (
    <div className="my-4 shadow-black rounded-md shadow-lg">
      <div className="relative bg-zinc-800 rounded-md shadow-md overflow-hidden flex flex-col h-full">
        
        {/* Source Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {source}
          </span>
        </div>

        {/* Image */}
        <img
          src={imgUrl}
          alt="News"
          className="w-full h-48 object-cover"
        />

        {/* Card Body */}
        <div className="p-4 flex flex-col flex-grow">
          <h5 className="text-white text-lg font-semibold mb-2">{title}</h5>
          <p className="text-sm text-gray-300 mb-4">{desc}</p>
          
          <a
            href={newsurl}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-block bg-gray-900 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md transition"
          >
            Full Article
          </a>
        </div>

        {/* Card Footer */}
        <div className="px-4 py-2 bg-neutral-900 text-xs text-gray-300 border-t-white">
          By {author ? author : 'Unknown'} on {time}
        </div>
      </div>
    </div>
  );
};

export default Newscomponent;
