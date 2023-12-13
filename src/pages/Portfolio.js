import portfolio from "../data/portfolio.json";
import { PortfolioTile } from "../components/PortfolioTile";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
      <div>
        <Link to="/">Home</Link>
        <Link to="/experience">experience</Link>
        <Link to="/portfolio">portfolio</Link>
      </div>
      {portfolio.portfolio.map((item) => (
        <PortfolioTile item={item} />
      ))}
    </div>
  );
};
