import PostCard from "@/components/PostCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:3004/posts", {
    // cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const posts = await res.json();

  return (
    <div>
      <div className="py-10 text-red grid grid-cols-3 w-[95%] mx-auto">
        {posts.slice(0, 3).map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            imageSrc={post.picture}
            link={"youtube.com"}
            description={post.content}
          ></PostCard>
        ))}
      </div>
      <div className="text-center mx-auto mb-10">
        <Link className="btn btn-primary" href="/posts">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
