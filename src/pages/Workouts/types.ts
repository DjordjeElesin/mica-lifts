export type TExerciseSet = {
  type: "warmup" | "working" | "dropset";
  reps: number | null;
};

export type TExercise = {
  id: string;
  name: string;
  url: string;
  sets: TExerciseSet[];
};

export type TWorkout = {
  id: string;
  name: string;
  notes?: string;
  exercises: TExercise[];
};

export type TWorkoutPayload = Omit<TWorkout, "id" | "exercises"> & {
  exercises: string[];
};
