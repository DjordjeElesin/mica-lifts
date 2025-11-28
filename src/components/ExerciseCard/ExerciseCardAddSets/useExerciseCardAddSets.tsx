import type { TSet, TSetType } from "@/types";
import { useState } from "react";

const initialNewSet = { type: "" as TSetType, reps: 5 };

export const useExerciseCardAddSets = ({
  sets,
  onAdd,
}: {
  sets: TSet[];
  onAdd: (set: TSet, exerciseId: string) => void;
}) => {
  const [newSet, setNewSet] = useState(initialNewSet);

  const increase = () =>
    setNewSet((prev) => ({ ...prev, reps: prev.reps + 1 }));
  const decrease = () =>
    setNewSet((prev) => ({ ...prev, reps: prev.reps - 1 }));

  const onChangeSetType = (type: string) => {
    setNewSet((prev) => ({ ...prev, type: type as TSetType }));
  };

  const onAddSet = (set: TSet, exerciseId: string) => {
    onAdd(set, exerciseId);
  };

  return { sets, newSet, increase, decrease, onChangeSetType, onAddSet };
};
