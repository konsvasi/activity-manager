import React from "react";

const Searchbar = () => {
  return (
    <div className="field has-addons">
      <p className="control">
        <input
          className="input"
          type="text"
          placeholder="Search for friends or activities"
        />
      </p>
      <p className="control">
        <button className="button">Search</button>
      </p>
    </div>
  );
};

export default Searchbar;
