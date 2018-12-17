import React from "react";
import "./MovieCard.css";

const MovieCard = props => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image poster">
          <img src={props.movie.Poster} alt="Placeholder" className="poster" />
        </figure>
        <div className="card-content">
          <div className="content">
            <p className="subtitle">{props.movie.Title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
