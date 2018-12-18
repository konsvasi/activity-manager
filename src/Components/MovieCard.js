import React from "react";
import "../css/MovieCard.css";
import plusIcon from "../Resources/icon-plus.svg";

const Votes = props => {
  if (props.votes && props.votes > 0) {
    return (
      <div className="votes">
        <span className="tag is-info is-large">
          <p className="subtitle">Votes: {props.votes}</p>
        </span>
      </div>
    );
  }

  return null;
};

const MovieCard = props => {
  return (
    <div className="card">
      <div className="card-image imageWrapper">
        <Votes votes={props.movie.votes} />
        <img
          id="voteButton"
          onClick={props.voteMovie}
          src={plusIcon}
          alt="Plus icon"
        />
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
