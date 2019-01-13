import React, { Component } from "react";
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

class DetailPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSession: props.activeSession,
      moviesForVote: []
    };
  }

  addMovie = movie => {
    const movieWithVoteEntry = Object.assign({ votes: 1 }, movie);
    this.setState(prevState => ({
      moviesForVote: [...prevState.moviesForVote, movieWithVoteEntry]
    }));
  };

  voteMovie = movie => {
    console.log("Voted for this movie increase vote count by one", movie);
  };

  render() {
    if (isEmptyObj(this.props.activeSession)) {
      return (
        <div>
          <p className="title">No activities</p>
          <div className="content">
            <p className="content-message">
              Create a new activity by clicking the "Add activity button"
            </p>
          </div>
        </div>
      );
    }

    return (
      <section className="section">
        <div className="columns">
          <div className="column is-8">
            <p className="title">{this.props.activeSession.activityName}</p>
            <p className="subtitle">
              {this.props.activeSession.activityDate.toLocaleDateString()}
            </p>
            <div className="content">
              <p>Insert activity details</p>
              <MovieCardList
                moviesForVote={this.state.moviesForVote}
                voteMovie={this.voteMovie}
              />
            </div>
          </div>
          <div className="column is-3 is-offset-1">
            <FilmSearchBar addMovie={this.addMovie} />
          </div>
        </div>
      </section>
    );
  }
}

export default DetailPanel;
