import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import { SquareArrowOutUpRight, StretchHorizontal, Trash } from "lucide-react";
import { Button } from "../ui";
import type { TExercise } from "@/types";

export const ExerciseCard = ({
  exercise,
  onRemove,
  onClick,
}: {
  exercise: TExercise;
  onRemove?: () => void;
  onClick?: () => void;
}) => {
  const openUrl = () => window.open(exercise.url, "_blank");

  return (
    <Item variant="outline" size="sm" onClick={onClick}>
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
        {onRemove && (
          <Button variant="ghost" onClick={onRemove}>
            <Trash />
          </Button>
        )}
      </ItemActions>
    </Item>
  );
};
