import { db } from "@/lib/firebase";
import type { TExercise, TExercisePaylod } from "@/types";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const getExercises = async (): Promise<TExercise[]> => {
  const [muscleSnap, exerciseSnap] = await Promise.all([
    getDocs(collection(db, "muscleGroups")),
    getDocs(collection(db, "exercises")),
  ]);

  const musclesMap = new Map(
    muscleSnap.docs.map((d) => [d.id, { id: d.id, ...d.data() }])
  );

  return exerciseSnap.docs.map(
    (d) =>
      ({
        id: d.id,
        name: d.data().name,
        url: d.data().url,
        muscleGroup: musclesMap.get(d.data().muscleGroup) || null,
      } as TExercise)
  );
};

export const createExercise = async (payload: TExercisePaylod) => {
  const docRef = await addDoc(collection(db, "exercises"), { ...payload });
  return docRef.id;
};
