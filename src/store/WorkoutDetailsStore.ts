import {
  addExerciseToWorkout,
  createWorkout,
  getById,
  removeExerciseFromWorkout,
} from "@/api";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useLoadingStore } from "./LoadingStore";
import type { NavigateFunction } from "react-router-dom";
import type {
  TWorkout,
  TWorkoutExercisePayload,
  TWorkoutPayload,
} from "@/types";

export type TWorkoutDetailsStore = {
  data: TWorkout | null;
  actions: {
    getWorkoutById: (workoutId: string) => Promise<TWorkout>;
    addExercise: (
      workoutId: string,
      payload: TWorkoutExercisePayload,
    ) => Promise<void>;
    removeExercise: (workoutId: string, exerciseId: string) => Promise<void>;
    createWorkout: (
      payload: TWorkoutPayload,
      navigate: NavigateFunction,
    ) => Promise<string>;
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
      addExercise: async (workoutId, payload) => {
        try {
          useLoadingStore
            .getState()
            .actions.setLoadingState("workoutDetails", true);
          await addExerciseToWorkout(workoutId, payload);
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
      createWorkout: async (payload, navigate) => {
        try {
          useLoadingStore
            .getState()
            .actions.setLoadingState("createWorkout", true);
          const data = await createWorkout(payload);
          useLoadingStore
            .getState()
            .actions.setLoadingState("createWorkout", false);
          navigate(`/workouts/${data}`);
          return data;
        } catch (error) {
          useLoadingStore
            .getState()
            .actions.setLoadingState("createWorkout", false);
          console.error(error);
          return "";
        }
      },
    },
  })),
);
