import { theme } from "./theme";
import { router } from "./routes/router";
import { ThemeProvider, responsiveFontSizes, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
