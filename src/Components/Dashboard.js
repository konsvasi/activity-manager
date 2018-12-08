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
      newActivity: {
        name: "",
        date: "",
        friends: ""
      },
      activities: []
    };
  }

  toggleModal = () => {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  };

  saveActivity = activity => {
    // console.log('save to db and update list', newActivity);
    const createdActivity = activity;
    // this.setState((prev, props) => {
    //   console.log('newState:', createdActivity);
    //   return { newActivity: createdActivity}
    // })
    const activities = [...this.state.activities, createdActivity];
    this.setState(prevState => {
      return { activities: activities };
    });
    console.log("new:", this.state.newActivity);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="columns">
          <div className="column is-one-quarter">
            <section className="section">
              <ActivityList activities={this.state.activities} />
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
          <div className="column">
            <MainPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
