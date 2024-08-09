"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center">
      <h2>Something went wrong, Please try again later.</h2>
      <button
        className="text-xs p-2 bg-red-600 border-2 border-red-600 rounded text-slate-200 hover:bg-red-800 hover:border-red-800 mt-4"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
