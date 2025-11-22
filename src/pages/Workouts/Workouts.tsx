import { useWorkoutStore } from "@/store/WorkoutsStore";
import { WorkoutCard } from "./WorkoutCard/WorkoutCard";
import { useEffect } from "react";

export const Workouts = () => {
  const getWorkouts = useWorkoutStore((store) => store.actions.getAll);
  const data = useWorkoutStore((store) => store.data);

  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  return (
    <div className="flex flex-col gap-4">
      <h3>Workouts</h3>
      {data?.map(({ id, name, exercises }) => (
        <WorkoutCard
          key={id}
          id={id}
          name={name}
          exercisesNumber={exercises.length}
        />
      ))}
    </div>
  );
};
