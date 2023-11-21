import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <div className="fixed top-2 right-2 text-white sm:hidden md:hidden lg:flex justify-end">
      <Link
        to="/experience"
        className="m-3 hover:bg-gradient-to-r hover:text-transparent bg-clip-text from-indigo-400 via-blue-400 to-green-400"
      >
        Experience
      </Link>
      <Link
        to="/portfolio"
        className="m-3 hover:bg-gradient-to-r hover:text-transparent bg-clip-text from-indigo-400 via-blue-400 to-green-400"
      >
        Portfolio
      </Link>
    </div>
  );
};
