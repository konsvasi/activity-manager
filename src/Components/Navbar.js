import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="navbar has-shadow" role="navigation">
      <div className="container">
        <div className="navbar-brand">
          <h2 className="navbar-item title">Aragmattr</h2>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Searchbar />
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="nav-item button is-primary" href="#">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
