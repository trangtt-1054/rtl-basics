import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);
    //wait for user to resolve, rare case
    await screen.findByText(/Signed in as/);

    //make the assertions from before and after the event:
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole("textbox"), "JavaScript");

    screen.debug();
    //simulate interactions of an end user.
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();

    screen.debug();
  });
});

/*
The fireEvent function takes an element (here the input field by textbox role) and an event (here an event which has the value "JavaScript"). The debug function's output should show the HTML structure before and after the event; and you should see that the new value of the input field gets rendered appropriately.

UserEvent
React Testing Library comes with an extended user event library which builds up on top of the fireEvent API. Previously we have used fireEvent to trigger user interactions; this time we will use userEvent as replacement, because the userEvent API mimics the actual browser behavior more closely than the fireEvent API. For example, a fireEvent.change() triggers only a change event whereas userEvent.type triggers a change event, but also keyDown, keyPress, and keyUp events.
*/
