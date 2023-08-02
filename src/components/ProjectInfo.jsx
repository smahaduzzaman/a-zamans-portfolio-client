import React from 'react';
import { Link } from 'react-router-dom';

const ProjectInfo = ({ data }) => {
  const {
    id,
    title,
    subtitle,
    description,
    author,
    start,
    end,
    duration,
    technologies,
    features,
    price,
    live,
    client,
    server,
  } = data;
  return (
    <div class="container text-gray-600 body-font overflow-hidden mx-auto px-20">
      <div class="w-full lg:px-10 lg:py-6 mb-10 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">
          PROJECT ID: {id}
        </h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
          Project Name: {title}
        </h1>
        <p class="text-gray-900 text-sm title-font font-medium mb-4">
          {subtitle}
        </p>
        <div className="flex gap-10">
          <p>Starting Date: {start}</p>
          <p>Ending Date: {end}</p>
          <p>Duration: {duration}</p>
        </div>
        <div class="flex mb-4">
          <a class="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">
            Description
          </a>
          {/* <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                    <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
        </div>
        <p class="leading-relaxed mb-4">{description}</p>
        <h5 className="text-xl mb-4">Technologies: {technologies}</h5>
        <div className="flex justify-between align-middle my-10 mr-10">
          <a href={live} className="text-blue-600/100" target="_blank">
            Live Link
          </a>
          <a href={client} className="text-blue-600/100" target="_blank">
            GitHub Client
          </a>
          <a href={server} className="text-blue-600/100" target="_blank">
            GitHub Server
          </a>
        </div>
        <p className="mb-4">Features: {features}</p>
        {/* <div class="flex border-t border-gray-200 py-2">
                    <span class="text-gray-500">Color</span>
                    <span class="ml-auto text-gray-900">Blue</span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                    <span class="text-gray-500">Size</span>
                    <span class="ml-auto text-gray-900">Medium</span>
                </div>
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span class="text-gray-500">Quantity</span>
                    <span class="ml-auto text-gray-900">4</span>
                </div> */}
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">
            {price}
          </span>
          <a
            href="/contact"
            class="flex ml-auto btn bg-white text-dark_primary border-0 py-2 px-6 focus:outline-none"
          >
            Contact Me
          </a>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;