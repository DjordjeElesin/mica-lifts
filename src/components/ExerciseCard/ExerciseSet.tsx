import type { TSet } from "@/types";
import { Checkbox } from "../ui";
import startCase from "lodash/startCase";

export const ExerciseSet = ({
  set,
  onToggle,
}: {
  set: TSet;
  onToggle: () => void;
}) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox className="h-5 w-5" onClick={onToggle} />
      <span className="text-md font-semibold">{startCase(set.type)}</span>
      {set.type !== "warmup" && (
        <span className="text-md font-semibold">{set.reps} Reps</span>
      )}
    </div>
  );
};
