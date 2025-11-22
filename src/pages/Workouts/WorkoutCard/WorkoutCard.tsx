import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ChevronRightIcon, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

type WorkoutCardProps = {
  id: number;
  name: string;
  exercisesNumber: number;
};

export const WorkoutCard = ({
  id,
  name,
  exercisesNumber,
}: WorkoutCardProps) => (
  <Item variant="outline" size="sm" asChild>
    <Link to={`/workouts/${id}`}>
      <ItemMedia>
        <Dumbbell className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription className="mt-1">
          {exercisesNumber} Excercises
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4" />
      </ItemActions>
    </Link>
  </Item>
);
