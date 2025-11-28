import { Button } from "@/components/ui";
import { useCreateExercise } from "./useCreateExercise";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";

export const CreateExerciseFooter = () => {
  const { onSubmit, isSubmitDisabled } = useCreateExercise();
  return (
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
      <Button type="submit" disabled={isSubmitDisabled} onClick={onSubmit}>
        Submit
      </Button>
    </DrawerFooter>
  );
};
