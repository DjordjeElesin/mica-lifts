import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CreateExerciseForm } from "./CreateExerciseForm";
import { CreateExerciseProvider } from "./CreateExerciseContext";
import { CreateExerciseFooter } from "./CreateExerciseFooter";
import { useCreateExercise } from "./useCreateExercise";
import { Loading } from "../Loading";

export const CreateExerciseDrawer = () => {
  const { isOpen, setIsOpen } = useCreateExercise();
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="flex gap-2 w-full mt-2.5">
          <PlusCircle />
          <span>Create Exercise</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="pb-6">
        <Loading type="exercises" />
        <DrawerHeader>
          <DrawerTitle>Create Exercise</DrawerTitle>
          <DrawerDescription>Create a new exercise</DrawerDescription>
        </DrawerHeader>
        <CreateExerciseForm />
        <CreateExerciseFooter />
      </DrawerContent>
    </Drawer>
  );
};

export const CreateExercise = () => {
  return (
    <CreateExerciseProvider>
      <CreateExerciseDrawer />
    </CreateExerciseProvider>
  );
};
