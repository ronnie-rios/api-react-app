/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Card = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
 
  return (
    <div className="border rounded-md border-gray-500 p-10 my-4">
      <h1 className="text-xl font-bold">{id}: {title}</h1>
      <button
        className="bg-green-500 p-2 text-white rounded-md mt-8"
        onClick={()=> navigate(`/details/${id}`)}>View Details</button>
    </div>
  )
}

export default Card