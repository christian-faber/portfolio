import React from "react";
import { ExperienceCard } from "../components/ExperienceCard";
import experience from "../data/experience.json";

export const Experience = () => {
  return (
    <div className="flex flex-col items-center">
      {experience.experiences.map((experience, index) => (
        <div
          key={index}
          className="timeline-item flex w-11/12 m-4 relative group min-h-[100px]"
        >
          {/* Circle */}
          <div
            className="w-3 h-3 bg-slate-500 rounded-full
           absolute top-1/2 left-2 -translate-x-1/2 
           -translate-y-1/2 group-hover:bg-blue-700"
          ></div>
          {/* Line */}
          <div
            className="absolute left-12 top-1/2 w-1/12 
           bg-slate-500 h-[2px] -translate-x-1/2 
           -translate-y-1/2 group-hover:bg-blue-700"
          ></div>
          {/* Box */}
          <ExperienceCard position={experience} />
        </div>
      ))}
    </div>
  );
};
// Notes for how to add color gradient to circles
// import { FiCheck } from 'react-icons/fi';

// //...

// <svg width="0" height="0">
//   <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
//     <stop stopColor="#7a6ded" offset="0%" />
//     <stop stopColor="#591885" offset="100%" />
//   </linearGradient>
// </svg>

// <FiCheck style={{ stroke: "url(#blue-gradient)" }} />
