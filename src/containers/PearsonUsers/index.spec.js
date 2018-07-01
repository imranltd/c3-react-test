import React from "react";
import { shallow } from "enzyme";
import PearsonUsers from "./";

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  });

  it("renders a div", () => {
    const div = component.find("div");
    expect(div.hasClass('app-container')).toEqual(true);
  });
});
