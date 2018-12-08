import React, { Component } from "react";
import NameField from "./NameField";
import Datepicker from "./Datepicker";

class ActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {
        activityName: "",
        activityDate: "",
        activityFriends: ""
      },
      nameFieldIsEmpty: false,
      dateFieldIsEmpty: false
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

  handleDateChange = ev => {
    const newDate = ev.target.value;
    this.setState(prev => {
      return {
        activity: {
          activityName: prev.activityName,
          activityDate: newDate,
          activityFriends: prev.activityFriends
        }
      };
    });
  };

  // Clears the warning when input field has a value
  clearWarning = ev => {
    const inputValue = ev.target.value;
    if (inputValue !== "") {
      this.setState(prev => {
        return { nameFieldIsEmpty: false };
      });
    } else {
      this.setState(prev => {
        return { nameFieldIsEmpty: true };
      });
    }
  };

  // Does simple checks of the given values of the input fields
  // before actually calling the saveActivity function
  prepareSaveActivity = () => {
    console.log(
      "this.state.activityName:",
      this.state.activityName,
      "date:",
      this.state.activityDate
    );
    if (
      this.state.activity.activityName !== "" &&
      this.state.activity.activityDate !== ""
    ) {
      this.props.saveActivity(this.state.activity);
      this.props.closeModal();
    } else if (this.state.activity.activityName === "") {
      this.setState(prev => {
        return { nameFieldIsEmpty: true };
      });
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
                  <NameField
                    isEmpty={this.state.nameFieldIsEmpty}
                    handleNameChange={this.handleNameChange}
                    clearWarning={this.clearWarning}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">When?</label>
                <div className="control">
                  <Datepicker onChange={this.handleDateChange} />
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
