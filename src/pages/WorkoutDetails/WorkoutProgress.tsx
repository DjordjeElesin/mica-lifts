import { useActiveWorkoutStore } from "@/store/ActiveWorkoutStore";
import { getProgressMessage, getWorkoutProgress } from "./helpers";
import { ItemDescription, Progress } from "@/components/ui";

export const WorkoutProgress = () => {
  const progress = useActiveWorkoutStore((state) => state.exercisesProgress);
  const { total, completed, percentage } = getWorkoutProgress(progress);
  const message = getProgressMessage(percentage);

  return (
    <div className="flex flex-col gap-1.5 my-4">
      <div className="flex justify-between text-3xl font-bold mb-2">
        <span>
          {completed}/{total} Sets
        </span>
        <span>{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-5" />
      <ItemDescription className=" mt-2">{message}</ItemDescription>
    </div>
  );
};
