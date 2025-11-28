import type { TSet } from "@/types";
import groupBy from "lodash/groupBy";

const plural = (word: string, count: number) =>
  count === 1 ? word : `${word}s`;

export const formatExerciseSets = (sets: TSet[]) => {
  const grouped = groupBy(sets, "type");
  const warmup = grouped["warmup"]?.length;
  const workingAndDropset =
    grouped["working"]?.length + (grouped["dropset"]?.length || 0);
  return `${
    warmup ? `${warmup} Warm up ${plural('Set', warmup)}, ` : ""
  } ${workingAndDropset} ${plural('Set', workingAndDropset)}`;
};
