import { db } from "@/lib/firebase";
import type { TExercise } from "@/pages/Workouts/types";
import { collection, getDocs } from "firebase/firestore";

export const getExercises = async (): Promise<TExercise[]> => {
  const snaps = await getDocs(collection(db, "exercises"));
  return snaps.docs.map(
    (d) =>
      ({
        id: d.id,
        name: d.data().name,
        url: d.data().url,
        sets: d.data().sets || [],
      } as TExercise)
  );
};
