import React from "react";
import { shallow } from "enzyme";
import Button from "./";

describe("Button", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Button label='hello' />);
  });

  it("renders a button", () => {
    const button = component.find("button");
    expect(button.text()).toEqual("hello");
  });
});
