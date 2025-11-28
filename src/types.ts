export type TLoadingItems = {
  default: boolean;
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

export type TExercise = {
  id: string;
  name: string;
  url: string;
  muscleGroup: TMuscleGroup;
};

export type TExerciseActive = TExercise & { sets: TSet[] };

export type TExercisePaylod = Omit<TExercise, "muscleGroup" | "id"> & {
  muscleGroup: string;
};

export type TWorkout = {
  id: string;
  name: string;
  notes?: string;
  exercises: TExercise[];
};

export type TWorkoutPayload = Omit<TWorkout, "id" | "exercises"> & {
  exercises: { exerciseId: string; sets: TSet[] }[];
};

export type TMuscleGroup = {
  id: string;
  name: string;
  image: string;
};
