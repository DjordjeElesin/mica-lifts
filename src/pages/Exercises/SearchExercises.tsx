import { useExercisesContext } from "./ExercisesContext";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui";
import { useSearchExercises } from "@/hooks";

export const SearchExercises = () => {
  const { exercises, setSearchResults, search, setSearch } =
    useExercisesContext();

  const { onChangeSearch } = useSearchExercises({
    exercises,
    search,
    setSearch,
    setSearchResults,
  });

  return (
    <div className="flex flex-col gap-4 mb-1">
      <Input
        value={search}
        onChange={onChangeSearch}
        placeholder="Search exercise..."
      />
      <Separator orientation="horizontal" />
    </div>
  );
};
