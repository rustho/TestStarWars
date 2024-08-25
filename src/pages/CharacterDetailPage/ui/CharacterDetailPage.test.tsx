import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { CharacterDetailPage } from "./CharacterDetailPage";
import { useCharacter } from "../../../entities/Character/model/useCharacter"; // Mock this hook

jest.mock("../../../entities/Character/model/useCharacter");

const mockCharacterData = {
  name: "C-3PO",
  birth_year: "112BBY",
  eye_color: "yellow",
  gender: "n/a",
  hair_color: "n/a",
  height: "167",
  mass: "75",
  skin_color: "gold",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: ["https://swapi.dev/api/films/1/"],
  species: ["https://swapi.dev/api/species/1/"],
  starships: [],
  vehicles: [],
  url: "https://swapi.dev/api/people/2/",
  created: "2014-12-10T15:10:51.357000Z",
  edited: "2014-12-20T21:17:50.309000Z",
};

describe("CharacterDetailPage", () => {
  beforeEach(() => {
    //@ts-ignore
    useCharacter.mockReturnValue({
      data: mockCharacterData,
      isLoading: false,
      error: null,
    });
  });

  test("renders character details correctly", () => {
    const { getByText } = render(
      <Router>
        <CharacterDetailPage />
      </Router>
    );

    expect(getByText("C-3PO")).toBeInTheDocument();
    expect(getByText("Birth Year: 112BBY")).toBeInTheDocument();
    expect(getByText("Eye Color: yellow")).toBeInTheDocument();
    expect(getByText("Gender: n/a")).toBeInTheDocument();
    expect(getByText("Height: 167 cm")).toBeInTheDocument();
    expect(getByText("Mass: 75 kg")).toBeInTheDocument();
    expect(getByText("Skin Color: gold")).toBeInTheDocument();
  });
});
