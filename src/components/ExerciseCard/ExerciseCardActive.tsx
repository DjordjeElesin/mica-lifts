import { StretchHorizontal, Trash } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import { ExerciseSet } from "./ExerciseSet";
import { useActiveWorkoutStore } from "@/store/ActiveWorkoutStore";
import { Button } from "../ui";
import type { TExerciseActive } from "@/types";

export const ExerciseCardActive = ({
  exercise,
  onRemove,
}: {
  exercise: TExerciseActive;
  onRemove: () => void;
}) => {
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
      <ItemActions>
        <Button variant="ghost" onClick={onRemove}>
          <Trash />
        </Button>
      </ItemActions>
    </Item>
  );
};
