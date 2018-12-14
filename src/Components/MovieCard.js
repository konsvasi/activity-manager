import React from "react";

const MovieCard = props => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is 4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder"
          />
        </figure>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
