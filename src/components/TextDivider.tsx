import { cn } from "@/lib/utils";
import React from "react";

type TextDividerProps = React.HTMLProps<HTMLDivElement>;

const TextDivider: React.FC<TextDividerProps> = ({ className, ...props }) => {
  return (
    <div className={cn("italic", className)} {...props}>
      {"|"}
    </div>
  );
};

export default TextDivider;
