import { useMemo, type ChangeEvent } from "react";
import { useCreateWorkoutContext } from "./CreateWorkoutContext";
import { useWorkoutDetailsStore } from "@/store/WorkoutDetailsStore";
import { useNavigate } from "react-router-dom";
import type { TExercise, TSet } from "@/types";
import { useSearchExercises } from "@/hooks";
import { useStepManagement } from "./useStepManagement";

export const useCreateWorkout = () => {
  const navigate = useNavigate();
  const {
    exercises,
    formValues,
    setFormValues,
    selectedExercises,
    setSelectedExercises,
    step,
    setStep,
    search,
    setSearch,
    searchResults,
  } = useCreateWorkoutContext();

  const { onChangeSearch } = useSearchExercises({
    search,
    setSearch,
  });

  const { onNext, onBack, onCancel, isNextDisabled } = useStepManagement({
    step,
    setStep,
    name: formValues.name,
    selectedExercises,
  });

  const createWorkout = useWorkoutDetailsStore(
    (state) => state.actions.createWorkout,
  );

  const onFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((s) => ({ ...s, [name]: value }));
  };

  const toggleSelect = (exercise: TExercise) => {
    setSelectedExercises((prev) => {
      const exists = prev.some((ex) => ex.id === exercise.id);
      return exists
        ? prev.filter((ex) => ex.id !== exercise.id)
        : [...prev, { ...exercise, sets: [] }];
    });
  };

  const onAddSetToExercise = (set: TSet, exerciseId: string) => {
    setSelectedExercises((prev) =>
      prev.map((item) =>
        item.id === exerciseId ? { ...item, sets: [...item.sets, set] } : item,
      ),
    );
  };

  // const onRemoveSet = (index: number) => {
  //   const updatedSets = sets.filter((_, i) => i !== index);
  //   setSets(updatedSets);
  // };

  const isSubmitDisabled = useMemo(
    () => !formValues.name || !selectedExercises.length,
    [formValues, selectedExercises],
  );

  const onSubmit = () => {
    if (isSubmitDisabled) return;
    const payload = {
      name: formValues.name,
      notes: formValues.notes,
      exercises: selectedExercises.map(({ id, sets }) => ({
        exerciseId: id,
        sets,
      })),
    };
    createWorkout(payload, navigate);
  };

  return {
    exercises,
    formValues,
    onFormChange,
    selectedExercises,
    toggleSelect,
    onSubmit,
    isSubmitDisabled,
    step,
    onNext,
    onBack,
    onCancel,
    isNextDisabled,
    search,
    searchResults,
    onChangeSearch,
    onAddSetToExercise,
  };
};
