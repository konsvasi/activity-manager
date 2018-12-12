import React, { Component } from "react";
import axios from "axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";

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

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isActive: false
    };
  }

  handleInput = async ev => {
    const value = ev.target.value;

    const searchObj = { searchTerm: ev.target.value };
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

  Dropdown = props => {
    const listOfResults = props.results.map((movie, index) => {
      return (
        <div key={index}>
          <a className="dropdown-item">
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
          <hr className="dropdown-divider" />
        </div>
      );
    });

    return <div>{listOfResults}</div>;
  };

  render() {
    const isActiveStyle = this.state.isActive
      ? "dropdown is-active"
      : "dropdown";

    return (
      <div className="dropdown is-active">
        <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="field dropdown-item">
              <div className="control">
                <input
                  type="text"
                  placeholder="Choose your movies"
                  onChange={this.handleInput}
                />
              </div>
              <this.Dropdown results={this.state.results} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
