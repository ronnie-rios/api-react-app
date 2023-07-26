import { useQuery } from "@apollo/client";
import { MOVIES_QUERY } from "../lib/queries";

const AllRocketPage = () => {
  const { loading, error, data } = useQuery(MOVIES_QUERY);
console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Star War Movies</h1>
      {/* {data.launches.map((launch) => (
        <div key={launch.id}>
          <h2>{launch.mission_name}</h2>
          <p>{launch.details}</p>
        </div>
      ))} */}
    </div>
  );
};

export default AllRocketPage;
