import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { getPostById } from "../../services/apiService";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, loading, error } = useFetchData(getPostById, id);

  if (loading) return <p className="p-10">loading</p>;
  return (
    <section className="p-10 max-w-screen-xl mx-auto">
      <h2 className=" text-2xl text-strong mb-4 border-b-2 border-black">
        Post Details
      </h2>
      {error ? (
        <p className="text-2xl text-red-600">
          Sorry there was an error: {error.message}
        </p>
      ) : (
        ""
      )}
      <h3 className="text-xl text-strong mb-4">
        {post.id}: {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </section>
  );
};

export default Details;
