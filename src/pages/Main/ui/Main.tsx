import React, { useState } from "react";
import {
  TextField,
  Pagination,
  Grid,
  Stack,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { CharacterTable } from "../../../widgets/CharacterTable";
import { CharacterCards } from "../../../widgets/CharacterCards";
import { useCharacters } from "../../../entities/Character";
import { useDebounce } from "../../../shared/useDebounce";
import { ToggleView } from "../../../shared/ui/ToggleView";

export const Main = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [view, setView] = useState<"table" | "cards">(
    isMobile ? "cards" : "table"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data, isLoading, error } = useCharacters(page, debouncedSearchQuery);

  const handleViewChange = (nextView: "table" | "cards") => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading characters</div>;

  return (
    <Stack gap={4} maxWidth={"80vw"}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="Search characters"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>

        <ToggleView
          view={view}
          handleViewChange={(_, newView) => handleViewChange(newView)}
        />
      </Grid>
      {view === "table" ? (
        <CharacterTable characters={data.results} />
      ) : (
        <CharacterCards characters={data.results} />
      )}
      <Grid container justifyContent="center" marginTop={20}>
        <Pagination
          count={Math.ceil(data.count / 10)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Grid>
    </Stack>
  );
};
