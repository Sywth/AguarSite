import { cn } from "@/lib/utils";
import React from "react";

type MonoTextProps = React.ComponentProps<"div"> & {};
const MonoText: React.FC<MonoTextProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        className,
        "hover:bg-stone-900 hover:text-white dark:hover:bg-stone-50 dark:hover:text-black"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default MonoText;
