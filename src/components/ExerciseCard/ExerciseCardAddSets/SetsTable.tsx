import { PlusCircle } from "lucide-react";
import { RepsCouter } from "./RepsCouter";
import { Selection } from "@/components/Selection";
import { Button } from "@/components/ui";
import { SetItem } from "./SetItem";
import type { TSet } from "@/types";
import { useExerciseCardAddSets } from "./useExerciseCardAddSets";

const OPTIONS = [
  { value: "warmup", label: "Warmup" },
  { value: "working", label: "Working" },
  { value: "dropset", label: "Dropset" },
];

export const SetsTable = ({
  sets,
  onAdd,
  exerciseId,
}: {
  sets: TSet[];
  onAdd: (set: TSet, exerciseId: string) => void;
  exerciseId: string;
}) => {
  const { newSet, onChangeSetType, onAddSet, increase, decrease } =
    useExerciseCardAddSets({
      sets,
      onAdd,
    });
  return (
    <div>
      <div className="flex gap-2 items-center mt-1 mb-2">
        <span className="text-muted-foreground text-[0.70rem] uppercase mr-[50%]">
          Sets
        </span>
        <span className="text-muted-foreground text-[0.70rem] uppercase">
          Reps
        </span>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <Selection
          value={newSet.type}
          onChange={onChangeSetType}
          options={OPTIONS}
          placeholder="Select set type..."
          className="w-[170px]"
        />
        <RepsCouter
          reps={newSet.reps}
          increase={increase}
          decrease={decrease}
        />
        <Button
          onClick={() => onAddSet(newSet, exerciseId)}
          disabled={!newSet.type}
        >
          <PlusCircle />
        </Button>
      </div>
      <div className="flex flex-col gap-2 items-center justify-between my-3 max-h-[300px] overflow-y-auto">
        {sets.map(({ type, reps }, index) => (
          <SetItem key={index} type={type} reps={reps} />
        ))}
      </div>
    </div>
  );
};
