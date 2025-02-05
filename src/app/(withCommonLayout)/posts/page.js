import PostCard from "@/components/PostCard";
import React from "react";

const PostsPage = async () => {
  const res = await fetch("http://localhost:3004/posts", {
    cache: "no-store",
  });

  const posts = await res.json();

  return (
    <div>
      <h1>Posts Page</h1>
      <div className="grid grid-cols-3 mx-auto">
        {posts.map((post) => (
          <PostCard
            title={post.title}
            description={post.description}
            key={post.id}
            imageSrc={post.picture}
            link={"facebook.com"}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
