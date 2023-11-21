import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <div>
      {/* hover:bg-gradient-to-r from-indigo-400 
      via-blue-400 to-green-400 hover:bg-opacity-10
   */}
      <div className="p-3 w-1/4 mx-3 rounded-md shadow-md bg-opacity-20 bg-white flex justify-center">
        <Link className="text-xl text-white" to="/experience">
          Experience
        </Link>
      </div>
      <div className="p-3 w-1/4 mx-3 rounded-md shadow-md bg-opacity-20 bg-white flex justify-center">
        <Link className="text-xl text-white" to="/portfolio">
          Portfolio
        </Link>
      </div>
    </div>
  );
};
