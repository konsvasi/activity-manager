import React from "react";

const NameField = props => {
  const styles = props.isEmpty ? "input is-warning" : "input";

  return (
    <input
      className={styles}
      type="text"
      placeholder="Activity name"
      onBlur={props.handleNameChange}
      onChange={props.clearWarning}
      required
    />
  );
};

export default NameField;
