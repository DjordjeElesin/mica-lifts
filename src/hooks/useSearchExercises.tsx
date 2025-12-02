import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type useSearchExercisesProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const useSearchExercises = ({
  search,
  setSearch,
}: useSearchExercisesProps) => {
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  return { search, onChangeSearch };
};
