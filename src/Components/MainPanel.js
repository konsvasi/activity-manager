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

  render() {
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
