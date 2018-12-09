import React from "react";
import "bulma/css/bulma.css";

const ActivityList = props => {
  const activities = props.activities;
  console.log("props.activities:", activities);
  const listOfActivities = activities.map((activity, index) => (
    <li key={index}>
      <a>{activity.activityName}</a>
    </li>
  ));

  console.log("list:", listOfActivities);
  if (listOfActivities.length === 0) {
    return (
      <aside className="menu">
        <p className="menu-label">Activities</p>
        <p>
          Nothing to show{" "}
          <span role="img" aria-label="emoji">
            😧
          </span>
        </p>
      </aside>
    );
  }

  return (
    <aside className="menu">
      <p className="menu-label">Activities</p>
      <ul className="menu-list">{listOfActivities}</ul>
    </aside>
  );
};

export default ActivityList;
