import { getWorkouts } from "@/api";
import type { TWorkout } from "@/pages/Workouts/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useLoadingStore } from "./LoadingStore";

export const workoutsData: TWorkout[] = [
  {
    id: "asadfasdf",
    name: "Glutes & Hamstrings",
    exercises: [
      {
        id: "asadfasdf",
        name: "Hip Thrust",
        url: "https://www.url.com/watch?v=LM8XHLYJoYs",
        sets: [
          { type: "warmup", reps: null },
          { type: "working", reps: 8 },
          { type: "dropset", reps: 8 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Romanian Deadlift",
        url: "https://www.url.com/watch?v=3qw-yU8R0KQ",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Step Ups",
        url: "https://www.url.com/watch?v=JB2oyawG9KI",
        sets: [
          { type: "working", reps: 12 },
          { type: "working", reps: 12 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Leg Curls",
        url: "https://www.url.com/watch?v=1Tq3QdYUuHs",
        sets: [
          { type: "working", reps: 12 },
          { type: "dropset", reps: 12 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Hip Abduction",
        url: "https://www.url.com/watch?v=glF_jGDA_xA",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Kickbacks",
        url: "https://www.url.com/watch?v=Thw5uakV4VM",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
    ],
  },
  {
    id: "asadfasdf",
    name: "Back & Arms",
    exercises: [
      {
        id: "asadfasdf",
        name: "Lat Pulldown",
        url: "https://www.url.com/watch?v=CAwf7n6Luuc",
        sets: [
          { type: "warmup", reps: null },
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Seated Row",
        url: "https://www.url.com/watch?v=GZbfZ033f74",
        sets: [
          { type: "working", reps: 8 },
          { type: "dropset", reps: 8 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Face Pulls",
        url: "https://www.url.com/watch?v=rep-qVOkqgk",
        sets: [
          { type: "working", reps: 12 },
          { type: "working", reps: 12 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Cable Bicep Curl",
        url: "https://www.url.com/watch?v=av7-8igSXTs",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Triceps Extension",
        url: "https://www.url.com/watch?v=vB5OHsJ3EME",
        sets: [
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Incline Bicep Curl",
        url: "https://www.url.com/watch?v=soxrZlIl35U",
        sets: [
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
    ],
  },
  {
    id: "asadfasdf",
    name: "Legs & Shoulders",
    exercises: [
      {
        id: "asadfasdf",
        name: "Squats",
        url: "https://www.url.com/watch?v=YaXPRqUwItQ",
        sets: [
          { type: "warmup", reps: null },
          { type: "warmup", reps: null },
          { type: "working", reps: 8 },
          { type: "working", reps: 8 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Hip Thrust",
        url: "https://www.url.com/watch?v=LM8XHLYJoYs",
        sets: [
          { type: "working", reps: 8 },
          { type: "dropset", reps: 8 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Reverse Deficit Lunges",
        url: "https://www.url.com/watch?v=zD8-6x7Yw4U",
        sets: [
          { type: "working", reps: 8 },
          { type: "working", reps: 8 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Leg Extensions",
        url: "https://www.url.com/watch?v=yR1NmFZ_jZ0",
        sets: [
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Shoulder Press",
        url: "https://www.url.com/watch?v=qEwKCR5JCog",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Lateral Raises",
        url: "https://www.url.com/watch?v=3VcKaXpzqRo",
        sets: [
          { type: "working", reps: 12 },
          { type: "working", reps: 12 },
        ],
      },
    ],
  },
  {
    id: "asadfasdf",
    name: "Glutes & Quads",
    exercises: [
      {
        id: "asadfasdf",
        name: "Bulgarian Split Squat",
        url: "https://www.url.com/watch?v=2C-uNgKwPLE",
        sets: [
          { type: "warmup", reps: null },
          { type: "working", reps: 8 },
          { type: "working", reps: 8 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Hip Thrust",
        url: "https://www.url.com/watch?v=LM8XHLYJoYs",
        sets: [
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Leg Press",
        url: "https://www.url.com/watch?v=IZxyjW7MPJQ",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Quad Extension",
        url: "https://www.url.com/watch?v=YyvSfVjQeL0",
        sets: [
          { type: "working", reps: 12 },
          { type: "dropset", reps: 12 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Glute Focused Step Ups",
        url: "https://www.url.com/watch?v=JB2oyawG9KI",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
    ],
  },
  {
    id: "asadfasdf",
    name: "Cardio & Abs",
    exercises: [
      {
        id: "asadfasdf",
        name: "Treadmill Walk (Incline)",
        url: "https://www.url.com/watch?v=wR0GOTUqY94",
        sets: [
          { type: "working", reps: 15 },
          { type: "working", reps: 5 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Hanging Knee Raises",
        url: "https://www.url.com/watch?v=l4yYz0UqJ5M",
        sets: [
          { type: "working", reps: 12 },
          { type: "working", reps: 12 },
        ],
      },
      {
        id: "asadfasdf",
        name: "Weighted Crunch Machine",
        url: "https://www.url.com/watch?v=5ER5Of4MOPI",
        sets: [
          { type: "working", reps: 12 },
          { type: "dropset", reps: 12 },
        ],
      },
    ],
  },
];

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
