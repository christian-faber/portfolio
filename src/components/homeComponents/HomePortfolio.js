import { useState } from "react";
import { Link } from "react-router-dom";
import portfolio from "../../data/portfolio.json";

export const HomePortfolio = () => {
  const [showOptions, setShowOptions] = useState(false);

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {portfolio.portfolio.slice(0, 4).map((item) => (
          <div
            key={item.title}
            onClick={handleTouch}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="flex justify-center aspect-square p-1 m-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-300 rounded-md"
          >
            <img
              src={item.photoFileLocation}
              alt={item.title}
              className={item.imgBackgroundStyle}
            />
            {showOptions && (
              <div className="absolute bg-slate-300 opacity-60">
                {/* Options here */}
                <button onClick={() => console.log("Learn More")}>
                  Learn More
                </button>
                <button onClick={() => console.log("Follow Link")}>
                  Follow Link
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end my-4 md:justify-center lg:justify-center">
        <Link
          to="/Portfolio"
          className="text-white rounded-xl text-3xl border-white border flex items-center justify-evenly w-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-300 p-2"
        >
          <h2>See More</h2>
        </Link>
      </div>
    </>
  );
};
