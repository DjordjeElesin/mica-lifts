import { useMemo, type ChangeEvent } from "react";
import { useCreateExerciseContext } from "./CreateExerciseContext";
import { useExercisesStore } from "@/store/ExercisesStore";

const initialFormValues = { name: "", url: "", muscleGroup: "" };

export const useCreateExercise = () => {
  const { isOpen, setIsOpen, formValues, setFormValues, muscleGroupOptions } =
    useCreateExerciseContext();

  const createExercise = useExercisesStore(
    (state) => state.actions.createExercise
  );
  const getExercises = useExercisesStore((state) => state.actions.getAll);

  const onMuscleGroupChange = (muscleGroup: string) => {
    setFormValues((prev) => ({ ...prev, muscleGroup }));
  };

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues((s) => ({ ...s, [name]: value }));
  };

  const isSubmitDisabled = useMemo(
    () => !formValues.name || !formValues.muscleGroup,
    [formValues]
  );

  const onSubmit = async () => {
    if (isSubmitDisabled) return;

    const exercise = {
      name: formValues.name,
      url: formValues.url,
      muscleGroup: formValues.muscleGroup,
    };
    await createExercise(exercise);
    await getExercises();
    setIsOpen(false);
    setFormValues(initialFormValues);
  };

  return {
    isOpen,
    setIsOpen,
    formValues,
    onFormChange,
    onMuscleGroupChange,
    onSubmit,
    isSubmitDisabled,
    muscleGroupOptions,
  };
};
