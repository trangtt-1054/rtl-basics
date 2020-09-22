import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    //implicit assertion because getByText would throw error if the element is not there
    screen.getByText("Search:");

    expect(screen.getByText("Search:")).toBeInTheDocument();
    // fails
    expect(screen.getByText("Search")).toBeInTheDocument();

    // succeeds
    expect(screen.getByText("Search:")).toBeInTheDocument();

    // succeeds
    expect(screen.getByText(/Search/)).toBeInTheDocument(); //use regex to partially match
  });
});
