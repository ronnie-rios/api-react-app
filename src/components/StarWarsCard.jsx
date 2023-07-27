/* eslint-disable react/prop-types */

const StarWarsCard = ({ data }) => {
  const { name, birthyear, homeworld, model } = data;
  return (
    <div className="p-2 border rounded-md border-black">
      <h3 className="text-xl">{name}</h3>
      <p>{birthyear ? `Birthyear: ${birthyear}` : null}</p>
      <p>{homeworld ? `Homeworld: ${homeworld.name}` : null}</p>
      <p>{model ? `Model: ${model}` : null}</p>
    </div>
  );
};

export default StarWarsCard;
