import React, { Component } from "react";
import ActivityModal from "./ActivityModal";
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
      <section className="section">
        <div className="container">
          <button className="button is-primary" onClick={this.toggleModal}>
            Add activity
          </button>
          <ActivityModal
            closeModal={this.toggleModal}
            modalState={this.state.modalState}
          />
        </div>
      </section>
    );
  }
}

export default Dashboard;
