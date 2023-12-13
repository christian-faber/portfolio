import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoCalendarOutline, IoLogoTableau } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

export const Cover = () => {
  return (
    <>
      <div className="h-full p-5 md:p-10 flex flex-col justify-evenly">
        {/* Profile Pic */}
        <div className="flex items-center justify-center h-1/3 w-auto">
          <div className="bg-ivory-500 p-1 rounded-full shadow-md h-full">
            <img
              src="/me.jpeg"
              alt="me"
              className="rounded-full object-cover border-4 border-gold-400 aspect-square h-full"
            />
          </div>
        </div>
        {/* Name & Occupation */}
        <div className="h-1/6 flex flex-col items-center align-middle justify-center">
          <div className="bg-ivory-200 rounded-md shadow-md h-full px-5 py-1 lg:px-10 lg:py-4 grid">
            <div className="">
              <h1 className="text-3xl md:text-5xl lg:text-5xl p-1">
                Christian Faber
              </h1>
            </div>
            <div className="grid grid-cols-[4fr,1fr,4fr] h-1/3">
              <h1 className="text-lg md:text-2xl lg:text-2xl text-right w-full">
                Developer
              </h1>
              <h1 className="text-lg md:text-2xl lg:text-2xl text-center">
                ||
              </h1>
              <h1 className="text-lg md:text-2xl lg:text-2xl text-left w-full">
                Analyst
              </h1>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col justify-evenly items-center h-1/3">
          <div className="flex justify-evenly w-full h-1/4">
            <button className="rounded-md shadow-md bg-ivory-200 flex items-center justify-center aspect-square">
              <a href="mailto:christian@communitypursuit.com">
                <TfiEmail />
              </a>
            </button>
            <button className="rounded-md shadow-md bg-ivory-200 flex items-center justify-center aspect-square">
              <a href="tel:+16628747153">
                <HiOutlineDevicePhoneMobile />
              </a>
            </button>
            <button className="rounded-md shadow-md bg-ivory-200 flex items-center justify-center aspect-square">
              <a href="https://calendar.google.com/calendar/selfsched?sstoken=UU15OWl1ejhTS2tKfGRlZmF1bHR8NTczODc3OWM0NDExYzU3YTY0YjAzZmVkZWI2ZTJlOWE">
                <IoCalendarOutline />
              </a>
            </button>
          </div>
          <div className="flex justify-evenly w-full h-1/4">
            <button className="rounded-md shadow-md bg-ivory-200 flex items-center justify-center aspect-square">
              <a
                href="https://www.linkedin.com/in/christianfaber/"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedinOption />
              </a>
            </button>
            <button className="rounded-md shadow-md bg-ivory-200 flex items-center justify-center aspect-square">
              <a
                href="https://github.com/christian-faber"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </button>
            <button className="rounded-md shadow-md bg-ivory-200 flex items-center justify-center aspect-square">
              <a
                href="https://public.tableau.com/app/profile/christian1024"
                target="_blank"
                rel="noreferrer"
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
