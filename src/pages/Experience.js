import React from "react";
import { ExperienceCard } from "../components/ExperienceCard";
import experience from "../data/experience.json";

export const Experience = () => {
  return (
    <div className="flex flex-col items-center bg-slate-200">
      {experience.experiences.map((experience, index) => (
        <ExperienceCard position={experience} key={index} />
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
