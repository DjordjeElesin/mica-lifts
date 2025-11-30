import { Button } from "@/components/ui";
import { useAddExercise } from "../useAddExercise";
import { DrawerFooter } from "@/components/ui/drawer";
import { Loading } from "@/components/Loading";
import { PlusCircle } from "lucide-react";

export const AddExerciseFooter = () => {
  const {
    step,
    onNext,
    onBack,
    onCancel,
    isNextDisabled,
    onAddExercise,
    isAddExerciseDisabled,
  } = useAddExercise();
  const [isStepOne, isStepTwo] = [step === 1, step === 2];

  return (
    <DrawerFooter className="flex flex-row gap-4 items-center p-4 pb-7">
      <Loading type="workoutDetails" />
      <Button
        variant="outline"
        className="flex-1"
        onClick={isStepOne ? onCancel : onBack}
      >
        {isStepOne ? "Cancel" : "Back"}
      </Button>
      <Button
        onClick={isStepTwo ? onAddExercise : onNext}
        className="flex-1"
        disabled={isStepTwo ? isAddExerciseDisabled : isNextDisabled}
      >
        {isStepTwo && <PlusCircle />}
        {isStepTwo ? "Add" : "Next"}
      </Button>
    </DrawerFooter>
  );
};
