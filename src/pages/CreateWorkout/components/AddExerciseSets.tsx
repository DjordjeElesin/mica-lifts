import { ExerciseCardAddSets } from "@/components/ExerciseCard";
import { useCreateWorkout } from "../useCreateWorkout";

export const AddExerciseSets = () => {
  const { selectedExercises, onAddSetToExercise } = useCreateWorkout();

  return (
    <div className="flex flex-col gap-3 pr-1.5">
      {selectedExercises.map((item) => (
        <ExerciseCardAddSets
          key={item.id}
          exercise={item}
          onAdd={onAddSetToExercise}
        />
      ))}
    </div>
  );
};
