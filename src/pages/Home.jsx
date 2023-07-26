import Card from "../components/Card";
import useFetchData from "../hooks/useFetchData";
import { getPosts } from "../services/apiService";
import { useState } from "react";

const Home = () => {
  //destructure object from the custom hook,
  //renaming the data to posts
  const [page, setPage] = useState(1);
  const { data: posts, loading, error } = useFetchData(getPosts, page);

  return (
    <main className="p-10">
      <h1 className="text-2xl text-strong pb-10">Posts</h1>
      <div className="flex items-center justify-between">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} disabled={page === 10}>Next</button>
      </div>
      {loading ? <p className="p-10">Loading...</p> : posts.map((post) => (
        <Card key={post.id} data={post} type='post' />
      ))}
      {error ? (
        <p className="text-2xl text-red-600">
          Sorry there was an error: {error.message}
        </p>
      ) : (
        ""
      )}
      
    </main>
  );
};

export default Home;
