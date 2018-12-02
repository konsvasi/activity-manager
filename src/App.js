import React, { Component } from "react";
import SignInRegister from "./Components/SignInRegister";
import Dashboard from "./Components/Dashboard";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
