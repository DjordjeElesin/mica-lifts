import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { useBoolean } from "usehooks-ts";
import { WorkoutActiveInfo } from "./WorkoutActiveInfo";
import { WorkoutProgress } from "./WorkoutProgress";
import { ExerciseList } from "./ExerciseList";
import { useActiveWorkoutStore } from "@/store/ActiveWorkoutStore";
import { AddExercise } from "./AddExercise/AddExercise";
import { useWorkoutDetailsStore } from "@/store/WorkoutDetailsStore";
import { Loading } from "@/components/Loading";
import type { LoaderFunctionArgs } from "react-router-dom";
import type { TWorkoutActive } from "@/types";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id || typeof params.id !== "string") return null;
  return Promise.all([
    useWorkoutDetailsStore.getState().actions.getWorkoutById(params.id),
  ]);
};

export const WorkoutDetails = () => {
  const { value: isActive, setTrue, setFalse } = useBoolean(false);
  const removeExercise = useWorkoutDetailsStore(
    (store) => store.actions.removeExercise,
  );
  const workout = useWorkoutDetailsStore((store) => store.data);
  const startWorkout = useActiveWorkoutStore(
    (store) => store.actions.startWorkout,
  );
  const resetWorkout = useActiveWorkoutStore(
    (store) => store.actions.resetWorkout,
  );

  if (!workout) return null;
  const { name, exercises } = workout;

  const onStartWorkout = () => {
    setTrue();
    startWorkout(workout as TWorkoutActive);
  };

  const onEndWorkout = () => {
    setFalse();
    resetWorkout();
  };

  return (
    <div className="flex flex-col gap-4 pb-20">
      <Loading type="workoutDetails" />
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
      <ExerciseList
        exercises={exercises}
        isActive={isActive}
        workoutId={workout.id}
        onRemoveExercise={removeExercise}
      />
      <div className="fixed bottom-0 left-0 right-0 p-4 pb-7 h-20 bg-slate-950">
        <AddExercise />
      </div>
    </div>
  );
};
