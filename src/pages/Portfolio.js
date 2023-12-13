import portfolio from "../data/portfolio.json";
import { PortfolioTile } from "../components/PortfolioTile";

export const Portfolio = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
      {portfolio.portfolio.map((item) => (
        <PortfolioTile item={item} />
      ))}
    </div>
  );
};
