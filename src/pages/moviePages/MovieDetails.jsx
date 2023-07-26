import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SINGLE_MOVIE_QUERY } from "../../lib/queries";
import StarWarsCard from "../../components/StarWarsCard";

const MovieDetails = () => {
  const { id } = useParams();
  const [active, setActive] = useState({
    chars: false,
    vehicles: false,
    starships: false,
  });

  const toggleSection = (section) => {
    setActive((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const { loading, error, data } = useQuery(SINGLE_MOVIE_QUERY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const {
    title,
    director,
    releaseDate,
    characterConnection,
    vehicleConnection,
    starshipConnection,
  } = data.film;

  const chars = characterConnection.characters;
  const vehicles = vehicleConnection.vehicles;
  const starships = starshipConnection.starships;

  return (
    <section>
      <h1>{title}</h1>
      <p>Directed by: {director}</p>
      <p>Released: {releaseDate}</p>

      <button onClick={() => toggleSection("chars")}>View Characters</button>
      {active.chars && chars && chars.length > 0 && (
        <>
          <h2>Characters</h2>
          <ul>
            {chars.map((character, i) => (
              <StarWarsCard data={character} key={i} type="chars" />
            ))}
          </ul>
        </>
      )}

      <button onClick={() => toggleSection("vehicles")}>View Vehicles</button>
      {active.vehicles && vehicles && vehicles.length > 0 && (
        <>
          <h2>Vehicles</h2>
          <ul>
            {vehicles.map((vehicle, i) => (
              <StarWarsCard data={vehicle} key={i} type="vehicle" />
            ))}
          </ul>
        </>
      )}

      <button onClick={() => toggleSection("starships")}>View Starships</button>
      {active.starships && starships && starships.length > 0 && (
        <>
          <h2>starships</h2>
          <ul>
            {starships.map((starship, i) => (
              <StarWarsCard data={starship} key={i} type="starship" />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default MovieDetails;
