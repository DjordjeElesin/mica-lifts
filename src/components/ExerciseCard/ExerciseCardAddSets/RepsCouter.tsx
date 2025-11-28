import { Button } from "@/components/ui";
import { Minus, Plus } from "lucide-react";

export const RepsCouter = ({
  reps,
  increase,
  decrease,
}: {
  reps: number;
  increase: () => void;
  decrease: () => void;
}) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        className="h-5 w-5 shrink-0 rounded-full"
        onClick={decrease}
        disabled={reps <= 1}
      >
        <Minus />
        <span className="sr-only">Decrease</span>
      </Button>
      <div className="flex-1 text-center">
        <div className="text-lg font-bold tracking-tighter">{reps}</div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="h-5 w-5 shrink-0 rounded-full"
        onClick={increase}
        disabled={reps >= 20}
      >
        <Plus />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  );
};
