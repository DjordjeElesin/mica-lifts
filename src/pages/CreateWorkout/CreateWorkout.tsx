import { CreateWorkoutForm } from "./components/CreateWorkoutForm";
import { CreateWorkoutProvider } from "./CreateWorkoutContext";
import { Loading } from "@/components/Loading";
import { ButtonSection } from "./components/ButtonSection";
import { useCreateWorkout } from "./useCreateWorkout";
import { useExercisesStore } from "@/store/ExercisesStore";
import { SelectExercises } from "./components/SelectExercises";
import { ExercisesSetup } from "./components/ExercisesSetup";

export const loader = async () =>
  Promise.all([useExercisesStore.getState().actions.getAll()]);

export const CreateWorkoutBase = () => {
  const {
    step,
    formValues: { name },
  } = useCreateWorkout();
  const [isStepOne, isStepTwo, isStepThree] = [
    step === 1,
    step === 2,
    step === 3,
  ];

  return (
    <div className="flex flex-col gap-4 pb-20">
      <h3>{name ? name : "Untitled"}</h3>
      <Loading type="exercises" />
      {isStepOne && <CreateWorkoutForm />}
      {isStepTwo && <SelectExercises />}
      {isStepThree && <ExercisesSetup />}
      <ButtonSection />
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
