import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { SmallSideBar } from "./SmallSideBar";

export const MenuButton = (setTitle) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!isOpen)}
        className="rounded-full flex justify-center 
      items-center"
      >
        <Hamburger toggle={(isOpen, setOpen)} rounded size={24} color="white" />
        <div>
          {isOpen && (
            <SmallSideBar
              isOpen={isOpen}
              setOpen={setOpen}
              setTitle={setTitle}
            />
          )}
        </div>
      </div>
    </>
  );
};
