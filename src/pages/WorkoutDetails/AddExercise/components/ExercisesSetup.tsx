import { ExerciseCardAddSets } from "@/components/ExerciseCard";
import { useAddExercise } from "../useAddExercise";

export const ExercisesSetup = () => {
  const { selectedExercise, onAddSetToExercise } = useAddExercise();

  return (
    <div className="flex flex-col gap-3 p-4">
      {selectedExercise && (
        <ExerciseCardAddSets
          key={selectedExercise.id}
          exercise={selectedExercise}
          onAdd={onAddSetToExercise}
        />
      )}
    </div>
  );
};
