import React from "react";
import { shallow } from "enzyme";
import DetailPanel from "../Components/DetailPanel";

const activeSession = {
  activityName: "Active title",
  activityDate: new Date("12/12/2019"),
  activityFriends: "test friends"
};

const emptyActiveSession = {};

it("Tests if the DetailPanel component has the correct values for the title and date", () => {
  const wrapper = shallow(<DetailPanel activeSession={activeSession} />);
  expect(wrapper.find(".title").get(0).props.children).toEqual("Active title");
  expect(wrapper.find(".subtitle").get(0).props.children).toEqual("12/12/2019");
});

it("Tests if the DetailPanel component renders the correct titles when receiving an empty activity object", () => {
  const wrapper = shallow(<DetailPanel activeSession={emptyActiveSession} />);
  expect(wrapper.find(".title").get(0).props.children).toEqual("No activities");
  expect(wrapper.find(".content-message").get(0).props.children).toEqual(
    'Create a new activity by clicking the "Add activity button"'
  );
});
