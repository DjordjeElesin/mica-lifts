import { Label } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { useCreateWorkout } from "../useCreateWorkout";
import { Textarea } from "@/components/ui/textarea";

export const CreateWorkoutForm = () => {
  const { onFormChange } = useCreateWorkout();
  return (
    <div className="grid gap-4">
      <div className="grid gap-3">
        <Label htmlFor="name" required>
          Workout Name
        </Label>
        <Input id="name" name="name" onChange={onFormChange} />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" onChange={onFormChange} />
      </div>
    </div>
  );
};
