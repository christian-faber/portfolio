import { useState } from "react";

export const ExperienceCard = ({ position }) => {
  const [sayMore, setSay] = useState(false);
  return (
    <div className="w-11/12 m-2 flex min-h-[200px] border border-black">
      {/* circle and date */}
      <div className="flex relative -top-1.5 -left-1.5 w-72 bg-slate-200 h-4">
        <div className="rounded-full h-4 w-4 bg-blue-500 shadow-[0_0_0_6px_#E2E8F0]"></div>
      </div>
      <div className="flex relative -top-1.5 -left-1.5 bg-slate-200 h-4">
        <p className="h-3 text-[10px]">{position.date}</p>
      </div>
      <div className="flex flex-col pl-2">
        {/* date and position container */}
        <div>
          <h1>{position.company}</h1>
          <h2>{position.title}</h2>
        </div>
        <div>
          <h2>{position.summary}</h2>
        </div>
      </div>
      {/* sayMore && (
          <ul className="list-disc pl-4">
            {position.accomplishments.map((accomplishment, index) => (
              <li key={index} classname="p-4">
                {accomplishment}
              </li>{
            ))}
          </ul>
        )} */}
    </div>
  );
};
