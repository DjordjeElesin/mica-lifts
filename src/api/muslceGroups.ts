import { db } from "@/lib/firebase";
import type { TMuscleGroup } from "@/types";
import { collection, getDocs } from "firebase/firestore";

export const getMuscleGroups = async (): Promise<TMuscleGroup[]> => {
  const snaps = await getDocs(collection(db, "muscleGroups"));
  return snaps.docs.map((d) => ({
    id: d.id,
    name: d.data().name,
    image: d.data().image,
  }));
};
