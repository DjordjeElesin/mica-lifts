import { getMuscleGroups } from "@/api/muslceGroups";
import type { TMuscleGroup } from "@/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useLoadingStore } from "./LoadingStore";

type TMuscleGroupStore = {
  data: TMuscleGroup[];
  actions: {
    getAll: () => Promise<TMuscleGroup[]>;
  };
};

export const useMuscleGroupStore = create(
  immer<TMuscleGroupStore>((set) => ({
    data: [],
    actions: {
      getAll: async () => {
        try {
          useLoadingStore.getState().actions.setLoadingState("exercises", true);
          const data = await getMuscleGroups();
          set((store) => {
            store.data = data;
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
    },
  }))
);
