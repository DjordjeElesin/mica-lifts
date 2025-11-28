import { ExerciseCard, ExerciseCardActive } from "@/components/ExerciseCard";
import type { TExercise } from "@/types";

export const ExerciseList = ({
  exercises,
  isActive,
  workoutId,
  onRemoveExercise,
}: {
  exercises: TExercise[];
  isActive: boolean;
  workoutId: string;
  onRemoveExercise: (wId: string, eId: string) => Promise<void>;
}) =>
  isActive
    ? exercises.map((item) => (
        <ExerciseCardActive
          key={item.id}
          exercise={item}
          onRemove={() => onRemoveExercise(workoutId, item.id)}
        />
      ))
    : exercises.map((item) => (
        <ExerciseCard
          key={item.id}
          exercise={item}
          onRemove={() => onRemoveExercise(workoutId, item.id)}
        />
      ));
