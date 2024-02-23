"use client";
import { sleep } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

type PalantirTextEffectProps = React.HTMLProps<HTMLDivElement> & {
  text: string;
  durationMs?: number;
  intialDelay?: number;
} & (
    | {
        extraWords: string[];
        extraWordDisplayTimeMs: number;
      }
    | {
        extraWords?: never;
        extraWordDisplayTimeMs?: never;
      }
  );

const PalantirTextEffect: React.FC<PalantirTextEffectProps> = ({
  text,
  durationMs = 100,
  intialDelay = 300,
  extraWords,
  extraWordDisplayTimeMs,
  ...props
}) => {
  const [displayText, setDisplayText] = useState("");
  const timePerLetter = durationMs / text.length;

  const animateText = useCallback(async () => {
    setDisplayText("_");
    await sleep(intialDelay);

    for (let i = 0; i < text.length; i++) {
      await sleep(timePerLetter);
      setDisplayText(text.slice(0, i + 1));
    }

    if (extraWords === undefined) {
      return;
    }

    // logic for writing out and removing extra words
    for (let wordIndex = 0; wordIndex < extraWords.length; wordIndex++) {
      const currentWord = extraWords[wordIndex];
      for (let i = 0; i < currentWord.length; i++) {
        await sleep(timePerLetter);
        setDisplayText(text + currentWord.slice(0, i + 1));
      }

      await sleep(extraWordDisplayTimeMs);

      // delete it
      for (let i = currentWord.length - 1; i >= 0; i--) {
        await sleep(timePerLetter);
        setDisplayText(text + currentWord.slice(0, i));
      }
      await sleep(timePerLetter);
    }

    // keep a random word displayed
    const randomWord =
      extraWords[Math.floor(Math.random() * extraWords.length)];
    for (let i = 0; i < randomWord.length; i++) {
      await sleep(timePerLetter);
      setDisplayText(text + randomWord.slice(0, i + 1));
    }
  }, [intialDelay, text, timePerLetter, extraWords, extraWordDisplayTimeMs]);

  useEffect(() => {
    animateText();
  }, [animateText]);

  return <div {...props}>{displayText ? displayText : "_"}</div>;
};

export default PalantirTextEffect;
