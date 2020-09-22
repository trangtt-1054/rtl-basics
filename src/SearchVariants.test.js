import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);

    screen.debug();

    // fails
    //expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    screen.debug();

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    screen.debug();
  });
});

/*
This doesn't work, because, even though debug output shows that the element with the text "Searches for JavaScript" isn't there, getBy throws an error before we can make the assertion, because it cannot find the element with this text. In order to assert elements which aren't there, we can exchange getBy with queryBy:
*/
