import portfolio from "../data/portfolio.json";
import { PortfolioSquare } from "../components/PortfolioSquare";

export const Portfolio = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
      {portfolio.portfolio.map((item) => (
        <PortfolioSquare item={item} />
      ))}
    </div>
  );
};
