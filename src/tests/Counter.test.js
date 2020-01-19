import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "./../components/counter";

afterEach(cleanup);

test("<Counter /> Reduce Button", () => {
  const wrapper = render(<Counter />);
  wrapper.debug();
  expect(wrapper.getByText("Reduce").tagName).toBe("BUTTON");
});

test("<Counter /> Value P", () => {
  const wrapper = render(<Counter />);
  wrapper.debug();
  expect(wrapper.getByText("0").tagName).toBe("P");
});

test("<Counter /> valueHeader", () => {
  const wrapper = render(<Counter />);
  expect(wrapper.getByTestId("valueHeader").tagName).toBe("H1");
});

test("<Counter /> removeBtn and Value", () => {
  const { debug, getByTestId } = render(<Counter />);
  debug();
  expect(getByTestId("removeBtn").tagName).toBe("BUTTON");
  expect(getByTestId("value").textContent).toBe("0");
});

test("<Counter /> Click", () => {
  const { debug, getByTestId, queryByTestId } = render(<Counter />);

  debug();
  expect(getByTestId("removeBtn").tagName).toBe("BUTTON");
  expect(getByTestId("value").textContent).toBe("0");

  fireEvent.click(getByTestId("removeBtn"));
  expect(getByTestId("value").textContent).toBe("0");

  fireEvent.click(getByTestId("addBtn"));
  fireEvent.click(getByTestId("addBtn"));
  expect(getByTestId("value").textContent).toBe("2");

  fireEvent.click(getByTestId("removeBtn"));
  expect(getByTestId("value").textContent).toBe("1");

  fireEvent.click(getByTestId("addBtn"));
  fireEvent.click(getByTestId("addBtn"));
  expect(queryByTestId("resetBtn")).toBeFalsy();
  fireEvent.click(getByTestId("addBtn"));
  expect(queryByTestId("resetBtn")).toBeTruthy();
  fireEvent.click(getByTestId("resetBtn"));
  expect(queryByTestId("resetBtn")).toBeFalsy();
});
