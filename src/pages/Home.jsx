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

  if (loading) return <p className="p-10">loading</p>;


  return (
    <main className="p-10">
      <h1 className="text-2xl text-strong pb-10">Posts</h1>
      {error ? <p className="text-2xl text-red-600">Sorry there was an error: {error.message}</p> : ''}
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Home;
