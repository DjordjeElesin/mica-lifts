import { WorkoutCard } from "./WorkoutCard/WorkoutCard";
import { workoutsData } from "./workoutsData";

export const Workouts = () => {
  return (
    <div className="flex flex-col min-h-dvh gap-4">
      <h3>Workouts</h3>
      {workoutsData.map(({ id, name, exercises }) => (
        <WorkoutCard
          key={id}
          id={id}
          name={name}
          exercisesNumber={exercises.length}
        />
      ))}
    </div>
  );
};
