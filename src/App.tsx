import { theme } from "./theme";
import { router } from "./routes/router";
import { ThemeProvider, responsiveFontSizes, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import { Loader } from "./shared/components";

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
        <Suspense fallback={<Loader />}>
          <CssBaseline />
          <ToastContainer limit={3} />
          <RouterProvider router={router(queryClient)} />
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
