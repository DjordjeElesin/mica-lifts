import type { TSet } from "@/types";
import {
  createContext,
  useContext,
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
  sets: TSet[];
  setSets: Dispatch<SetStateAction<TSet[]>>;
  newSet: TSet;
  setNewSet: Dispatch<SetStateAction<TSet>>;
  formValues: { name: string; url: string };
  setFormValues: Dispatch<SetStateAction<{ name: string; url: string }>>;
} | null;

//eslint-disable-next-line
export const AddExerciseContext = createContext<TAddExerciseContext>(null);

const initialFormValues = { name: "", url: "" };
const initialNewSet = { type: "", reps: 8 };

export const AddExerciseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { id: workoutId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [sets, setSets] = useState<TSet[]>([]);
  const [newSet, setNewSet] = useState<TSet>(initialNewSet as TSet);
  const [formValues, setFormValues] = useState<{ name: string; url: string }>(
    initialFormValues
  );

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      workoutId: workoutId || "",
      sets,
      setSets,
      newSet,
      setNewSet,
      formValues,
      setFormValues,
    }),
    [
      isOpen,
      setIsOpen,
      workoutId,
      sets,
      setSets,
      newSet,
      setNewSet,
      formValues,
      setFormValues,
    ]
  );

  return (
    <AddExerciseContext.Provider value={value}>
      {children}
    </AddExerciseContext.Provider>
  );
};

//eslint-disable-next-line
export const useAddExerciseContext = () => {
  const context = useContext(AddExerciseContext);

  if (!context) {
    throw new Error(
      "useAddExerciseContext must be used inside an AddExerciseProvider"
    );
  }

  return context;
};
