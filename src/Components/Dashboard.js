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
      modalState: false
    };
  }

  toggleModal = () => {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="columns">
          <div className="column is-one-quarter">
            <section className="section">
              <ActivityList />
              <ActivityModal
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
