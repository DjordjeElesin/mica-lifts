import { Label } from "@/components/ui";
import { useAddExercise } from "./useAddExercise";
import { Input } from "@/components/ui/input";

export const AddExerciseForm = () => {
  const {
    formValues: { name, url },
    onFormChange,
  } = useAddExercise();

  return (
    <div className="grid gap-4">
      <div className="grid gap-3">
        <Label htmlFor="name-1">Exercise Name</Label>
        <Input id="name-1" name="name" value={name} onChange={onFormChange} />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="url-1">{`Video URL (optional)`}</Label>
        <Input id="url-1" name="url" value={url} onChange={onFormChange} />
      </div>
    </div>
  );
};
