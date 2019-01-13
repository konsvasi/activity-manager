import React from "react";
import { shallow } from "enzyme";
import ActivityList from "../Components/ActivityList";

let activities = [
  {
    activityName: "test1",
    activityDate: "12/12/2018",
    activityFriends: "test"
  },
  {
    activityName: "test2",
    activityDate: "12/12/2018",
    activityFriends: "test"
  }
];

it("Tests if the ActivityList component has the correct amount of activities", () => {
  const wrapper = shallow(<ActivityList activities={activities} />);
  expect(wrapper.find(".menu-list")).toBeDefined();
  expect(wrapper.find(".activity-item")).toHaveLength(activities.length);

  // add another activity
  activities = [
    ...activities,
    {
      activityName: "test3",
      activityDate: "12/12/2018",
      activityFriends: "test friends"
    }
  ];
  const wrapper2 = shallow(<ActivityList activities={activities} />);
  expect(wrapper2.find(".menu-list")).toBeDefined();
  expect(wrapper2.find(".activity-item")).toHaveLength(activities.length);
});

it("Renders an activity from the activity list", () => {
  const wrapper = shallow(<ActivityList activities={activities} />);
  expect(wrapper.find(".activity-item").get(0).props.children.props.id).toEqual(
    "test1"
  );
  expect(wrapper.find(".activity-item").get(1).props.children.props.id).toEqual(
    "test2"
  );
});
