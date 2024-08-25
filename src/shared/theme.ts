import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark", // Set the theme mode to dark
    primary: {
      main: "#90caf9", // Customize the primary color
    },
    secondary: {
      main: "#f48fb1", // Customize the secondary color
    },
    background: {
      default: "#121212", // Set the default background color for the dark mode
      paper: "#1d1d1d", // Background color for paper elements
    },
    text: {
      primary: "#ffffff", // Primary text color in dark mode
      secondary: "#bbbbbb", // Secondary text color in dark mode
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Use a custom font
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#1d1d1d", // Background color for the table
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Text color for table cells
          borderBottom: "1px solid #333", // Border color for table cells
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1d1d1d", // Background color for paper elements
          padding: "20px", // Add some padding
        },
      },
    },
  },
});
