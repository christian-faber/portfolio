import { IconContext } from "react-icons";
import { HomePortfolio } from "../components/homeComponents/HomePortfolio";
import { HomeServices } from "../components/homeComponents/HomeServices";
import { Cover } from "../components/homeComponents/Cover";

export const Home = () => {
  return (
    <IconContext.Provider value={{ size: 42 }}>
      <div className="h-screen overflow-auto">
        {/* Intro Section */}
        <Cover />
        {/* Experiences button, lg:hidden */}
        {/* Sticky menu when scroll down: Experience and Portfolio, hidden on sm & md */}
        {/* Current Services */}
        <div className="p-4 bg-slate-200">
          <HomeServices />
        </div>
        {/* Portfolio */}
        <div className="p-4 w-full bg-slate-800">
          <HomePortfolio />
        </div>
      </div>
    </IconContext.Provider>
  );
};
