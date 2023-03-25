import { createBrowserRouter } from "react-router-dom";
import { Login, Signup } from "@/pages";
import { MainLayout } from "@/layouts";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: Login.loader,
    action: Login.action,
  },
  {
    path: "/signup",
    element: <Signup />,
    loader: Signup.loader,
    action: Signup.action,
  },
  {
    path: "/",
    element: <MainLayout />,
    loader: MainLayout.loader,
  },
]);

export { router };