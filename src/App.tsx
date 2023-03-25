import { ThemeProvider, responsiveFontSizes , CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
