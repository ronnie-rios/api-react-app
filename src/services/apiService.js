export  async function getPosts(page) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch posts.");
  }
}

export async function getPostById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch post.");
  }
}
