import { Loading } from "@/components/Loading";
import { SearchExercises } from "./SearchExercises";
import { ExercisesProvider } from "./ExercisesContext";
import { ExercisesList } from "./ExercisesList";
import { useMuscleGroupStore } from "@/store/MuscleGroupsStore";
import { useExercisesStore } from "@/store/ExercisesStore";
import { CreateExercise } from "@/components/CreateExercise";

export const loader = async () =>
  Promise.all([
    useMuscleGroupStore.getState().actions.getAll(),
    useExercisesStore.getState().actions.getAll(),
  ]);

export const ExercisesContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <Loading type="exercises" />
      <h3>Exercises</h3>
      <SearchExercises />
      <CreateExercise />
      <ExercisesList />
    </div>
  );
};

export const Exercises = () => (
  <ExercisesProvider>
    <ExercisesContent />
  </ExercisesProvider>
);
