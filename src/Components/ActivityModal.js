import React, { Component } from "react";
import NameField from "./NameField";
import Datepicker from "./Datepicker";

class ActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFieldIsEmpty: false,
      dateFieldIsEmpty: false
    };
  }

  activity = {
    activityId: "",
    activityName: "",
    activityDate: "",
    activityFriends: ""
  };

  handleChange = ev => {
    ev.persist();
    const { name, value } = ev.target;
    const val = name === "activityDate" ? new Date(value) : value;
    this.activity[name] = val;
  };

  // Clears the warning when input field has a value
  clearWarning = ev => {
    const target = ev.target;
    const inputValue = ev.target.value;
    if (inputValue !== "") {
      if (target.type === "date") {
        this.setState(prev => {
          return { dateFieldIsEmpty: false };
        });
      } else {
        this.setState(prev => {
          return { nameFieldIsEmpty: false };
        });
      }
    } else {
      if (target.type === "date") {
        this.setState(prev => {
          return { dateFieldIsEmpty: true };
        });
      } else {
        this.setState(prev => {
          return { nameFieldIsEmpty: true };
        });
      }
    }
  };

  resetActivityValues = () => {
    this.activity = { activityName: "", activityDate: "", activityFriends: "" };
  };

  // Does simple checks of the given values of the input fields
  // before actually calling the saveActivity function
  prepareSaveActivity = () => {
    const { activityName, activityDate } = this.activity;
    if (activityName !== "" && activityDate !== "") {
      this.activity.activityId = activityName;
      this.props.saveActivity(this.activity);
      this.resetActivityValues();
      this.props.closeModal();
    } else if (activityName === "" && activityDate === "") {
      this.setState(prev => {
        return { nameFieldIsEmpty: true, dateFieldIsEmpty: true };
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
                    onChange={this.handleChange}
                    clearWarning={this.clearWarning}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">When?</label>
                <div className="control">
                  <Datepicker
                    isEmpty={this.state.dateFieldIsEmpty}
                    onChange={this.handleChange}
                    clearWarning={this.clearWarning}
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
