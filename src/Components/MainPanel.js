import React, { Component } from "react";
import FilmSearchBar from "./FilmSearchBar";
import MovieVote from "./MovieVote";
import DetailPanel from "./DetailPanel";

class MainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {
        name: "",
        date: "",
        friends: ""
      }
    };
  }

  // Check if object is empty
  isEmptyObj = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  };

  findMovie = ev => {
    console.log("searching", ev.target.value);
  };

  DetailPanel = props => {
    const { activityName, activityDate } = props.activeSession;
    if (this.isEmptyObj(props.activeSession)) {
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
        <p className="title">{activityName}</p>
        <p className="subtitle">{activityDate.toLocaleString()}</p>

        <div className="content">
          <p>Insert activity details</p>
          <FilmSearchBar />
        </div>
        <MovieVote />
      </section>
    );
  };

  render() {
    console.log("this.props.activeSession:", this.props.activeSession);
    return (
      <div className="tile-is-ancestor">
        <div className="tile">
          <article className="tile is-child notification is-primary is-bold">
            <DetailPanel activeSession={this.props.activeSession} />
          </article>
        </div>
      </div>
    );
  }
}

export default MainPanel;
