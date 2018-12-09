import React, { Component } from "react";

import "bulma/css/bulma.css";

class MainPanel extends Component {
  render() {
    return (
      <div className="tile-is-ancestor">
        <div className="tile">
          <article className="tile is-child notification is-primary">
            <p className="title">Activity name</p>
            <div className="content">
              <p>Insert activity details</p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default MainPanel;
