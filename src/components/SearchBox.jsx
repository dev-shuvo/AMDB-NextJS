"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        className="md:w-96 h-11 p-1 border-2 border-slate-300 rounded-l focus:outline-none focus:border-red-600 bg-slate-300 placeholder:text-slate-600 dark:border-slate-700 dark:bg-slate-700 dark:focus:border-red-600 dark:placeholder:text-slate-400 "
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="md:w-12 h-11 flex justify-center items-center text-2xl p-2 bg-red-600 border-2 border-red-600 rounded-r text-slate-200 hover:bg-red-800 hover:border-red-800"
        disabled={!search}
      >
        <IoSearchOutline />
      </button>
    </form>
  );
};

export default SearchBox;
