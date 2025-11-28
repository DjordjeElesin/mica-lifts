import type { TExercise } from "@/types";
import { useMemo, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

type useStepManagementProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  name: string;
  selectedExercises: TExercise[];
};

export const useStepManagement = ({
  step,
  setStep,
  name,
  selectedExercises,
}: useStepManagementProps) => {
  const navigate = useNavigate();

  const onNext = () => {
    setStep((prev) => prev + 1);
  };
  const onBack = () => {
    setStep((prev) => prev - 1);
  };

  const onCancel = () => {
    navigate("/workouts");
  };
  const isNextDisabled = useMemo(
    () => (step === 1 && !name) || (step === 2 && !selectedExercises.length),
    [step, name, selectedExercises]
  );

  return { onNext, onBack, onCancel, isNextDisabled };
};
