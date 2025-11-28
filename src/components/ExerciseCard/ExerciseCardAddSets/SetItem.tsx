import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui";
import startCase from "lodash/startCase";
import { Trash } from "lucide-react";

type SetItemProps = {
  type: "warmup" | "working" | "dropset";
  reps: number;
  onRemoveSet?: () => void;
};

export const SetItem = ({ type, reps, onRemoveSet }: SetItemProps) => {
  return (
    <Item variant="outline" size="sm" className="w-full">
      <ItemContent>
        <ItemTitle>
          <div className="flex flex-col mr-[120%]">
            <span className="text-muted-foreground text-[0.70rem] uppercase">
              Type
            </span>
            <span>{startCase(type)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-[0.70rem] uppercase">
              Reps
            </span>
            <span>{reps}</span>
          </div>
        </ItemTitle>
      </ItemContent>
      <ItemActions>
        <Button onClick={onRemoveSet}>
          <Trash />
        </Button>
      </ItemActions>
    </Item>
  );
};
