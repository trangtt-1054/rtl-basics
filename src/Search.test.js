import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    screen.getByRole("");
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    // fails
    expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
  });
});

//getByRole function is usually used to retrieve elements by aria-label attributes. However, there are also implicit roles on HTML elements -- like button for a button element. Thus you can select elements not only by visible text, but also by their accessibility role with React Testing Library

// The neat thing about getByRole: it shows all the selectable roles if you provide a role that isn't available in the rendered component's HTML:
