import React from "react";
import { Grid } from "@mui/material";
import { CharacterResponse, CharacterCard } from "../../../entities/Character";
import { useNavigate } from "react-router";

export interface CharacterCardsProps {
  characters: CharacterResponse[];
}

export const CharacterCards = ({ characters }: CharacterCardsProps) => {
  const navigate = useNavigate();

  const handleRowClick = (url: string) => {
    const id = url.split("/").slice(-2, -1)[0];
    navigate(`/character/${id}`);
  };
  return (
    <Grid container spacing={3} data-testid="card-view">
      {characters.map((character) => (
        <Grid item xs={12} sm={6} md={6} key={character.url}>
          <CharacterCard {...character} onClick={handleRowClick} />
        </Grid>
      ))}
    </Grid>
  );
};
