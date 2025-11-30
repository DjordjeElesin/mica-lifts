import { ExerciseCardAdd } from "@/components/ExerciseCard";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui";
import { useAddExercise } from "../useAddExercise";
import type { TExerciseActive } from "@/types";

export const SelectExercises = () => {
  const { toggleSelect, search, searchResults, onChangeSearch } =
    useAddExercise();

  return (
    <div className="flex flex-col gap-4 p-4">
      <h5>Select Exercises</h5>
      <div className="flex flex-col gap-4 mb-1">
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder="Search exercise..."
        />
        <Separator orientation="horizontal" />
      </div>
      <div className="flex flex-col gap-3 pr-1.5 max-h-[270px] min-h-[270px] overflow-y-auto">
        {searchResults.map((item) => (
          <ExerciseCardAdd
            key={item.id}
            exercise={item}
            toggleAdd={() => toggleSelect(item as TExerciseActive)}
          />
        ))}
      </div>
    </div>
  );
};
