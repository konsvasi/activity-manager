import React from "react";
import "bulma/css/bulma.css";

const ActivityList = props => {
  const activities = props.activities;

  const getActivityId = ev => {
    props.getActivityId(ev.target.id);
  };

  const listOfActivities = activities.map((activity, index) => (
    <li onClick={getActivityId} key={index} className="activity-item">
      <a id={activity.activityName}>{activity.activityName}</a>
    </li>
  ));

  if (listOfActivities.length === 0) {
    return (
      <aside className="menu">
        <p className="menu-label">Activities</p>
        <p>
          Nothing to show
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
