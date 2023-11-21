import { Link } from "react-router-dom";
import portfolio from "../data/portfolio.json";

export const Portfolio = () => {
  return (
    <div>
      {portfolio.portfolio.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
