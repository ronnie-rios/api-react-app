import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getPosts } from "../services/apiService";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setLoading(false);
      setPosts(data);
    };
    fetchData();
  }, []);

  if (loading) return <p>loading</p>;

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
