import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

interface SquareCheckBoxButtonProps {
  label: string;
  id: string;
  onChange?: () => void;
  fontWeight?: number;
  checked?: boolean | undefined;
}

const SquareCheckBoxButton: React.FC<SquareCheckBoxButtonProps> = ({
  label,
  id,
  onChange,
  checked,
}: SquareCheckBoxButtonProps): JSX.Element => {
  return (
    <div
      className="flex gap-3 items-center py-1 text-base cursor-pointer"
      style={{ display: "flex", alignItems: "center" }}>
      <Checkbox
        id={id}
        className="border border-[#6D6D6D] rounded-sm"
        checked={checked}
        onCheckedChange={onChange}
      />
      <Label
        htmlFor={id}
        className="font-medium text-[#6D6D6D] text-xs md:text-lg lg:text-2xl">
        {label}
      </Label>
    </div>
  );
};

export default SquareCheckBoxButton;
