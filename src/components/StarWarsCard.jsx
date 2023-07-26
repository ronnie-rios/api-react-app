/* eslint-disable react/prop-types */

const StarWarsCard = ({ data }) => {
  const { name, birthyear, homeworld, model } = data;
  return (
    <div>
      <h3>{name}</h3>
      <p>{birthyear ? `Birthyear: ${birthyear}` : null}</p>
      <p>{homeworld ? `Homeworld: ${homeworld.name}` : null}</p>
      <p>{model ? `Model: ${model}` : null}</p>
    </div>
  );
};

export default StarWarsCard;
