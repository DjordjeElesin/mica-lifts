import { getWorkouts } from "@/api";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useLoadingStore } from "./LoadingStore";
import type { TWorkout } from "@/types";

export type TWorkoutStore = {
  data: TWorkout[] | null;
  actions: {
    getAll: () => Promise<TWorkout[]>;
  };
};

export const useWorkoutStore = create(
  immer<TWorkoutStore>((set) => ({
    data: null,
    actions: {
      getAll: async () => {
        try {
          useLoadingStore.getState().actions.setLoadingState("workouts", true);
          const data = await getWorkouts();
          set((store) => {
            store.data = data;
          });
          useLoadingStore.getState().actions.setLoadingState("workouts", false);
          return data;
        } catch (error) {
          useLoadingStore.getState().actions.setLoadingState("workouts", false);
          console.error(error);
          return [];
        }
      },
    },
  }))
);
