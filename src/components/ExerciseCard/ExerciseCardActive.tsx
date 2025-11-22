import { StretchHorizontal } from "lucide-react";
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";
import type { TExercise } from "@/pages/Workouts/types";
import { ExerciseSet } from "./ExerciseSet";
import { useActiveWorkoutStore } from "@/store/ActiveWorkoutStore";

export const ExerciseCardActive = ({ exercise }: { exercise: TExercise }) => {
  const toggleSet = useActiveWorkoutStore((state) => state.actions.toggleSet);

  return (
    <Item variant="outline" size="sm">
      <ItemMedia className="self-start mt-0.5">
        <StretchHorizontal className="size-3" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{exercise.name}</ItemTitle>
        <div className="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4 mt-1 flex flex-col gap-1.5">
          {exercise.sets.map((set, index) => (
            <ExerciseSet
              key={index}
              set={set}
              onToggle={() => toggleSet(exercise.id, index)}
            />
          ))}
        </div>
      </ItemContent>
    </Item>
  );
};
