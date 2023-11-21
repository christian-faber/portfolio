import { MenuButton } from "./MenuButton";

export const Top = ({ title, setTitle }) => {
  return (
    <div
      className="flex bg-slate-500 border-b-2 border-b-slate-300 h-16
     justify-between items-center shadow-slate-600 text-white
      top-2 left-2 sticky z-10"
    >
      <h2 className=" text-3xl px-8 uppercase font-bold">{title}</h2>
      <MenuButton title={title} setTitle={setTitle} />
    </div>
  );
};
