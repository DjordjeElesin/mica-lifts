import { flatMap, sum } from "lodash";

export const getWorkoutProgress = (progressObj: Record<string, boolean[]>) => {
  const allSets = flatMap(progressObj);
  const completed = sum(allSets.map((v) => (v ? 1 : 0)));
  return {
    total: allSets.length,
    completed: completed,
    percentage: Math.round((completed / allSets.length) * 100),
  };
};

export const getProgressMessage = (progress: number) => {
  if (progress < 20)
    return "Damn you really showed up no fucking way";
  if (progress < 40)
    return "Congrats, done just enough to pretend you worked out";
  if (progress < 60) return "Halfway? Shocking, considering you're a lil bitch🤷‍♂️";
  if (progress < 80) return "Okay, you kinda doing okay🙄";
  if (progress < 95) return "Almost done, don’t quit now or you're a pussy";
  return "Finished? Wild🤯...screenshot this before your motivation expires";
};
