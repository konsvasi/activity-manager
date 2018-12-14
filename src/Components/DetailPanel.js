import React from "react";
import FilmSearchBar from "./FilmSearchBar";

const DetailPanel = ({ activeSession }) => {
  if (activeSession.activityName === "" && activeSession.activityDate === "") {
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
      <div className="columns is-gapless">
        <div className="column is-8">
          <p className="title">{activeSession.activityName}</p>
          <p className="subtitle">{activeSession.activityDate}</p>
          <div className="content">
            <p>Insert activity details</p>
          </div>
        </div>
        <div className="column is-3">
          <FilmSearchBar />
        </div>
      </div>
    </section>
  );
};

export default DetailPanel;
