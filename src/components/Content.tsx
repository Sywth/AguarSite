import { cn } from "@/lib/utils";

type ContentProps = React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
};
const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("max-w-[90vw] sm:max-w-[80vw] mx-auto pb-16", className)}
      {...props}
    >
      <div className="flex flex-col pt-16 ">{children}</div>
    </div>
  );
};
export default Content;
