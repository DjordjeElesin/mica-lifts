export type TExerciseSet = {
  type: "warmup" | "working" | "dropset";
  reps: number | null;
};

export type TExercise = {
  id: number;
  name: string;
  youtube: string;
  sets: TExerciseSet[];
};

export type TWorkout = { id: number; name: string; exercises: TExercise[] };
