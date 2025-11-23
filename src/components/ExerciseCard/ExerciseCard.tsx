import type { TExercise } from "@/pages/Workouts/types";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import { StretchHorizontal, Trash } from "lucide-react";
import { formatExerciseSets } from "./helpers";
import { Button } from "../ui";

export const ExerciseCard = ({
  exercise,
  onRemove,
}: {
  exercise: TExercise;
  onRemove: () => void;
}) => {
  const description = formatExerciseSets(exercise.sets);
  return (
    <Item variant="outline" size="sm">
      <ItemMedia>
        <StretchHorizontal className="size-3" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{exercise.name}</ItemTitle>
        <ItemDescription className="mt-1">{description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" onClick={onRemove}>
          <Trash />
        </Button>
      </ItemActions>
    </Item>
  );
};
