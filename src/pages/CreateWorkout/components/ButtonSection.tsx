import { Button } from "@/components/ui";
import { useCreateWorkout } from "../useCreateWorkout";

export const ButtonSection = () => {
  const {
    step,
    onCancel,
    onBack,
    onNext,
    onSubmit,
    isSubmitDisabled,
    isNextDisabled,
  } = useCreateWorkout();

  const [isStepOne, isStepThree] = [step === 1, step === 3];

  return (
    <div className="flex gap-4 fixed bottom-0 left-0 right-0 p-4 pb-7 h-20 bg-slate-950">
      <Button
        variant="outline"
        className="flex-1"
        onClick={isStepOne ? onCancel : onBack}
      >
        {isStepOne ? "Cancel" : "Back"}
      </Button>
      <Button
        onClick={isStepThree ? onSubmit : onNext}
        className="flex-1"
        disabled={isStepThree ? isSubmitDisabled : isNextDisabled}
      >
        {isStepThree ? "Submit" : "Next"}
      </Button>
    </div>
  );
};
