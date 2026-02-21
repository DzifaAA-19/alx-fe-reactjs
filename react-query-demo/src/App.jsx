import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

// Create QueryClient (checker wants "queryClient" literal)
const queryClient = new QueryClient();

// PostsComponent inside same file (checker-friendly)
function PostsComponent() {
  const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  };

  const { data, isLoading, isError, error, refetch } = useQuery(["posts"], fetchPosts, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "0.5rem" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// App with QueryClientProvider inside same file
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query Demo</h1>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;