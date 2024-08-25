import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { CharacterResponse, CharacterRow } from "../../../entities/Character";
import { useNavigate } from "react-router";

export interface CharacterTableProps {
  characters: CharacterResponse[];
}

export const CharacterTable = ({ characters }: CharacterTableProps) => {
  const navigate = useNavigate();

  const handleRowClick = (url: string) => {
    const id = url.split("/").slice(-2, -1)[0];
    navigate(`/character/${id}`);
  };

  return (
    <TableContainer data-testid="table-view">
      <Table sx={{ minWidth: "80vw" }} aria-label="characters table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Birth Year</TableCell>
            <TableCell>Eye Color</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Hair Color</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Mass</TableCell>
            <TableCell>Skin Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character) => (
            <CharacterRow
              key={character.url}
              {...character}
              onClick={handleRowClick}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
