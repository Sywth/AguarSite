import { cn } from "@/lib/utils";
import React from "react";

type MonoButtonProps = React.ComponentProps<"button"> & {};
const MonoButton: React.FC<MonoButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        className,
        "hover:bg-stone-900 hover:text-white dark:hover:bg-stone-50 dark:hover:text-black"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default MonoButton;
