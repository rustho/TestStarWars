import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Main } from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { useCharacters } from "../../../entities/Character/model/useCharacters";

jest.mock("../../../entities/Character/model/useCharacters");

const mockCharacters = {
  results: [
    { name: "Luke Skywalker", url: "1" },
    { name: "Darth Vader", url: "2" },
  ],
  count: 2,
  next: null,
  previous: null,
};

describe("Main", () => {
  beforeEach(() => {
    // @ts-ignore
    useCharacters.mockReturnValue({
      data: mockCharacters,
      isLoading: false,
      error: null,
    });
  });

  test("renders a list of characters", () => {
    const { getByText } = render(
      <Router>
        <Main />
      </Router>
    );

    expect(getByText("Luke Skywalker")).toBeInTheDocument();
    expect(getByText("Darth Vader")).toBeInTheDocument();
  });

  test("toggles between table and card views", () => {
    const { getByTestId, queryByTestId } = render(
      <Router>
        <Main />
      </Router>
    );

    expect(getByTestId("table-view")).toBeInTheDocument();
    expect(queryByTestId("card-view")).not.toBeInTheDocument();

    const cardViewToggle = getByTestId("toggle-card-view");
    fireEvent.click(cardViewToggle);

    expect(getByTestId("card-view")).toBeInTheDocument();
    expect(queryByTestId("table-view")).not.toBeInTheDocument();
  });
});
