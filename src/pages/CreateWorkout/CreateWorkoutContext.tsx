import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { TExercise } from "../Workouts/types";

type TCreateWorkoutContext = {
  formValues: { name: string; notes: string };
  setFormValues: Dispatch<SetStateAction<{ name: string; notes: string }>>;
  selectedExercises: TExercise[];
  setSelectedExercises: Dispatch<SetStateAction<TExercise[]>>;
};

//eslint-disable-next-line
export const CreateWorkoutContext = createContext<TCreateWorkoutContext | null>(
  null
);

const initialFormValues = { name: "", notes: "" };

export const CreateWorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formValues, setFormValues] = useState<{ name: string; notes: string }>(
    initialFormValues
  );
  const [selectedExercises, setSelectedExercises] = useState<TExercise[]>([]);
  const value = useMemo(
    () => ({
      formValues,
      setFormValues,
      selectedExercises,
      setSelectedExercises,
    }),
    [formValues, selectedExercises]
  );
  return (
    <CreateWorkoutContext.Provider value={value}>
      {children}
    </CreateWorkoutContext.Provider>
  );
};

//eslint-disable-next-line
export const useCreateWorkoutContext = () => {
  const context = useContext(CreateWorkoutContext);

  if (!context) {
    throw new Error(
      "useCreateWorkoutContext must be used inside a CreateWorkoutProvider"
    );
  }
  return context;
};
