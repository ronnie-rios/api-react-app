//import useGraphQLQuery from '../hooks/useGraphQLQuery';
import Card from '../components/Card';
import { MOVIES_QUERY } from "../lib/queries";
import { useQuery } from '@apollo/client';

const AllRocketPage = () => {
  const { loading, error, data } = useQuery(MOVIES_QUERY);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.allFilms || !data.allFilms.films) {
    return <p>No films available.</p>;
  }

  const films = data.allFilms.films;

  return (
    <div className='p-10'>
      <h1>Star War Movies</h1>
      {films.map((film) => (
        <Card key={film.id} data={film} type="film" />
      ))}
    </div>
  );
};

export default AllRocketPage;
