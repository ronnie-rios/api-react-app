class ApiService {
    static async getPosts() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('failed to get')
        }
    }

    static async getSinglePost(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('failed to get')
        }
    }
}

export default ApiService;

export async function getPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch posts.');
    }
  }
  
  export async function getPostById(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch post.');
    }
  }
  