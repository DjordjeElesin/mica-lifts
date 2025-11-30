import { db } from "@/lib/firebase";
import type {
  TWorkout,
  TWorkoutPayload,
  TSet,
  TWorkoutExercisePayload,
} from "@/types";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export const getWorkouts = async () => {
  const [muscleSnap, exerciseSnap, workoutsSnap] = await Promise.all([
    getDocs(collection(db, "muscleGroups")),
    getDocs(collection(db, "exercises")),
    getDocs(collection(db, "workouts")),
  ]);

  const musclesMap = new Map(
    muscleSnap.docs.map((d) => [d.id, { id: d.id, ...d.data() }]),
  );

  const exercisesMap = new Map(
    exerciseSnap.docs.map((d) => [
      d.id,
      {
        id: d.id,
        name: d.data().name,
        url: d.data().url,
        muscleGroup: musclesMap.get(d.data().muscleGroup) || null,
      },
    ]),
  );

  return workoutsSnap.docs.map((d) => {
    const raw = d.data();

    return {
      id: d.id,
      name: raw.name,
      notes: raw.notes || "",
      exercises: raw.exercises.map(
        ({ exerciseId, sets }: { exerciseId: string; sets: TSet[] }) => ({
          ...(exercisesMap.get(exerciseId) || {}),
          sets: sets || [],
        }),
      ),
    } as TWorkout;
  });
};

export const getById = async (workoutId: string): Promise<TWorkout> => {
  const [muscleSnap, exerciseSnap, workoutSnap] = await Promise.all([
    getDocs(collection(db, "muscleGroups")),
    getDocs(collection(db, "exercises")),
    getDoc(doc(db, "workouts", workoutId)),
  ]);
  if (!workoutSnap.exists()) return {} as TWorkout;

  const musclesMap = new Map(
    muscleSnap.docs.map((d) => [d.id, { id: d.id, ...d.data() }]),
  );

  const exercisesMap = new Map(
    exerciseSnap.docs.map((d) => [
      d.id,
      {
        id: d.id,
        name: d.data().name,
        url: d.data().url,
        muscleGroup: musclesMap.get(d.data().muscleGroup) || null,
      },
    ]),
  );
  return {
    id: workoutSnap.id,
    name: workoutSnap.data().name,
    notes: workoutSnap.data().notes || "",
    exercises: workoutSnap
      .data()
      .exercises.map(
        ({ exerciseId, sets }: { exerciseId: string; sets: TSet[] }) => {
          return {
            ...(exercisesMap.get(exerciseId) || {}),
            sets: sets || [],
          };
        },
      ),
  } as TWorkout;
};

export const addExerciseToWorkout = async (
  workoutId: string,
  payload: TWorkoutExercisePayload,
): Promise<void> => {
  await updateDoc(doc(db, "workouts", workoutId), {
    exercises: arrayUnion(payload),
  });
};

export const removeExerciseFromWorkout = async (
  workoutId: string,
  exerciseId: string,
): Promise<void> => {
  const snap = await getDoc(doc(db, "workouts", workoutId));
  if (!snap.exists()) return;

  const updatedExercises = snap
    .data()
    .exercises.filter(
      (ex: TWorkoutExercisePayload) => ex.exerciseId !== exerciseId,
    );
  await updateDoc(doc(db, "workouts", workoutId), {
    exercises: updatedExercises,
  });
};

export const createWorkout = async (
  payload: TWorkoutPayload,
): Promise<string> => {
  const docRef = await addDoc(collection(db, "workouts"), {
    name: payload.name,
    notes: payload.notes,
    exercises: payload.exercises ?? [],
  });

  return docRef.id;
};
