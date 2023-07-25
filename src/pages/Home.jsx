import Card from "../components/Card";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (!loading && posts) {
      fetchAll();
    }
  }, [loading]);

  const fetchAll = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setLoading(false);
    setPosts(data);
  };

  if (loading) return <p>loading</p>;

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
};

export default Home;
