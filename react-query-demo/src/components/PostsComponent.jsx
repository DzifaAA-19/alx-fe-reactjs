import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../styles/posts.css"

export default function PostsComponent() {
  const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  };

  const { data, isLoading, isError, error, refetch } = useQuery(["posts"], fetchPosts, {
    staleTime: 1000 * 60 * 5, // cache 5 min
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
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}