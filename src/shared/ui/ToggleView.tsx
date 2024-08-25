import React from "react";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

export interface TableViewProps {
  view: string;
  handleViewChange: (event: any, newView: "table" | "cards") => void;
}

export const ToggleView = ({ view, handleViewChange }: TableViewProps) => {
  return (
    <Grid item xs={4} style={{ textAlign: "right" }}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="view toggle"
      >
        <ToggleButton
          value="table"
          aria-label="table view"
          onClick={(e) => handleViewChange(e, "table")}
        >
          <TableViewIcon
            style={{ color: view === "table" ? "#90caf9" : "#ffffff" }}
          />
        </ToggleButton>
        <ToggleButton
          value="cards"
          aria-label="card view"
          onClick={(e) => handleViewChange(e, "cards")}
          data-testid="toggle-card-view"
        >
          <ViewModuleIcon
            style={{ color: view === "cards" ? "#90caf9" : "#ffffff" }}
          />
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};
