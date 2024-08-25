import React from "react";
import type { Preview } from "@storybook/react";

import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/shared/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Story />
          </Router>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
