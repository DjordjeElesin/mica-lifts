import { db } from "@/lib/firebase";
import type { TExercise, TWorkout, TWorkoutPayload } from "@/pages/Workouts/types";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  documentId,
} from "firebase/firestore";
import chunk from "lodash/chunk";

const fetchExercises = async (ids: string[]): Promise<TExercise[]> => {
  if (!ids?.length) return [];

  const exCol = collection(db, "exercises");
  const idChunks = chunk(ids, 10);

  const snapshots = await Promise.all(
    idChunks.map((c) => getDocs(query(exCol, where(documentId(), "in", c))))
  );

  return snapshots
    .flatMap((snap) => snap.docs)
    .map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        url: data.url,
        sets: data.sets || [],
      };
    });
};

export const getWorkouts = async (): Promise<TWorkout[]> => {
  const snaps = await getDocs(collection(db, "workouts"));
  const workouts = snaps.docs.map((d) => ({
    id: d.id,
    name: d.data().name,
    exerciseIds: d.data().exercises || [],
  }));
  const allIds = workouts.flatMap((w) => w.exerciseIds);
  const allExercises = await fetchExercises(allIds);

  return workouts.map((w) => ({
    id: w.id,
    name: w.name,
    exercises: w.exerciseIds
      .map((id: string) => allExercises.find((e) => e.id === id))
      .filter(Boolean) as TExercise[],
  }));
};

export const getById = async (workoutId: string): Promise<TWorkout> => {
  const snap = await getDoc(doc(db, "workouts", workoutId));
  if (!snap.exists()) return {} as TWorkout;
  const data = snap.data();
  const ids: string[] = data.exercises || [];
  const exercises = await fetchExercises(ids);
  return {
    id: snap.id,
    name: data.name,
    exercises: ids
      .map((id: string) => exercises.find((e) => e.id === id))
      .filter(Boolean) as TExercise[],
  };
};

export const addExerciseToWorkout = async (
  workoutId: string,
  exerciseParam: Partial<TExercise> & { id?: string }
): Promise<string> => {
  let exerciseId = exerciseParam.id;
  if (!exerciseId) {
    const docRef = await addDoc(collection(db, "exercises"), {
      name: exerciseParam.name,
      url: exerciseParam.url,
      sets: exerciseParam.sets || [],
    });
    exerciseId = docRef.id;
  }
  await updateDoc(doc(db, "workouts", workoutId), {
    exercises: arrayUnion(exerciseId),
  });
  return exerciseId;
};

export const removeExerciseFromWorkout = async (
  workoutId: string,
  exerciseId: string
): Promise<void> => {
  await updateDoc(doc(db, "workouts", workoutId), {
    exercises: arrayRemove(exerciseId),
  });
};

export const createWorkout = async (
  payload: TWorkoutPayload
): Promise<string> => {
  const docRef = await addDoc(collection(db, "workouts"), {
    name: payload.name,
    notes: payload.notes,
    exercises: payload.exercises ?? [],
  });

  return docRef.id;
};
