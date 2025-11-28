import { Item, ItemContent, ItemTitle } from "../../ui";
import type { TExerciseActive, TSet } from "@/types";
import { SetsTable } from "./SetsTable";

export const ExerciseCardAddSets = ({
  exercise,
  onAdd,
}: {
  exercise: TExerciseActive;
  onAdd: (set: TSet, exerciseId: string) => void;
}) => {
  return (
    <Item variant="outline" size="sm">
      <ItemContent>
        <ItemTitle>
          {exercise.name}{" "}
          <span className="text-muted-foreground">{`(${exercise.muscleGroup.name})`}</span>
        </ItemTitle>
        <SetsTable
          sets={exercise.sets}
          onAdd={onAdd}
          exerciseId={exercise.id}
        />
      </ItemContent>
    </Item>
  );
};
