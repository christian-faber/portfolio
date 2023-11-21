import { Link } from "react-router-dom";

export const SmallSideBar = ({ setOpen, setTitle }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-slate-200 bg-opacity-50 z-40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed right-0 z-50 bg-gradient-to-r from-purple-500
         to-pink-500 flex shadow-2xl flex-col p-[5%] md:p-10 items-center h-screen w-2/3"
      >
        <div
          onClick={() => setOpen(false)}
          className="fixed right-[2%] top-[1%] text-3xl"
        >
          X
        </div>
        <div className="w-full h-full flex flex-col justify-between items-center">
          {/* Me */}
          <Link to="/">
            <div className="flex flex-col">
              <h1>Christian Faber</h1>
              <img
                src="/Evil Me.jpeg"
                alt="me"
                className="rounded-full w-24 h-24"
              />
            </div>
          </Link>
          {/* Page Links */}
          <div className="flex flex-col items-center text-center h-1/3 justify-between">
            <ul className="border-y-2 border-white p-4">
              <li>
                <Link to="Experience" onClick={() => setTitle("Experience")}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="Ventures" onClick={() => setTitle("Ventures")}>
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="Portfolio" onClick={() => setTitle("Portfolio")}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          {/* External Links */}

          <div className="flex justify-evenly my-10 mx-5">
            {/* GitHub */}
            <div
              className="transform 
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
              <a
                href="https://www.linkedin.com/in/christianfaber/"
                target="_blank"
              >
                <img src="/linkedin.png" alt="linkedin" className="w-12" />
              </a>
            </div>
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
      </div>
    </div>
  );
};
