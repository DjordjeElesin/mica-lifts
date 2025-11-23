import { useMemo, type ChangeEvent } from "react";
import { useAddExerciseContext } from "./AddExerciseContext";
import type { TSet, TSetType } from "@/types";
import { useWorkoutDetailsStore } from "@/store/WorkoutDetailsStore";

export const useAddExercise = () => {
  const {
    isOpen,
    setIsOpen,
    workoutId,
    sets,
    setSets,
    newSet,
    setNewSet,
    formValues,
    setFormValues,
  } = useAddExerciseContext();

  const addExercise = useWorkoutDetailsStore(
    (state) => state.actions.addExercise
  );

  const increase = () =>
    setNewSet((prev) => ({ ...prev, reps: prev.reps + 1 }));
  const decrease = () =>
    setNewSet((prev) => ({ ...prev, reps: prev.reps - 1 }));

  const onChangeSetType = (type: string) => {
    setNewSet((prev) => ({ ...prev, type: type as TSetType }));
  };

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues((s) => ({ ...s, [name]: value }));
  };

  const onAddSet = (set: TSet) => {
    setSets((prev) => [...prev, set]);
  };
  const onRemoveSet = (index: number) => {
    const updatedSets = sets.filter((_, i) => i !== index);
    setSets(updatedSets);
  };

  const isSubmitDisabled = useMemo(
    () => !sets.length || !formValues.name,
    [sets, formValues]
  );

  const onSubmit = () => {
    if (isSubmitDisabled) return;

    const exercise = {
      name: formValues.name,
      url: formValues.url,
      sets,
    };
    addExercise(workoutId, exercise);
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    sets,
    newSet,
    increase,
    decrease,
    onChangeSetType,
    formValues,
    onFormChange,
    onAddSet,
    onRemoveSet,
    onSubmit,
    isSubmitDisabled,
  };
};
