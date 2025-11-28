import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { ErrorBoundary } from "@/pages/ErrorBoundary";
import { Workouts } from "@/pages/Workouts";
import {
  WorkoutDetails,
  loader as loaderWorkoutDetails,
} from "@/pages/WorkoutDetails";
import { Profile } from "@/pages/Profile";
import {
  CreateWorkout,
  loader as loaderCreateWorkout,
} from "@/pages/CreateWorkout";
import { Exercises, loader as loaderExercises } from "@/pages/Exercises";
import { Loading } from "@/components/Loading";

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
        loader: loaderWorkoutDetails,
        HydrateFallback: () => <Loading type="workoutDetails" />,
      },
      {
        path: "workouts/create",
        element: <CreateWorkout />,
        loader: loaderCreateWorkout,
        HydrateFallback: () => <Loading type="exercises" />,
      },
      {
        path: "exercises",
        element: <Exercises />,
        loader: loaderExercises,
        HydrateFallback: () => <Loading type="exercises" />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];

export const router = createBrowserRouter(createRoutes);
