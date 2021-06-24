import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("should render", ()=>{
    render(<Card />);
});

test("should snapshot 1", ()=>{
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});