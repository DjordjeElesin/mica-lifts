import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { TWorkout } from "@/pages/Workouts/types";
import { format } from "date-fns";

export type TActiveWorkoutStore = {
  workout: TWorkout | null;
  startedAt: string;
  exercisesProgress: {
    [exerciseId: string]: boolean[];
  };
  actions: {
    startWorkout: (workout: TWorkout) => void;
    toggleSet: (exerciseId: string, setIndex: number) => void;
    resetWorkout: () => void;
  };
};

export const useActiveWorkoutStore = create(
  immer<TActiveWorkoutStore>((set) => ({
    workout: null,
    startedAt: "",
    exercisesProgress: {},

    actions: {
      startWorkout: (workout) => {
        set((state) => {
          state.workout = workout;
          state.startedAt = format(new Date(), "PPp");

          state.exercisesProgress = Object.fromEntries(
            workout.exercises.map((ex) => [ex.id, ex.sets.map(() => false)])
          );
        });
      },

      toggleSet: (exerciseId, setIndex) => {
        set((state) => {
          const sets = state.exercisesProgress[exerciseId];
          if (!sets) return;

          sets[setIndex] = !sets[setIndex];
        });
      },
      resetWorkout: () => {
        set((state) => {
          state.workout = null;
          state.startedAt = "";
          state.exercisesProgress = {};
        });
      },
    },
  }))
);
