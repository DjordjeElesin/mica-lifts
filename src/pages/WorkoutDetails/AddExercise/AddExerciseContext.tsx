import { useExercisesStore } from "@/store/ExercisesStore";
import type { TExercise, TExerciseActive } from "@/types";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useParams } from "react-router-dom";

type TAddExerciseContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  workoutId: string;
  selectedExercise: TExerciseActive | null;
  setSelectedExercise: Dispatch<SetStateAction<TExerciseActive | null>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  exercises: TExercise[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchResults: TExercise[];
  setSearchResults: Dispatch<SetStateAction<TExercise[]>>;
} | null;

export const AddExerciseContext = createContext<TAddExerciseContext>(null);

export const AddExerciseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { id: workoutId } = useParams();
  const exercises = useExercisesStore((store) => store.data);
  const getExercises = useExercisesStore((store) => store.actions.getAll);

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] =
    useState<TExerciseActive | null>(null);
  const [searchResults, setSearchResults] = useState(exercises);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  useEffect(() => {
    setSearchResults(exercises);
  }, [exercises]);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      workoutId: workoutId || "",
      step,
      setStep,
      exercises,
      selectedExercise,
      setSelectedExercise,
      search,
      setSearch,
      searchResults,
      setSearchResults,
    }),
    [
      isOpen,
      setIsOpen,
      workoutId,
      step,
      exercises,
      selectedExercise,
      search,
      searchResults,
    ],
  );

  return (
    <AddExerciseContext.Provider value={value}>
      {children}
    </AddExerciseContext.Provider>
  );
};

export const useAddExerciseContext = () => {
  const context = useContext(AddExerciseContext);

  if (!context) {
    throw new Error(
      "useAddExerciseContext must be used inside an AddExerciseProvider",
    );
  }

  return context;
};
