import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThumbsUp } from "react-icons/fa6";

export const generateMetadata = async ({ params }) => {
  const movieId = params.id;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movie = await response.json();

  return {
    title: movie.title,
  };
};

async function Movie({ params }) {
  const movieId = params.id;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movie = await response.json();
  return (
    <div className="flex flex-col md:flex-row gap-14">
      <div className="relative">
        <Link href={`/movie/${movie.id}`}>
          <Image
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title || movie.name}
            width={800}
            height={500}
          ></Image>
        </Link>
        <div className="flex items-center gap-2 bg-red-600 py-1 px-2 rounded w-max text-sm absolute top-3 left-3 text-slate-200">
          <FaThumbsUp />
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-5xl font-bold text-red-600">
          {movie.title || movie.name}
        </h1>
        <div className="bg-slate-300 dark:bg-slate-700 p-5 rounded">
          <div className="font-bold mb-5">Summary</div>
          {movie.overview}
        </div>
        <div>
          <span className="font-bold">Release Year: </span>
          {(movie.release_date && movie.release_date.substring(0, 4)) ||
            movie.first_air_date.substring(0, 4)}
        </div>
        <div>
          <div className="font-bold mb-3">Genres</div>
          <div className="flex gap-2">
            {movie.genres.map((genre) => (
              <span
                className="bg-slate-300 dark:bg-slate-700 p-2 rounded"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="font-bold">Budget:</span>{" "}
          {movie.budget.toLocaleString()}
        </div>
        <div>
          <span className="font-bold">Runtime:</span> {movie.runtime} Minutes
        </div>
        <div className="bg-slate-300 dark:bg-slate-700 p-5 rounded">
          <div className="font-bold mb-5">Production Companies</div>
          <div className="flex gap-10 items-start sm:items-center flex-col sm:flex-row">
            {movie.production_companies.map((item) => (
              <div key={item.id}>
                {item.logo_path && (
                  <Image
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                    alt={item.name}
                    width={100}
                    height={500}
                  ></Image>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
