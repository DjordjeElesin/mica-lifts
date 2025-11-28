import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui";

export const MuscleGroupCard = ({
  name,
  image,
  onClick,
}: {
  name: string;
  image: string;
  onClick?: () => void;
}) => {
  return (
    <Item onClick={onClick}>
      <ItemMedia>
        <img src={image} className="h-12 w-12 overflow-hidden rounded-full" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
      </ItemContent>
    </Item>
  );
};
