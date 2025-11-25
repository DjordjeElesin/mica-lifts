export type TLoadingItems = {
  workouts: boolean;
  workoutDetails: boolean;
  exercises: boolean;
  createWorkout: boolean;
};

export type TSetType = "warmup" | "working" | "dropset";

export type TSet = {
  type: TSetType;
  reps: number;
};
