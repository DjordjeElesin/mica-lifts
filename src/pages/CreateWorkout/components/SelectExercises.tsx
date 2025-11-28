import { ExerciseCardAdd } from "@/components/ExerciseCard";
import { useCreateWorkout } from "../useCreateWorkout";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui";

export const SelectExercises = () => {
  const { toggleSelect, search, searchResults, onChangeSearch } =
    useCreateWorkout();

  return (
    <div className="flex flex-col gap-4 ">
      <h5>Select Exercises</h5>
      <div className="flex flex-col gap-4 mb-1">
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder="Search exercise..."
        />
        <Separator orientation="horizontal" />
      </div>
      <div className="flex flex-col gap-3 pr-1.5">
        {searchResults.map((item) => (
          <ExerciseCardAdd
            key={item.id}
            exercise={item}
            toggleAdd={() => toggleSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};
