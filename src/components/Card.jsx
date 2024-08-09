import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThumbsUp } from "react-icons/fa6";

const Card = ({ movie }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Link href={`/movie/${movie.id}`}>
          <Image
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title || movie.name}
            width={500}
            height={500}
          ></Image>
        </Link>
        <div className="flex items-center gap-2 bg-red-600 py-1 px-2 rounded w-max text-sm absolute top-3 left-3 text-slate-200">
          <FaThumbsUp />
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="text-red-600">
        {movie.media_type && movie.media_type.toUpperCase()}
      </div>
      <Link className="text-lg font-bold" href={`/movie/${movie.id}`}>
        {movie.title || movie.name}
      </Link>
      <div className="text-slate-400">
        {(movie.release_date && movie.release_date.substring(0, 4)) ||
          (movie.first_air_date && movie.first_air_date.substring(0, 4))}
      </div>
    </div>
  );
};

export default Card;
