export type ExerciseSet = {
  type: "warmup" | "working" | "dropset";
  reps: number | null;
};

export type Exercise = {
  id: number;
  name: string;
  youtube: string;
  sets: ExerciseSet[];
};

export type Workout = { id: number; name: string; exercises: Exercise[] };
