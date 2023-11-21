import { VentureCard } from "../components/VentureCard";
import venture from "../data/venture.json";

export const Ventures = () => {
  return (
    <div className="m-10 border border-black shadow-md rounded-md">
      {venture.ventures.map((venture, index) => (
        <VentureCard venture={venture} index={index} />
      ))}
    </div>
  );
};
