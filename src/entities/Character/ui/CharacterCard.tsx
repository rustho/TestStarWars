import React from "react";
import { CardContent, Typography } from "@mui/material";
import { CharacterResponse } from "../model/types";
import { HoverablePaper } from "./styled";

export interface CharacterCardProps extends CharacterResponse {
  onClick: (url: string) => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  url,
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
  onClick,
}) => {
  return (
    <HoverablePaper onClick={() => onClick(url)}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography color="text.secondary">Birth Year: {birth_year}</Typography>
        <Typography color="text.secondary">Eye Color: {eye_color}</Typography>
        <Typography color="text.secondary">Gender: {gender}</Typography>
        <Typography color="text.secondary">Hair Color: {hair_color}</Typography>
        <Typography color="text.secondary">Height: {height} cm</Typography>
        <Typography color="text.secondary">Mass: {mass} kg</Typography>
        <Typography color="text.secondary">Skin Color: {skin_color}</Typography>
      </CardContent>
    </HoverablePaper>
  );
};
