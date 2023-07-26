import useGraphQLQuery from '../hooks/useGraphQLQuery';
import Card from '../components/Card';
import { MOVIES_QUERY } from "../lib/queries";

const AllRocketPage = () => {
  const { loading, error, data } = useGraphQLQuery(MOVIES_QUERY);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.allFilms || !data.allFilms.films) {
    return <p>No films available.</p>;
  }

  const films = data.allFilms.films;

  return (
    <div>
      <h1>Star War Movies</h1>
      {films.map((film) => (
        <Card key={film.id} data={film} type="film" />
      ))}
    </div>
  );
};

export default AllRocketPage;
