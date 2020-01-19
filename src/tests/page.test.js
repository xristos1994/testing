import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page from "./../components/page";

afterEach(cleanup);

test("<Page>", () => {
  const { getByTestId, queryByTestId, container } = render(<Page />);
  expect(getByTestId("pageTitle").textContent).toBe("TEST PAGE");
  expect(queryByTestId("value")).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
