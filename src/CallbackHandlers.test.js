import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Search", () => {
  test("calls the onChange callback handler", async () => {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    await userEvent.type(screen.getByRole("textbox"), "JavaScript");

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    expect(onChange).toHaveBeenCalledTimes(10); //after triggering the user interaction on the input field, we can assert that the onChange callback function has been called.
  });
});

/*
  Often these components will not have any side-effects or state, but only input (props) and output (JSX, callback handlers). We have already seen how we can test the rendered JSX given a component and props. Now we will test callback handlers for this Search component
  */
