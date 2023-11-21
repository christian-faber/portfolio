import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoCalendarOutline, IoLogoTableau } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

export const Cover = () => {
  return (
    <>
      <div className="static top-2 right-2 text-white sm:hidden md:hidden lg:flex justify-end h-0">
        <Link
          to="/experience"
          className="m-3 hover:underline hover:text-blue-600"
        >
          Experience
        </Link>
        <Link
          to="/portfolio"
          className="m-3 hover:underline hover:text-blue-600"
        >
          Portfolio
        </Link>
      </div>
      <div className="h-full p-5 md:p-10 flex flex-col justify-evenly shadow-md">
        {/* Profile Pic */}
        <div className="flex items-center justify-center h-1/3 w-auto">
          <div className="bg-slate-300 p-1 rounded-full shadow-md h-full">
            <img
              src="/me.jpeg"
              alt="me"
              className="rounded-full object-cover border-4 border-slate-100 aspect-square h-full"
            />
          </div>
        </div>
        {/* Name & Occupation */}
        <div className="m-2 flex flex-col items-center align-middle justify-center">
          <h1 className="text-5xl text-center text-white p-1 md:text-7xl">
            Christian Faber
          </h1>
          <div className="w-4/5 flex items-center justify-between md:w-3/5 lg:justify-center lg:align-middle">
            <h1 className="text-2xl text-white text-center w-1/3 md:w-2/5 md:text-4xl lg:text-5xl">
              Developer
            </h1>
            <h1 className="text-2xl text-white md:text-4xl lg:text-5xl">||</h1>
            <h1 className="text-2xl text-white text-center w-1/3 md:w-2/5 md:text-4xl lg:text-5xl">
              Analyst
            </h1>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col justify-evenly items-center h-1/3">
          <div className="flex justify-evenly w-full h-1/4">
            <button className="rounded-md shadow-md bg-white flex items-center justify-center aspect-square">
              <a href="mailto:christian@communitypursuit.com">
                <TfiEmail />
              </a>
            </button>
            <button className="rounded-md shadow-md bg-white flex items-center justify-center aspect-square">
              <a href="tel:+16628747153">
                <HiOutlineDevicePhoneMobile />
              </a>
            </button>
            <button className="rounded-md shadow-md bg-white flex items-center justify-center aspect-square">
              <a href="#">
                <IoCalendarOutline />
              </a>
            </button>
          </div>
          <div className="flex justify-evenly w-full h-1/4">
            <button className="rounded-md shadow-md bg-white flex items-center justify-center aspect-square">
              <a
                href="https://www.linkedin.com/in/christianfaber/"
                target="_blank"
              >
                <GrLinkedinOption />
              </a>
            </button>
            <button className="rounded-md shadow-md bg-white flex items-center justify-center aspect-square">
              <a href="https://github.com/christian-faber" target="_blank">
                <BsGithub />
              </a>
            </button>
            <button className="rounded-md shadow-md bg-white flex items-center justify-center aspect-square">
              <a
                href="https://public.tableau.com/app/profile/christian1024"
                target="_blank"
              >
                <IoLogoTableau />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
