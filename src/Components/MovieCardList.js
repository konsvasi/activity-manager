import React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = props => {
  const movieList = props.moviesForVote.map((movie, index) => (
    <MovieCard movie={movie} key={index} />
  ));

  return <div>{movieList}</div>;
};

export default MovieCardList;
