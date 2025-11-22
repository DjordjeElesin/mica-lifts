import { useParams } from "react-router-dom";
import { workoutsData } from "../Workouts/workoutsData";
import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { ExerciseCard } from "@/components/ExerciseCard";

export const WorkoutDetails = () => {
  const { id: workoutId } = useParams();

  const workout = workoutsData.find(({ id }) => id === Number(workoutId));

  if (!workout) return null;

  const { name, exercises } = workout;

  return (
    <div className="flex flex-col gap-4 min-h-dvh">
      <h3>{name}</h3>
      <Button className="flex items-center gap-2">
        <CirclePlay className="h-12 w-12" />
        <span>Start Workout</span>
      </Button>
      {exercises.map((item) => (
        <ExerciseCard key={item.id} exercise={item} />
      ))}
    </div>
  );
};
