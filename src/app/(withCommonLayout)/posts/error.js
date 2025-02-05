"use client";
import React from "react";

const PostErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-center text-lg text-red-500">
        Something went wrong...
      </h1>
      <h1 className="text-center text-lg text-red-500">{error.message}</h1>
      <div className="mx-auto text-center">
        <button
          onClick={() => reset()}
          className="text-red-600 text-bold text-center btn btn-danger"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PostErrorPage;
