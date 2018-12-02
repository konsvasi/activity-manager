import React, { Component } from "react";
import FormButtons from "./FormButtons";

import "bulma/css/bulma.css";

class SignInRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMember: false
    };
  }

  toggleCardFields = () => {
    this.setState({ isMember: !this.state.isMember });
  };

  render() {
    let title = "Register";
    if (this.state.isMember) {
      title = "Sign In";
    }

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" placeholder="Username" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Username"
                />
              </div>
            </div>
            <FormButtons
              toggleCardFields={this.toggleCardFields}
              isMember={this.state.isMember}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInRegister;
