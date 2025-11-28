import { useMuscleGroupStore } from "@/store/MuscleGroupsStore";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type TCreateExerciseContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  formValues: { name: string; url: string; muscleGroup: string };
  setFormValues: Dispatch<
    SetStateAction<{ name: string; url: string; muscleGroup: string }>
  >;
  muscleGroupOptions: { label: string; value: string }[];
} | null;

export const CreateExerciseContext =
  createContext<TCreateExerciseContext>(null);

const initialFormValues = { name: "", url: "", muscleGroup: "" };

export const CreateExerciseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const muscleGroups = useMuscleGroupStore((store) => store.data);
  const getMuscleGroups = useMuscleGroupStore((store) => store.actions.getAll);
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState<{
    name: string;
    url: string;
    muscleGroup: string;
  }>(initialFormValues);

  useEffect(() => {
    getMuscleGroups();
  }, [getMuscleGroups]);

  const muscleGroupOptions = useMemo(() => {
    return muscleGroups.map(({ id, name }) => ({ label: name, value: id }));
  }, [muscleGroups]);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      formValues,
      setFormValues,
      muscleGroupOptions,
    }),
    [isOpen, setIsOpen, formValues, setFormValues, muscleGroupOptions]
  );

  return (
    <CreateExerciseContext.Provider value={value}>
      {children}
    </CreateExerciseContext.Provider>
  );
};

export const useCreateExerciseContext = () => {
  const context = useContext(CreateExerciseContext);

  if (!context) {
    throw new Error(
      "useAddExerciseContext must be used inside an AddExerciseProvider"
    );
  }

  return context;
};
