import type { Exercise } from "@/pages/Workouts/types";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import { StretchHorizontal } from "lucide-react";
import { formatExerciseSets } from "./helpers";

export const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
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
    </Item>
  );
};
