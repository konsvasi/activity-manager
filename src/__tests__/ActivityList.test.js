import React from "react";
import { shallow } from "enzyme";
import ActivityList from "../Components/ActivityList";

it("Tests if the ActivityList component has the correct amount of activities", () => {
  let activities = [
    {
      activityName: "test1",
      activityDate: "12/12/2018",
      activityFriends: "test"
    },
    {
      activityName: "test1",
      activityDate: "12/12/2018",
      activityFriends: "test"
    }
  ];

  shallow(<ActivityList activities={activities} />);
});
