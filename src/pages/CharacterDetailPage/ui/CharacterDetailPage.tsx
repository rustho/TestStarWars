import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Grid, IconButton, Button, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useCharacter } from "../../../entities/Character";
import { CharacterInfo, CharacterResponse } from "../../../entities/Character";
import { EditableCharacterForm } from "../../../features/CharacterForm";
import { Root } from "./styled";

export const CharacterDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, error } = useCharacter(id);
  const [editableCharacter, setEditableCharacter] =
    useState<CharacterResponse | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (character) {
      const savedCharacter = localStorage.getItem(`character-${id}`);
      setEditableCharacter(
        savedCharacter ? JSON.parse(savedCharacter) : character
      );
    }
  }, [character, id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableCharacter((prevCharacter) =>
      prevCharacter ? { ...prevCharacter, [name]: value } : null
    );
  };

  const handleSave = () => {
    if (editableCharacter) {
      localStorage.setItem(
        `character-${id}`,
        JSON.stringify(editableCharacter)
      );
      setIsEditing(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error || !editableCharacter) return <div>Error loading character</div>;

  return (
    <Root elevation={3}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <IconButton onClick={() => navigate(-1)} aria-label="go back">
            <ArrowBackIcon style={{ color: "#ffffff" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h2" gutterBottom>
            {character?.name}
          </Typography>
        </Grid>
      </Grid>

      {isEditing ? (
        <EditableCharacterForm
          onChange={handleInputChange}
          character={editableCharacter}
        />
      ) : (
        <CharacterInfo {...editableCharacter} />
      )}

      <Grid container spacing={3} marginTop={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Films</Typography>
          <Stack marginTop={1}>
            {character?.films.map((film, index) => (
              <Typography key={index}>
                <a href={film} target="_blank" rel="noopener noreferrer">
                  Film {index + 1}
                </a>
              </Typography>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Species</Typography>
          {character?.species.length ? (
            <Stack marginTop={1}>
              {character.species.map((specie, index) => (
                <Typography key={index}>
                  <a href={specie} target="_blank" rel="noopener noreferrer">
                    Species {index + 1}
                  </a>
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography>No species available</Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Starships</Typography>
          {character?.starships.length ? (
            <Stack marginTop={1}>
              {character.starships.map((starship, index) => (
                <Typography key={index}>
                  <a href={starship} target="_blank" rel="noopener noreferrer">
                    Starship {index + 1}
                  </a>
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography>No starships available</Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Vehicles</Typography>
          {character?.vehicles.length ? (
            <Stack marginTop={1}>
              {character.vehicles.map((vehicle, index) => (
                <Typography key={index}>
                  <a href={vehicle} target="_blank" rel="noopener noreferrer">
                    Vehicle {index + 1}
                  </a>
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography>No vehicles available</Typography>
          )}
        </Grid>
      </Grid>

      <Grid container justifyContent="center" marginTop={4}>
        {isEditing ? (
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
      </Grid>
    </Root>
  );
};
