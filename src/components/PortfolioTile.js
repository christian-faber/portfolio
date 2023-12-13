import { useState } from "react";
import { Modal } from "./Modal";
import { FiLink } from "react-icons/fi";
import { FaEllipsis } from "react-icons/fa6";

export const PortfolioTile = ({ item }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setModalContent(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTouch = () => {
    // For touch devices, toggle the options on click
    setShowOptions(!showOptions);
  };

  const handleHover = () => {
    // For non-touch devices, show the options on hover
    if (!("ontouchstart" in window)) {
      setShowOptions(true);
    }
  };

  const handleLeave = () => {
    // For non-touch devices, hide the options when the mouse leaves
    if (!("ontouchstart" in window)) {
      setShowOptions(false);
    }
  };

  return (
    <div
      key={item.title}
      onClick={handleTouch}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="flex justify-center aspect-square
       p-1 m-4 bg-gradient-to-br from-blue-500 via-teal-500
        to-green-500 rounded-md relative"
    >
      <img
        src={`./${process.env.PUBLIC_URL}/${item.photoFileLocation}`}
        alt={item.title}
        className={item.imgBackgroundStyle}
      />
      {showOptions && (
        <div
          className="absolute flex justify-evenly
          opacity-6 h-full w-full items-center align-middle bg-slate-400 bg-opacity-40"
        >
          {/* Options here */}
          <button
            onClick={openModal}
            className="h-12 w-12 bg-blue-300 flex justify-center items-center rounded-md"
          >
            <FaEllipsis />
          </button>
          <button
            onClick={() => console.log("Follow Link")}
            className="h-12 w-12 bg-blue-300 flex justify-center items-center rounded-md"
          >
            <FiLink />
          </button>
        </div>
      )}
      {showModal && (
        <Modal
          item={item}
          showModal={showModal}
          closeModal={closeModal}
          modalContent={modalContent}
        />
      )}
    </div>
  );
};
