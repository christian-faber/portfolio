import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export const ExperienceCard = ({ position }) => {
  const [sayMore, setSay] = useState(false);
  return (
    <div
      className={`w-11/12 my-4 flex min-h-[200px] border
     border-slate-300 bg-slate-200 relative p-4 
     rounded-md group 
     lg:hover:border-blue-600 lg:hover:shadow-xl ${
       sayMore && "border-blue-600 shadow-xl"
     }`}
      onClick={() => setSay(!sayMore)}
    >
      {/* circle and date */}
      <div className="flex items-center absolute -top-2 -left-2 w-28 bg-slate-200 h-4">
        <div
          className={`rounded-full h-4 w-4 bg-slate-500 shadow-[0_0_0_6px_#E2E8F0] lg:group-hover:bg-blue-600 ${
            sayMore && "bg-blue-600"
          }`}
        ></div>
        <p className="pl-2 h-4 text-[10px]">{position.date}</p>
      </div>
      {/* date and position container */}
      <div className="flex flex-col bg-slate-200">
        <div className="p-2">
          <h1 className="text-lg font-bold uppercase">{position.company}</h1>
          <h2 className="pl-2 text-md font-semibold">{position.title}</h2>
        </div>
        <div className="py-2">
          <h2>{position.summary}</h2>
        </div>
        {sayMore && (
          <div className="py-3">
            <ul className="list-disc pl-4">
              {position.accomplishments.map((accomplishment, index) => (
                <li key={index} classname="p-4">
                  {accomplishment}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div
        className="absolute -bottom-5 left-1/2 -ml-5 
        h-10 w-10 rounded-full flex justify-center items-center
        bg-slate-200 shadow-md border border-slate-300"
      >
        {!sayMore && <FiPlus />}
        {sayMore && <FiMinus />}
      </div>
    </div>
  );
};
