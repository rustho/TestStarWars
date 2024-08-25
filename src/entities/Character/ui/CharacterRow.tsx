import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { CharacterResponse } from "../model/types";

export interface CharacterRowProps extends CharacterResponse {
  onClick: (url: string) => void;
}

export const CharacterRow: React.FC<CharacterRowProps> = ({
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
    <TableRow
      key={url}
      onClick={() => onClick(url)}
      hover
      style={{ cursor: "pointer" }}
    >
      <TableCell>{name}</TableCell>
      <TableCell>{birth_year}</TableCell>
      <TableCell>{eye_color}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{hair_color}</TableCell>
      <TableCell>{height}</TableCell>
      <TableCell>{mass}</TableCell>
      <TableCell>{skin_color}</TableCell>
    </TableRow>
  );
};
