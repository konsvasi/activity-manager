import React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = props => {
  const movieList = props.moviesForVote.map((movie, index) => (
    <div className="column is-one-third" key={index}>
      <MovieCard movie={movie} />
    </div>
  ));

  const DisplayTitle = () => {
    if (movieList.length > 0) {
      return <p className="title">Vote for the movies you like</p>;
    }

    return null;
  };

  return (
    <div>
      <DisplayTitle />
      <div className="columns is-multiline">{movieList}</div>
    </div>
  );
};

export default MovieCardList;
