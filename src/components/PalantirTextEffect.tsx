"use client";
import { sleep } from "@/lib/utils";
import React, { use, useEffect, useMemo, useState } from "react";

type PalantirTextEffectProps = React.HTMLProps<HTMLDivElement> & {
  text: string;
  durationMs?: number;
  intialDelay?: number;
};
/**
 * Draws text letter by letter in the duration
 * @param param0
 */
const PalantirTextEffect: React.FC<PalantirTextEffectProps> = ({
  text,
  durationMs = 100,
  className,
  intialDelay = 300,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const timePerLetter = useMemo(
    () => durationMs / text.length,
    [durationMs, text]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const inner = async () => {
      await sleep(intialDelay);

      interval = setInterval(() => {
        setDisplayedText((prev) => {
          // base case
          if (prev.length === text.length) {
            clearInterval(interval);
            return prev;
          }

          return prev + text.charAt(prev.length);
        });
      }, timePerLetter);
    };

    inner();

    return () => {
      clearInterval(interval);
    };
  }, [timePerLetter]);

  return (
    <div className={className} {...props}>
      {displayedText === "" ? "_" : displayedText}
    </div>
  );
};

export default PalantirTextEffect;
