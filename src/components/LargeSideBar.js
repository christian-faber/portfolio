import { Link } from "react-router-dom";
import resumepdf from "../resume.pdf";

export const LargeSideBar = ({ setTitle }) => {
  const pages = ["Experience", "Ventures", "Portfolio"];
  return (
    <div className="h-screen w-1/4 hidden lg:block">
      <div className="w-full my-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl">
            <Link to={"/"} className="hover:text-slate-50">
              Christian Faber
            </Link>
          </h2>
          <div className="w-32 h-32 m-2">
            <img
              src="/Evil Me.jpeg"
              alt="me"
              className="rounded-full w-32 h-32"
            />
          </div>
        </div>
        <div
          className="flex flex-col items-center border-b-2
         border-t-2 border-white m-4"
        >
          {pages.map((page) => (
            <Link
              to={page}
              key={page}
              onClick={() => setTitle(page)}
              className="px-8 py-2  text-black 
              hover:text-purple-500 bg-slate-200 
              flex justify-center border-y-2 border-white 
              rounded-full m-2"
            >
              <h2>{page}</h2>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-evenly my-10 mx-5">
        {/* GitHub */}
        <div
          className="rounded-sm transform 
          transition-transform hover:scale-105 hover:shadow-sm 
          rounded-full"
        >
          <a href="https://github.com/christian-faber" target="_blank">
            <img src="/github-mark.png" alt="linkedin" className="w-12" />
          </a>
        </div>
        {/* LinkedIn */}
        <div
          className="rounded-sm transform 
          transition-transform hover:scale-105 "
        >
          <a href="https://www.linkedin.com/in/christianfaber/" target="_blank">
            <img src="/linkedin.png" alt="linkedin" className="w-12" />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        {/* Tableau */}
        <div
          className="rounded-sm 
          transform transition-transform hover:scale-105 
          hover:shadow-sm flex justify-center w-1/2"
        >
          <a
            href="https://public.tableau.com
              /app/profile/christian1024/vizzes"
            target="_blank"
          >
            <img src="/tableau.png" alt="linkedin" className="w-24" />
          </a>
        </div>
      </div>
    </div>
  );
};
