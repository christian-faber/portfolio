import { useState } from "react";

export const PortfolioSquare = ({ item }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTouch = () => {
    // For touch devices, toggle th`e options on click
    setShowOptions(!showOptions);
  };

  const handleHover = () => {
    // For non-touch devices, show the options on hover
    if (!("ontouchstart" in window)) {
      setShowOptions(true);
    }
  };

  const handleLeave = () => {
    // For non-touch devices, hide the options when mouse leaves
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
      className="flex justify-center aspect-square p-1 m-4 bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 rounded-md"
    >
      <img
        src={item.photoFileLocation}
        alt={item.title}
        className={item.imgBackgroundStyle}
      />
      {showOptions && (
        <div className="absolute bg-slate-300 opacity-60">
          {/* Options here */}
          <button onClick={() => openModal()}>Learn More</button>
          <button onClick={() => console.log("Follow Link")}>
            Follow Link
          </button>
        </div>
      )}
    </div>
  );
};
