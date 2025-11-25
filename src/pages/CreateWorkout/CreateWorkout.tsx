import { Button } from "@/components/ui";
import { Bookmark } from "lucide-react";
import { CreateWorkoutForm } from "./CreateWorkoutForm";
import { ExercisesList } from "./ExercisesList";
import { CreateWorkoutProvider } from "./CreateWorkoutContext";
import { useCreateWorkout } from "./useCreateWorkout";
import { Loading } from "@/components/Loading";

export const CreateWorkoutBase = () => {
  const { onSubmit, isSubmitDisabled } = useCreateWorkout();
  return (
    <div className="flex flex-col gap-4">
      <h3>Untitled</h3>
      <Loading type="createWorkout" />
      <CreateWorkoutForm />
      <ExercisesList />
      <Button className="mt-8" onClick={onSubmit} disabled={isSubmitDisabled}>
        <Bookmark />
        Submit
      </Button>
    </div>
  );
};

export const CreateWorkout = () => {
  return (
    <CreateWorkoutProvider>
      <CreateWorkoutBase />
    </CreateWorkoutProvider>
  );
};
