import type { TLoadingItems } from "@/types";
import { Spinner } from "../ui/spinner";
import { useLoadingStore } from "@/store/LoadingStore";

export const Loading = ({ type }: { type: keyof TLoadingItems }) => {
  const isLoading = useLoadingStore((state) => state.data[type]);
  return (
    isLoading && (
      <div className="absolute top-0 left-0 w-dvw h-dvh bg-black/40 backdrop-blur-xs flex items-center justify-center z-50">
        <Spinner className="h-6 w-6"/>
      </div>
    )
  );
};
