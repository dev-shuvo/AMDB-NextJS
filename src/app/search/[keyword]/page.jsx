import Movies from "@/components/Movies";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const keyword = params.keyword;

  return {
    title: keyword,
  };
};

const Search = async ({ params }) => {
  const keyword = params.keyword;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${process.env.TMDB_API_KEY}`
  );
  const data = await response.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && <h3>No results found!</h3>}
      {results && <Movies results={results} />}
    </div>
  );
};

export default Search;
