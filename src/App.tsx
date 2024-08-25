import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main/ui/Main";
import { CharacterDetailPage } from "./pages/CharacterDetailPage/ui/CharacterDetailPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./shared/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
