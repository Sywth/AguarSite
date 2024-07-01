import { toast } from "../components/ui/use-toast";
import { alt_background_tw_css } from "./styleConstants";
import { cn } from "@/lib/utils";

const codeToast = (title: string, subtitle: string, codeText: string) =>
  toast({
    title: title,
    description: (
      <>
        <p>{subtitle}</p>
        <pre
          className={cn("mt-2 w-[340px] rounded-md p-2", alt_background_tw_css)}
        >
          <code>{codeText}</code>
        </pre>
      </>
    ),
  });

export default codeToast;
