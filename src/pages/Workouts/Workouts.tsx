import { useWorkoutStore } from "@/store/WorkoutsStore";
import { WorkoutCard } from "./components/WorkoutCard";
import { useEffect } from "react";
import { Loading } from "@/components/Loading";
import { Button } from "@/components/ui";
import { ListPlus } from "lucide-react";
import { Link } from "react-router-dom";

export const Workouts = () => {
  const getWorkouts = useWorkoutStore((store) => store.actions.getAll);
  const data = useWorkoutStore((store) => store.data);

  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  return (
    <div className="flex flex-col gap-4">
      <Loading type="workouts" />
      <h3>Workouts</h3>
      <Button asChild>
        <Link to="create">
          <ListPlus />
          Add Workout
        </Link>
      </Button>
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
