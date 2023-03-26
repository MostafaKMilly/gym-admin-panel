import { createBrowserRouter } from "react-router-dom";
import { Classes, Clients, Login, Signup, ClientDetails } from "@/pages";
import { MainLayout } from "@/layouts";
import { QueryClient } from "@tanstack/react-query";

const router = (client: QueryClient) =>
  createBrowserRouter([
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
      children: [
        {
          path: "clients",
          element: <Clients />,
          loader: Clients.loader(client),
        },
        {
          path: "clients/:id",
          element: <ClientDetails />,
          loader: ClientDetails.loader(client),
        },
        {
          path: "classes",
          element: <Classes />,
        },
      ],
    },
  ]);

export { router };
