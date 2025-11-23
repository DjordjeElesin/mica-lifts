import {
  addExerciseToWorkout,
  getById,
  removeExerciseFromWorkout,
} from "@/api";
import type { TExercise, TWorkout } from "@/pages/Workouts/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useLoadingStore } from "./LoadingStore";

export type TWorkoutDetailsStore = {
  data: TWorkout | null;
  actions: {
    getWorkoutById: (workoutId: string) => Promise<TWorkout>;
    addExercise: (
      workoutId: string,
      exercise: Omit<TExercise, "id">
    ) => Promise<void>;
    removeExercise: (workoutId: string, exerciseId: string) => Promise<void>;
  };
};

export const useWorkoutDetailsStore = create(
  immer<TWorkoutDetailsStore>((set, get) => ({
    data: null,
    actions: {
      getWorkoutById: async (workoutId) => {
        try {
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", true);
          const data = await getById(workoutId);
          set((store) => {
            store.data = data;
          });
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", false);
          return data;
        } catch (error) {
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", false);
          console.error(error);
          return {} as TWorkout;
        }
      },
      addExercise: async (workoutId, exercise) => {
        try {
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", true);
          await addExerciseToWorkout(workoutId, exercise);
          await get().actions.getWorkoutById(workoutId);
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", false);
        } catch (error) {
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", false);
          console.error(error);
        }
      },
      removeExercise: async (workoutId, exerciseId) => {
        try {
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", true);
          await removeExerciseFromWorkout(workoutId, exerciseId);
          await get().actions.getWorkoutById(workoutId);
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", false);
        } catch (error) {
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", false);
          console.error(error);
        }
      },
    },
  }))
);
