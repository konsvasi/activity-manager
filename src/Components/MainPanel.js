import React, { Component } from "react";

import "bulma/css/bulma.css";

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
      <div>
        <p className="title">{activityName}</p>
        <p className="subtitle">{activityDate.toLocaleString()}</p>
        <div className="content">
          <p>Insert activity details</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="tile-is-ancestor">
        <div className="tile">
          <article className="tile is-child notification is-primary">
            <this.DetailPanel activeSession={this.props.activeSession} />
          </article>
        </div>
      </div>
    );
  }
}

export default MainPanel;
