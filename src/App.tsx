import "../src/cssStyles/homePage.css";
import "../app/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactPage from "./pages/ContactPage.tsx";
import Reservation from "./pages/Reservation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "reservation",
        element: <Reservation/>,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}