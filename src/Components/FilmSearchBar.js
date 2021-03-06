import React, { Component } from "react";
import axios from "axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";

import "../css/FilmSearchBar.css";

const searchApi = searchTerm =>
  axios.post(
    "http://localhost:3000/findMovie",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      params: { searchTerm: searchTerm }
    }
  );

const searchApiDebounced = AwesomeDebouncePromise(searchApi, 500);

let movies = [];

const DropDown = props => {
  const addMovie = id => {
    props.addMovie(movies[id]);
  };

  const listOfResults = props.results.map((movie, index) => (
    <div
      className="result"
      key={index}
      id={index}
      onClick={() => {
        addMovie(index);
      }}
    >
      <a className="dropdown-item" href="#" id={index}>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={movie.Poster} alt="Movie Poster" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{movie.Title}</strong>
              </p>
            </div>
          </div>
        </article>
      </a>
    </div>
  ));

  movies = props.results;
  if (props.results.length === 0) {
    return null;
  }

  return (
    <div className="dropdown is-active">
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <div className="results">{listOfResults}</div>
        </div>
      </div>
    </div>
  );
};

class FilmSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isActive: false
    };
  }

  handleInput = async ev => {
    const resultsBody = await searchApiDebounced(ev.target.value);
    const results = await resultsBody;

    if (results.data.Search) {
      this.setState(prevState => ({
        results: results.data.Search
      }));
    } else {
      this.setState(prevState => ({ results: [] }));
    }
  };

  render() {
    return (
      <div className="is-fluid">
        <div className="field field_style">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Choose your movies"
              onChange={this.handleInput}
            />
          </div>
        </div>

        <section className="section is-paddingless">
          <DropDown
            results={this.state.results}
            addMovie={this.props.addMovie}
          />
        </section>
      </div>
    );
  }
}

export default FilmSearchBar;
