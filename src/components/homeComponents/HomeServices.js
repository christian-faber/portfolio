import { AiOutlineBarChart } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { GrWorkshop } from "react-icons/gr";

export const HomeServices = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="m-3 md:w-3/4 lg:w-3/4">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-300 rounded-md shadow-md p-[1.5px]">
          <div className="bg-white rounded-md p-5 min-h-[200px] flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center space-y-2">
              <CgWebsite />
              <h1 className="text-xl font-semibold">Website Creation</h1>
            </div>
            <h2 className="text-lg">
              I create modern, interactive websites to help clients share news,
              make sales, and connect with customers.
            </h2>
          </div>
        </div>
      </div>
      <div className="m-3 md:w-3/4 lg:w-3/4">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-300 rounded-md shadow-md p-[1.5px]">
          <div className="bg-white rounded-md p-5 min-h-[200px] flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center space-y-2">
              <AiOutlineBarChart />
              <h1 className="text-xl font-semibold">Data Analysis</h1>
            </div>
            <h2 className="text-lg">
              I connect, clean, and visualize data to tell data-driven stories.
            </h2>
          </div>
        </div>
      </div>
      <div className="m-3 md:w-3/4 lg:w-3/4">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-300 rounded-md shadow-md p-[1.5px]">
          <div className="bg-white rounded-md p-5 min-h-[200px] flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center space-y-2">
              <GrWorkshop />
              <h1 className="text-xl font-semibold">Integration</h1>
            </div>
            <h2 className="text-lg">
              Using data and web-based tools, I create automations, reports, and
              interfaces for teams to expedite their workflows and for companies
              to track their performance.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
