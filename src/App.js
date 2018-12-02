import React, { Component } from 'react';
import SignInRegister from './Components/SignInRegister';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-one-third">
                <SignInRegister />
              </div>
              <div className="column"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
