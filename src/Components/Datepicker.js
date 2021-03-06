import React from "react";

const Datepicker = props => {
  const styles = props.isEmpty ? "input is-warning" : "input";
  return (
    <input
      name="activityDate"
      className={styles}
      type="date"
      onBlur={props.onChange}
      onChange={props.clearWarning}
      required
    />
  );
};

export default Datepicker;
