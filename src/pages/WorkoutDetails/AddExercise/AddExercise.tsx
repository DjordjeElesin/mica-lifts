import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddExerciseForm } from "./AddExerciseForm";
import { AddExerciseProvider } from "./AddExerciseContext";
import { SetsTable } from "./SetsTable";
import { AddExerciseFooter } from "./AddExerciseFooter";
import { useAddExercise } from "./useAddExercise";

export const AddExerciseModal = () => {
  const { isOpen, setIsOpen } = useAddExercise();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-2 w-full mt-2.5">
          <PlusCircle />
          <span>Add Exercise</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Exercise</DialogTitle>
          <DialogDescription>
            Add an exercise to the current workout
          </DialogDescription>
        </DialogHeader>
        <AddExerciseForm />
        <SetsTable />
        <AddExerciseFooter />
      </DialogContent>
    </Dialog>
  );
};

export const AddExercise = () => {
  return (
    <AddExerciseProvider>
      <AddExerciseModal />
    </AddExerciseProvider>
  );
};
