import type { TLoadingItems } from "@/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initalLoadingState: TLoadingItems = {
  default: false,
  workouts: false,
  workoutDetails: false,
  exercises: false,
  createWorkout: false,
};

type TLoadingStore = {
  data: TLoadingItems;
  actions: {
    setLoadingState: (item: keyof TLoadingItems, value: boolean) => void;
    getLoadingState: (item: keyof TLoadingItems) => boolean;
  };
};

export const useLoadingStore = create(
  immer<TLoadingStore>((set, get) => ({
    data: initalLoadingState,
    actions: {
      setLoadingState: (item, value) => {
        set((state) => {
          state.data[item] = value;
        });
      },
      getLoadingState: (item) => {
        return get().data[item];
      },
    },
  }))
);
