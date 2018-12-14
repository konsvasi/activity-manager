import React, { Component } from "react";

const styles = {
  maxWidth: 245
};

class FilmSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Choose your movies"
            />
          </div>
        </div>

        <section className="section is-paddingless">
          <div className="dropdown is-active float-left">
            <div className="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">
                  Movie 1
                </a>
                <a href="#" className="dropdown-item">
                  Movie 1
                </a>
                <a href="#" className="dropdown-item">
                  Movie 1
                </a>
                <a href="#" className="dropdown-item">
                  Movie 1
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FilmSearchBar;
