/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
  const navigate = useNavigate();

  //render card
  const renderPostCard = () => {
    const { id, title } = data;
    return (
      <div className="border rounded-md border-gray-500 p-10 my-4">
        <h1 className="text-xl font-bold">
          {type === 'post' ? `${id}: ` : ''} {title}
        </h1>
        {type === 'post' && (
          <button
            className="bg-green-500 p-2 text-white rounded-md mt-8"
            onClick={() => navigate(`/details/${id}`)}
          >
            View Details
          </button>
        )}
      </div>
    );
  };

  //render movies
  const renderFilmCard = () => {
    const { id, title, director, releaseDate } = data;
    console.log(data);
    return (
      <div className="border rounded-md border-gray-500 p-10 my-4">
        <h1 className="text-xl font-bold">
          {type === 'film' ? `${id}: ` : ''} {title}
        </h1>
        {type === 'film' && (
          <>
            <p>Directed by: {director}</p>
            <p>Released: {releaseDate}</p>
          </>
        )}
      </div>
    );
  };

  return type === 'post' ? renderPostCard() : renderFilmCard();
}

export default Card