import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { TExercise } from "@/types";

type useSearchExercisesProps = {
  exercises: TExercise[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setSearchResults: Dispatch<SetStateAction<TExercise[]>>;
};

export const useSearchExercises = ({
  exercises,
  search,
  setSearch,
  setSearchResults,
}: useSearchExercisesProps) => {
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);

    setSearchResults(
      exercises.filter(({ name }) =>
        name.toUpperCase().includes(value.toUpperCase())
      )
    );
  };
  return { search, onChangeSearch };
};
