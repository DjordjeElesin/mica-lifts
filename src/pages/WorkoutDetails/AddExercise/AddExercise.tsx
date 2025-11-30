import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { AddExerciseProvider } from "./AddExerciseContext";
import { AddExerciseFooter } from "./components/AddExerciseFooter";
import { useAddExercise } from "./useAddExercise";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SelectExercises } from "./components/SelectExercises";
import { ExercisesSetup } from "./components/ExercisesSetup";
import { Loading } from "@/components/Loading";

export const AddExerciseModal = () => {
  const { isOpen, setIsOpen, step } = useAddExercise();

  const [isStepOne, isStepTwo] = [step === 1, step === 2];

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex gap-2 w-full mt-2.5">
          <PlusCircle />
          <span>Add Exercise</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-[425px] max-h-[87vh] h-[87vh] data-[vaul-drawer-direction=top]:max-h-[87vh] data-[vaul-drawer-direction=bottom]:max-h-[87vh]">
        <DrawerHeader>
          <DrawerTitle className="pb-0">Add Exercise</DrawerTitle>
          <DrawerDescription className="mt-1">
            Add an exercise to the current workout
          </DrawerDescription>
        </DrawerHeader>
        {isStepOne && <SelectExercises />}
        {isStepTwo && <ExercisesSetup />}
        <AddExerciseFooter />
      </DrawerContent>
      <Loading type="exercises" />
    </Drawer>
  );
};

export const AddExercise = () => {
  return (
    <AddExerciseProvider>
      <AddExerciseModal />
    </AddExerciseProvider>
  );
};
