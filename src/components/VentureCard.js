export const VentureCard = ({ venture, index }) => {
  return (
    <div className="p-3">
      <h1 className="uppercase font-bold">{venture.title}</h1>
      <div className="flex items-center flex-col">
        <img
          className="w-3/4 m-auto"
          src={venture.photoFileLocation}
          alt="There's supposed to be a photo here."
        ></img>
        <h2>Mission</h2>
        <p>{venture.mission}</p>
        <h2>Summary</h2>
        <p>{venture.summary}</p>
      </div>
    </div>
  );
};
