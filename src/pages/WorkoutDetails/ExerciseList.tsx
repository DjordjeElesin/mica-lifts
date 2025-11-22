import { ExerciseCard, ExerciseCardActive } from "@/components/ExerciseCard";
import type { TExercise } from "../Workouts/types";

export const ExerciseList = ({
  exercises,
  isActive,
}: {
  exercises: TExercise[];
  isActive: boolean;
}) =>
  isActive
    ? exercises.map((item) => (
        <ExerciseCardActive key={item.id} exercise={item} />
      ))
    : exercises.map((item) => <ExerciseCard key={item.id} exercise={item} />);
