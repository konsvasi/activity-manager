import React, { Component } from "react";
import ActivityModal from "./ActivityModal";
import Navbar from "./Navbar";
import ActivityList from "./ActivityList";
import MainPanel from "./MainPanel";

import "bulma/css/bulma.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      activities: [],
      activeSession: {}
    };
  }

  toggleModal = () => {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  };

  saveActivity = activity => {
    const createdActivity = activity;
    this.setState(prevState => ({
      activities: [...prevState.activities, createdActivity],
      activeSession: createdActivity
    }));
  };

  // Gets the id of the clicked activity
  // and set the state in the MainPanel component
  // to show the detailed view of the activity
  getActivityId = id => {
    this.setState(prev => {
      const activity = prev.activities.find(element => {
        return element.activityId === id;
      });
      console.log("activity:", activity);
      return { activeSession: activity };
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="columns">
          <div className="column is-3">
            <section className="section">
              <ActivityList
                getActivityId={this.getActivityId}
                activities={this.state.activities}
              />
              <ActivityModal
                saveActivity={this.saveActivity}
                closeModal={this.toggleModal}
                modalState={this.state.modalState}
              />
              <button className="button is-primary" onClick={this.toggleModal}>
                Add activity
              </button>
            </section>
          </div>
          <div className="column is-9">
            <MainPanel activeSession={this.state.activeSession} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
