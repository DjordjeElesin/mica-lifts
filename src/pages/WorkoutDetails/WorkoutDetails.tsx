import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { useBoolean } from "usehooks-ts";
import { useWorkoutStore } from "@/store/WorkoutsStore";
import { WorkoutActiveInfo } from "./WorkoutActiveInfo";
import { WorkoutProgress } from "./WorkoutProgress";
import { ExerciseList } from "./ExerciseList";
import { useActiveWorkoutStore } from "@/store/ActiveWorkoutStore";

export const WorkoutDetails = () => {
  const { id } = useParams();
  const { value: isActive, setTrue, setFalse } = useBoolean(false);
  const workout = useWorkoutStore((store) =>
    store.actions.getWorkoutById(Number(id))
  );
  const startWorkout = useActiveWorkoutStore(
    (store) => store.actions.startWorkout
  );
  const resetWorkout = useActiveWorkoutStore(
    (store) => store.actions.resetWorkout
  );

  if (!workout) return null;
  const { name, exercises } = workout;

  const onStartWorkout = () => {
    setTrue();
    startWorkout(workout);
  };

  const onEndWorkout = () => {
    setFalse();
    resetWorkout();
  };

  return (
    <div className="flex flex-col gap-4">
      <h3>{name}</h3>
      <Button
        className="flex items-center gap-2"
        onClick={!isActive ? onStartWorkout : onEndWorkout}
      >
        <CirclePlay className="h-12 w-12" />
        <span>{isActive ? "End" : "Start"} Workout</span>
      </Button>
      {isActive && <WorkoutActiveInfo title={name} />}
      {isActive && <WorkoutProgress />}
      <ExerciseList exercises={exercises} isActive={isActive} />
    </div>
  );
};
