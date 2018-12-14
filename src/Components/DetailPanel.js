import React from "react";
import FilmSearchBar from "./FilmSearchBar";
import MovieCardList from "./MovieCardList";

const isEmptyObj = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};

const DetailPanel = ({ activeSession }) => {
  console.log("activeSession:", activeSession);
  if (isEmptyObj(activeSession)) {
    return (
      <div>
        <p className="title">No activities</p>
        <div className="content">
          <p>Create a new activity by clicking the "Add activity button"</p>
        </div>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="columns">
        <div className="column is-8">
          <p className="title">{activeSession.activityName}</p>
          <p className="subtitle">
            {activeSession.activityDate.toLocaleDateString()}
          </p>
          <div className="content">
            <p>Insert activity details</p>
            <section className="section">
              <MovieCardList />
            </section>
          </div>
        </div>
        <div className="column is-3 is-offset-1">
          <FilmSearchBar />
        </div>
      </div>
    </section>
  );
};

export default DetailPanel;
