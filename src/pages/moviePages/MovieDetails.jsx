import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SINGLE_MOVIE_QUERY } from "../../lib/queries";
import StarWarsCard from "../../components/StarWarsCard";
import SearchForm from "../../components/SearchForm";

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
  const allData = [...chars, ...vehicles, ...starships];

  const sectionInfo = [
    {
      key: "chars",
      title: "Characters",
      data: chars,
      type: "chars",
    },
    {
      key: "vehicles",
      title: "Vehicles",
      data: vehicles, //data from the quey
      type: "vehicle",
    },
    {
      key: "starships",
      title: "Starships",
      data: starships,
      type: "starship",
    },
  ];


  return (
    <section className="p-10 max-w-screen-xl mx-auto">
      <div className="items-center m-2">
        <h1 className="text-strong text-2xl">{title}</h1>
        <p>Directed by: {director}</p>
        <p>Released: {releaseDate}</p>
      </div>


      <div>
        <SearchForm allData={allData}/>
      </div>

      {sectionInfo.map((section) => (
        <div key={section.key}>
          <div className="py-2">
            <button
              className="bg-gray-100 p-2 rounded-md hover:bg-slate-600 hover:text-white"
              onClick={() => toggleSection(section.key)}
            >
              {active[section.key] ? "Close" : `View ${section.title}`}
            </button>
          </div>
          {active[section.key] && section.data && section.data.length > 0 && (
            <>
              <h2 className="text-xl border-b-2 border-black mb-2">
                {section.title}
              </h2>
              <ul className="grid grid-cols-3 gap-4 py-10">
                {section.data.map((item, i) => (
                  <StarWarsCard data={item} key={i} type={section.type} />
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default MovieDetails;
