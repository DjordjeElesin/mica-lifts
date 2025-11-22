import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { ErrorBoundary } from "@/pages/ErrorBoundary";
import { Workouts } from "@/pages/Workouts";
import { Profile } from "@/pages/Profile";
import { WorkoutDetails } from "@/pages/WorkoutDetails";

const createRoutes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Navigate to="/workouts" /> },
      {
        path: "/workouts",
        element: <Workouts />,
      },
      {
        path: "/workouts/:id",
        element: <WorkoutDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];

export const router = createBrowserRouter(createRoutes);
