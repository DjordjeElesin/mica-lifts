import { useMemo, type ChangeEvent } from "react";
import { useCreateWorkoutContext } from "./CreateWorkoutContext";
import type { TExercise } from "../Workouts/types";
import { useWorkoutDetailsStore } from "@/store/WorkoutDetailsStore";
import { useNavigate } from "react-router-dom";

export const useCreateWorkout = () => {
  const navigate = useNavigate();
  const { formValues, setFormValues, selectedExercises, setSelectedExercises } =
    useCreateWorkoutContext();

  const createWorkout = useWorkoutDetailsStore(
    (state) => state.actions.createWorkout
  );

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues((s) => ({ ...s, [name]: value }));
  };

  const toggleSelect = (exercise: TExercise) => {
    setSelectedExercises((prev) => {
      const exists = prev.some((ex) => ex.id === exercise.id);
      return exists
        ? prev.filter((ex) => ex.id !== exercise.id)
        : [...prev, exercise];
    });
  };

  const isSubmitDisabled = useMemo(
    () => !formValues.name || !selectedExercises.length,
    [formValues, selectedExercises]
  );

  const onSubmit = () => {
    if (isSubmitDisabled) return;
    const payload = {
      name: formValues.name,
      notes: formValues.notes,
      exercises: selectedExercises.map(({ id }) => id),
    };
    createWorkout(payload, navigate);
  };

  return {
    formValues,
    onFormChange,
    selectedExercises,
    toggleSelect,
    onSubmit,
    isSubmitDisabled,
  };
};
