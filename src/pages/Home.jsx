import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getPosts } from "../services/apiService";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>loading</p>;

  if(error) return <p className="text-2xl text-red-600">Sorry there was an error</p>

  return (
    <main className="p-10">
      <h1 className="p-4">Posts</h1>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Home;
