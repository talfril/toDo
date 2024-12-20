import { ThemeProvider } from "@mui/material/styles";
import MainPage from "../pages";
import { theme } from "../theme";
import React from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
