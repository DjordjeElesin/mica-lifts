import { PlusCircle } from "lucide-react";
import { RepsCouter } from "./RepsCouter";
import { useAddExercise } from "./useAddExercise";
import { Selection } from "@/components/Selection";
import { Button } from "@/components/ui";
import { SetItem } from "./SetItem";

const OPTIONS = [
  { value: "warmup", label: "Warmup" },
  { value: "working", label: "Working" },
  { value: "dropset", label: "Dropset" },
];

export const SetsTable = () => {
  const { sets, newSet, onChangeSetType, onAddSet, onRemoveSet } =
    useAddExercise();

  return (
    <div>
      <div className="flex gap-2 items-center">
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
        <RepsCouter />
        <Button onClick={() => onAddSet(newSet)} disabled={!newSet.type}>
          <PlusCircle />
        </Button>
      </div>
      <div className="flex flex-col gap-2 items-center justify-between my-3 max-h-[300px] overflow-y-auto">
        {sets.map(({ type, reps }, index) => (
          <SetItem
            key={index}
            type={type}
            reps={reps}
            onRemoveSet={() => onRemoveSet(index)}
          />
        ))}
      </div>
    </div>
  );
};
