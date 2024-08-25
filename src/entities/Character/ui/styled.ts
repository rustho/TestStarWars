import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const HoverablePaper = styled(Paper)({
  cursor: "pointer",
  padding: "20px",
  margin: "10px",
  transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#333333",
  },
});
