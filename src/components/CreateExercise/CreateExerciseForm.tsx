import { Label } from "@/components/ui";
import { useCreateExercise } from "./useCreateExercise";
import { Input } from "@/components/ui/input";
import { Selection } from "../Selection";

export const CreateExerciseForm = () => {
  const {
    formValues: { name, url, muscleGroup },
    onFormChange,
    muscleGroupOptions,
    onMuscleGroupChange,
  } = useCreateExercise();

  return (
    <div className="grid gap-4 py-8 px-4">
      <div className="grid gap-3">
        <Label htmlFor="name" required>Exercise Name</Label>
        <Input id="name" name="name" value={name} onChange={onFormChange} />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="url">Video URL</Label>
        <Input id="url" name="url" value={url} onChange={onFormChange} />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="muscleGroup" required>Muscle Group</Label>
        <Selection
          value={muscleGroup}
          onChange={onMuscleGroupChange}
          options={muscleGroupOptions}
        />
      </div>
    </div>
  );
};
