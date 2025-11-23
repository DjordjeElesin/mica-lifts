import { Button } from "@/components/ui";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { useAddExercise } from "./useAddExercise";

export const AddExerciseFooter = () => {
  const { onSubmit, isSubmitDisabled } = useAddExercise();
  return (
    <DialogFooter className="mt-4">
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button type="submit" disabled={isSubmitDisabled} onClick={onSubmit}>
        Submit
      </Button>
    </DialogFooter>
  );
};
