import React from "react";
import { TextField, Grid } from "@mui/material";
import { CharacterResponse } from "../../../entities/Character/model/types";

interface EditableCharacterFormProps {
  character: CharacterResponse;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditableCharacterForm: React.FC<EditableCharacterFormProps> = ({
  character,
  onChange,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          name="birth_year"
          label="Birth Year"
          value={character.birth_year}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="gender"
          label="Gender"
          value={character.gender}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="height"
          label="Height"
          value={character.height}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="skin_color"
          label="Skin Color"
          value={character.skin_color}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="created"
          label="Created"
          value={character.created}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="eye_color"
          label="Eye Color"
          value={character.eye_color}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="hair_color"
          label="Hair Color"
          value={character.hair_color}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="mass"
          label="Mass"
          value={character.mass}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="homeworld"
          label="Homeworld"
          value={character.homeworld}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="edited"
          label="Edited"
          value={character.edited}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
      </Grid>
    </Grid>
  );
};
