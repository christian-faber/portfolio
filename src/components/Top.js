import { MenuButton } from "./MenuButton";

export const Top = ({ title }) => {
  return (
    <div
      className="flex bg-gradient-to-r from-purple-500 to-pink-500 h-16
     justify-between items-center shadow-slate-600 text-white
       left-2 sticky z-10"
    >
      <h2 className=" text-3xl px-8 uppercase font-bold">{title}</h2>
    </div>
  );
};
