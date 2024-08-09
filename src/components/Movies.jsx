import React from "react";
import Card from "./Card";

const Movies = ({ results }) => {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 max-w mx-auto gap-y-8 gap-x-6">
      {results.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Movies;
