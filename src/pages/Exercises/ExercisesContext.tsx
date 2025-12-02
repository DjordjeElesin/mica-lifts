import { useExercisesStore } from "@/store/ExercisesStore";
import { useMuscleGroupStore } from "@/store/MuscleGroupsStore";
import type { TExercise, TMuscleGroup } from "@/types";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type TExercisesContext = {
  muscleGroups: TMuscleGroup[];
  exercises: TExercise[];
  searchResults: TExercise[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const ExercisesContext = createContext<TExercisesContext | null>(null);
export const ExercisesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const muscleGroups = useMuscleGroupStore((store) => store.data);
  const exercises = useExercisesStore((store) => store.data);

  const [search, setSearch] = useState("");

  const searchResults = useMemo(
    () =>
      !search
        ? exercises
        : exercises.filter(({ name }) =>
            name.toLowerCase().includes(search.toLowerCase()),
          ),
    [exercises, search],
  );

  const value = useMemo(
    () => ({
      muscleGroups,
      exercises,
      searchResults,
      search,
      setSearch,
    }),
    [muscleGroups, exercises, searchResults, search],
  );

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};

export const useExercisesContext = () => {
  const context = useContext(ExercisesContext);

  if (!context) {
    throw new Error(
      "useExercisesContext must be used inside the ExercisesProvider",
    );
  }

  return context;
};
