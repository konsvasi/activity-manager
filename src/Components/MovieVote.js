import React from "react";
import MovieCard from "./MovieCard";

const MovieVote = () => {
  return (
    <section className="section" style={{ paddingLeft: 0 }}>
      <p className="title">Movies for vote</p>
      <div className="columns is-multiline">
        <div className="column is-one-quarter">
          <MovieCard />
        </div>
        <div className="column is-one-quarter">
          <MovieCard />
        </div>
        <div className="column is-one-quarter">
          <MovieCard />
        </div>
      </div>
    </section>
  );
};

export default MovieVote;
