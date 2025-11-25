import { ExerciseCardAdd } from "@/components/ExerciseCard";
import { useExercisesStore } from "@/store/ExercisesStore";
import { useEffect } from "react";
import { useCreateWorkout } from "./useCreateWorkout";

export const ExercisesList = () => {
  const exercises = useExercisesStore((state) => state.data);
  const getExercises = useExercisesStore((state) => state.actions.getAll);

  const { toggleSelect } = useCreateWorkout();

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  return (
    <div className="flex flex-col gap-4 ">
      <h5>Choose Exercises</h5>
      <div className="max-h-[500px] overflow-y-auto flex flex-col gap-3 pr-1.5">
        {exercises.map((item) => (
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
