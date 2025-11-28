import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useLoadingStore } from "./LoadingStore";
import { createExercise, getExercises } from "@/api";
import type { TExercise, TExercisePaylod } from "@/types";

type TExercisesStore = {
  data: TExercise[];
  actions: {
    getAll: () => Promise<TExercise[]>;
    createExercise: (payload: TExercisePaylod) => Promise<void>;
  };
};

export const useExercisesStore = create(
  immer<TExercisesStore>((set) => ({
    data: [],
    actions: {
      getAll: async () => {
        try {
          useLoadingStore.getState().actions.setLoadingState("exercises", true);
          const data = await getExercises();
          set((state) => {
            state.data = data;
          });
          useLoadingStore
            .getState()
            .actions.setLoadingState("exercises", false);
          return data;
        } catch (error) {
          useLoadingStore
            .getState()
            .actions.setLoadingState("exercises", false);
          console.error(error);
          return [];
        }
      },
      createExercise: async (payload) => {
        try {
          useLoadingStore.getState().actions.setLoadingState("exercises", true);
          await createExercise(payload);
          useLoadingStore
            .getState()
            .actions.setLoadingState("exercises", false);
        } catch (error) {
          useLoadingStore
            .getState()
            .actions.setLoadingState("exercises", false);
          console.error(error);
        }
      },
    },
  }))
);
