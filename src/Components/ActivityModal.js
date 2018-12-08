import React, { Component } from "react";

class ActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {
        activityName: "",
        activityDate: "",
        activityFriends: ""
      }
    };
  }

  handleNameChange = ev => {
    ev.persist();

    this.setState((prev, props) => {
      const newName = ev.target.value;
      return {
        activity: {
          activityName: newName,
          activityDate: this.state.activity.activityDate,
          activityFriends: this.state.activity.activityFriends
        }
      };
    });
  };

  prepareSaveActivity = () => {
    if (this.state.activityName !== "") {
      this.props.saveActivity(this.state.activity);
      this.props.closeModal();
    }
  };

  render() {
    if (!this.props.modalState) {
      return null;
    }

    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create an activity</p>
          </header>
          <section className="modal-card-body">
            <div className="content">
              <div className="field">
                <label className="label">Give a name to your activity</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Activity name"
                    onBlur={this.handleNameChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">When?</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Date placeholder"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Who?</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Invite some friends"
                  />
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-primary"
              onClick={this.prepareSaveActivity}
            >
              Save
            </button>
            <button className="button" onClick={this.state.closeModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default ActivityModal;
