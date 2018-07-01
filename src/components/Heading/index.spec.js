import React from "react";
import { shallow } from "enzyme";
import Heading from "./";

describe("Heading", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Heading>Pearson User Management</Heading>);
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });
});
