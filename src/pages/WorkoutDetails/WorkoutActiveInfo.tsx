import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui";
import { format } from "date-fns";

export const WorkoutActiveInfo = ({ title }: { title: string }) => {
  const start = format(new Date(), "PPp");

  return (
    <Item className="border border-pink-500">
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription className="mt-1">Start Time: {start}</ItemDescription>
      </ItemContent>
    </Item>
  );
};
