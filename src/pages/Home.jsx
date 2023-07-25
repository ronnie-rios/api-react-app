import Card from "../components/Card";
import useFetchData from "../hooks/useFetchData";
import { getPosts } from "../services/apiService";

const Home = () => {
  const { data: posts, loading, error } = useFetchData(getPosts);

  if (loading) return <p className="p-10">loading</p>;

  return (
    <main className="p-10">
      <h1 className="text-2xl text-strong pb-10">Posts</h1>
      {error ? (
        <p className="text-2xl text-red-600">
          Sorry there was an error: {error.message}
        </p>
      ) : (
        ""
      )}
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Home;
