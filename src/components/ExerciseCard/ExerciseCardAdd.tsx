import {
  Button,
  Checkbox,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../ui";
import { SquareArrowOutUpRight, StretchHorizontal } from "lucide-react";
import type { TExercise } from "@/types";

export const ExerciseCardAdd = ({
  exercise,
  toggleAdd,
}: {
  exercise: TExercise;
  toggleAdd: () => void;
}) => {
  const openUrl = () => window.open(exercise.url, "_blank");

  return (
    <Item variant="outline" size="sm">
      <ItemMedia>
        <StretchHorizontal className="size-3" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{exercise.name}</ItemTitle>
        <ItemDescription className="mt-1">
          {exercise.muscleGroup.name}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        {!!exercise.url && (
          <Button variant="ghost" onClick={openUrl}>
            <SquareArrowOutUpRight onClick={openUrl} />
          </Button>
        )}
        <Checkbox className="h-6 w-6" onClick={toggleAdd} />
      </ItemActions>
    </Item>
  );
};
