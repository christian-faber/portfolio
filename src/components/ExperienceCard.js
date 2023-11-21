import { useState } from "react";

export const ExperienceCard = ({ position }) => {
  const [sayMore, setSay] = useState(false);
  return (
    <>
      <div
        onClick={() => setSay(!sayMore)}
        className=" w-4/5 p-2 border border-slate-500 bg-slate-50
            lg:group-hover:border-blue-700 roundedbg-gray-100 
            relative left-8 lg:group-hover:bg-white transform 
             lg:group-hover:scale-105 transition-transform lg:group-hover:shadow-md"
      >
        <h3 className="text-lg font-bold">{position.company}</h3>
        <h3 className="text-lg font-bold ml-4 italic">
          {position.title} | {position.date}
        </h3>
        <p>{position.summary}</p>
        <div className="flex items-center align-middle justify-center">
          {!sayMore && <p className="text-3xl">+</p>}
          {sayMore && <p className="text-3xl">-</p>}
        </div>
        {sayMore && (
          <ul className="list-disc pl-4">
            {position.accomplishments.map((experience, index) => (
              <li key={index} classname="p-4">
                {experience}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
