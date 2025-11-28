import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui";

type Option = {
  label: string;
  value: string;
};

type SelectionProps = {
  value: string;
  selectLabel?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: Option[];
  className?: string;
};

export const Selection = ({
  value,
  options,
  selectLabel,
  placeholder = "Select an option...",
  onChange,
  className,
}: SelectionProps) => {
  return (
    <>
      {!!selectLabel && <Label>{selectLabel}</Label>}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={`w-full ${className}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
