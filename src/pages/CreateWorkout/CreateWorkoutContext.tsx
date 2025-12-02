import { useExercisesStore } from "@/store/ExercisesStore";
import type { TExercise, TExerciseActive } from "@/types";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type TCreateWorkoutContext = {
  exercises: TExercise[];
  formValues: { name: string; notes: string };
  setFormValues: Dispatch<SetStateAction<{ name: string; notes: string }>>;
  selectedExercises: TExerciseActive[];
  setSelectedExercises: Dispatch<SetStateAction<TExerciseActive[]>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchResults: TExercise[];
};

export const CreateWorkoutContext = createContext<TCreateWorkoutContext | null>(
  null,
);

const initialFormValues = { name: "", notes: "" };

export const CreateWorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const exercises = useExercisesStore((state) => state.data);

  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<{ name: string; notes: string }>(
    initialFormValues,
  );
  const [selectedExercises, setSelectedExercises] = useState<TExerciseActive[]>(
    [],
  );
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
      formValues,
      setFormValues,
      selectedExercises,
      setSelectedExercises,
      step,
      setStep,
      exercises,
      searchResults,
      search,
      setSearch,
    }),
    [formValues, selectedExercises, step, exercises, searchResults, search],
  );
  return (
    <CreateWorkoutContext.Provider value={value}>
      {children}
    </CreateWorkoutContext.Provider>
  );
};

export const useCreateWorkoutContext = () => {
  const context = useContext(CreateWorkoutContext);

  if (!context) {
    throw new Error(
      "useCreateWorkoutContext must be used inside a CreateWorkoutProvider",
    );
  }
  return context;
};
