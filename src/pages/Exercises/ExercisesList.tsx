import { ExerciseCard } from "@/components/ExerciseCard";
import { useExercisesContext } from "./ExercisesContext";

export const ExercisesList = () => {
  const { searchResults } = useExercisesContext();

  return (
    <div className="max-h-[400px] overflow-y-auto flex flex-col gap-3 pr-1.5">
      {searchResults.map((item) => (
        <ExerciseCard key={item.id} exercise={item} />
      ))}
    </div>
  );
};
