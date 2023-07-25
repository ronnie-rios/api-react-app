
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { getPostById } from "../services/apiService";

const Details = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useFetchData(getPostById, id);

  if (loading) return <p className="p-10">loading</p>;
  return (
    <section className="p-10">
      <h2>Post Details</h2>
      {error ? <p className="text-2xl text-red-600">Sorry there was an error: {error.message}</p> : ''}
      <h3>{post.id}: {post.title}</h3>
      <p>{post.body}</p>
    </section>
  );
};

export default Details;
