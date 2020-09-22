import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./Async";

jest.mock("axios");

describe("App", () => {
  //axios' return value from its get method gets mocked. However, if you are using another library or the browser's native fetch API for data fetching, you would have to mock these.
  test("fetches stories from an API and displays them", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    //reject the promise with an error. After rendering the component and clicking the button, wait for the error message to show up.
    const promise = Promise.resolve({ data: { hits: stories } });
    axios.get.mockImplementationOnce(() => promise);

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<App />);

    await userEvent.click(screen.getByRole("button"));

    await act(() => promise);

    const items = await screen.findAllByRole("listitem");

    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    expect(items).toHaveLength(2);
  });
});
