import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export const ExperienceCard = ({ position }) => {
  const [sayMore, setSay] = useState(false);

  return (
    <div className="group w-11/12 m-4 flex min-h-[200px] relative p-4 rounded-md">
      {/* circle and date */}
      <div className="flex items-center absolute -top-2 -left-2 w-28 bg-slate-200 h-4">
        <div className="rounded-full h-4 w-4 bg-blue-500 shadow-[0_0_0_6px_#E2E8F0]"></div>
        <p className="pl-2 h-4 text-[10px]">{position.date}</p>
      </div>
      {/* date and position container */}
      <div className="flex flex-col border transition-all duration-300 ease-in-out transform group-hover:border-green-300 group-hover:shadow-lg">
        <div className="border-red-300 border p-2">
          <h1 className="text-lg font-bold uppercase">{position.company}</h1>
          <h2 className="pl-2 text-md font-semibold">{position.title}</h2>
        </div>
        <div>
          <h2>{position.summary}</h2>
        </div>
      </div>
      {!sayMore && (
        <div
          onClick={() => setSay(!sayMore)}
          className="absolute -bottom-4 left-1/2 -ml-4 h-8 w-8 rounded-full flex justify-center items-center bg-slate-200 shadow-md"
        >
          <FiPlus />
        </div>
      )}
      {sayMore && (
        <div
          onClick={() => setSay(!sayMore)}
          className="absolute -bottom-4 left-1/2 -ml-4 h-8 w-8 rounded-full flex justify-center items-center bg-slate-200 shadow-md"
        >
          <FiMinus />
        </div>
      )}
    </div>
  );
};
