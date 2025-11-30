import type { TExercise } from "@/types";
import { useMemo, type Dispatch, type SetStateAction } from "react";

type useStepManagementProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  selectedExercise: TExercise | null;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const useStepManagement = ({
  step,
  setStep,
  selectedExercise,
  setIsOpen,
}: useStepManagementProps) => {
  const onNext = () => {
    setStep((prev) => prev + 1);
  };
  const onBack = () => {
    setStep((prev) => prev - 1);
  };

  const onCancel = () => {
    setIsOpen(false);
  };
  const isNextDisabled = useMemo(
    () => step === 1 && !selectedExercise,
    [step, selectedExercise],
  );

  return { onNext, onBack, onCancel, isNextDisabled };
};
