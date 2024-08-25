import React from "react";
import { Typography, Grid } from "@mui/material";
import { CharacterResponse } from "../model/types";

export const CharacterInfo: React.FC<CharacterResponse> = ({
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
  created,
  homeworld,
  edited,
}: CharacterResponse) => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Typography>Birth Year: {birth_year}</Typography>
      <Typography>Gender: {gender}</Typography>
      <Typography>Height: {height} cm</Typography>
      <Typography>Skin Color: {skin_color}</Typography>
      <Typography>Created: {new Date(created).toLocaleDateString()}</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography>Eye Color: {eye_color}</Typography>
      <Typography>Hair Color: {hair_color}</Typography>
      <Typography>Mass: {mass} kg</Typography>
      <Typography>
        Homeworld:{" "}
        <a href={homeworld} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </Typography>
      <Typography>Edited: {new Date(edited).toLocaleDateString()}</Typography>
    </Grid>
  </Grid>
);
