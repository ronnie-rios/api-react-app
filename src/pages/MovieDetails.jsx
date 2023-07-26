import { useQuery } from "@apollo/client";
import { SINGLE_MOVIE_QUERY } from "../lib/queries";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();
  const { loading, error, data } = useQuery(SINGLE_MOVIE_QUERY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, director, releaseDate, openingCrawl, characterConnection } =
    data.film;
    const chars =characterConnection.characters
  console.log(chars);
  return (
    <div>
      <h1>{title}</h1>
      <p>Directed by: {director}</p>
      <p>Released: {releaseDate}</p>
      <p>Opening Crawl: {openingCrawl}</p>

      {chars && chars.length > 0 && (
        <>
          <h2>Characters</h2>
          <ul>
            {chars.map((character) => (
              <li key={character.name}>{character.name}</li>
            ))}
          </ul>
        </>
      )}

     
    </div>
  );
};

export default MovieDetails;
