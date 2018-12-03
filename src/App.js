import React, { Component } from "react";
import SignInRegister from "./Components/SignInRegister";
import Background from "./Components/Background";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <Background />
          <div className="container">
            <div className="columns">
              <div className="column" />
              <div className="column is-one-third">
                <SignInRegister />
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
