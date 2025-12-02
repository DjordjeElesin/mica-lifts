import { useMemo } from "react";
import { useAddExerciseContext } from "./AddExerciseContext";
import { useWorkoutDetailsStore } from "@/store/WorkoutDetailsStore";
import { useSearchExercises } from "@/hooks";
import { useStepManagement } from "./useStepManagement";
import type {
  TExercise,
  TExerciseActive,
  TSet,
  TWorkoutExercisePayload,
} from "@/types";

export const useAddExercise = () => {
  const {
    workoutId,
    isOpen,
    setIsOpen,
    step,
    setStep,
    search,
    setSearch,
    searchResults,
    selectedExercise,
    setSelectedExercise,
  } = useAddExerciseContext();

  const { onChangeSearch } = useSearchExercises({
    search,
    setSearch,
  });

  const { onNext, onBack, onCancel, isNextDisabled } = useStepManagement({
    step,
    setStep,
    selectedExercise,
    setIsOpen,
  });

  const addExercise = useWorkoutDetailsStore(
    (state) => state.actions.addExercise,
  );

  const toggleSelect = (exercise: TExercise) => {
    setSelectedExercise((prev) => {
      return prev?.id === exercise.id
        ? null
        : ({
            ...exercise,
            sets: [],
          } as TExerciseActive);
    });
    setStep((prev) => prev + 1);
  };

  const onAddSetToExercise = (set: TSet, exerciseId: string) => {
    setSelectedExercise((prev): TExerciseActive | null => {
      if (!prev) return prev;
      if (prev.id !== exerciseId) return prev;
      return { ...prev, sets: [...prev.sets, set] };
    });
  };

  const isAddExerciseDisabled = useMemo(() => {
    return false;
  }, []);

  const onAddExercise = () => {
    if (isAddExerciseDisabled) return;

    const payload = {
      exerciseId: selectedExercise?.id,
      sets: selectedExercise?.sets,
    } as TWorkoutExercisePayload;

    addExercise(workoutId, payload);
    setStep(1);
    setSearch("");
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    step,
    onNext,
    onBack,
    onCancel,
    isNextDisabled,
    search,
    onChangeSearch,
    searchResults,
    selectedExercise,
    toggleSelect,
    onAddSetToExercise,
    onAddExercise,
    isAddExerciseDisabled,
  };
};
