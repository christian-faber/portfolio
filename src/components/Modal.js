import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import any other icons you might need
import portfolio from "../data/portfolio.json";

export const Modal = ({ showModal, closeModal, modalContent }) => {
  const title = portfolio.title;
  const photo = portfolio.photoFileLocation;
  const links = portfolio.link;
  const description = portfolio.description;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center 
                  bg-gray-800 bg-opacity-70 ${showModal ? "" : "hidden"}`}
    >
      <div className="bg-white w-full h-full md:w-2/3 md:h-2/3 overflow-auto p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={photo}
              alt={title}
              className="w-12 h-12 mr-4 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{title}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-600 hover:text-gray-800" />
              </a>
            )}
            {links.external && (
              <a
                href={links.external}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-gray-600 hover:text-gray-800" />
              </a>
            )}
          </div>
        </div>
        <div className="overflow-auto h-3/4">
          <p>{description}</p>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};
