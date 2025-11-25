import type { TExercise } from "@/pages/Workouts/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useLoadingStore } from "./LoadingStore";
import { getExercises } from "@/api";

type TExercisesStore = {
  data: TExercise[];
  actions: {
    getAll: () => Promise<TExercise[]>;
  };
};

export const useExercisesStore = create(
  immer<TExercisesStore>((set) => ({
    data: [],
    actions: {
      getAll: async () => {
        useLoadingStore.getState().actions.setLoadingState("exercises", true);
        const data = await getExercises();
        set((state) => {
          state.data = data;
        });
        useLoadingStore.getState().actions.setLoadingState("exercises", false);
        return data;
      },
    },
  }))
);
