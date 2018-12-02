import React, { Component } from "react";
import Particles from "react-particles-js";
import SignInRegister from "./Components/SignInRegister";
import "bulma/css/bulma.css";
import "./App.css";

const particlesConfig = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesConfig} />
        <section className="section">
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
