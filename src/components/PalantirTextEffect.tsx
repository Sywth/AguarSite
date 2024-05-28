"use client";
import { sleep } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import shuffleArray from "shuffle-array";

type PalantirTextEffectProps = React.HTMLProps<HTMLDivElement> & {
  text: string;
  durationMs?: number;
  initialDelay?: number;
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
  initialDelay = 300,
  extraWords,
  extraWordDisplayTimeMs,
  ...props
}) => {
  const [displayText, setDisplayText] = useState("");
  const timePerLetter = durationMs / text.length;
  extraWordDisplayTimeMs = extraWordDisplayTimeMs || 2000;

  const memoizedExtraWords = useMemo(() => extraWords, [extraWords]);

  const animateText = useCallback(async () => {
    setDisplayText("_");
    await sleep(initialDelay);

    for (let i = 0; i < text.length; i++) {
      await sleep(timePerLetter);
      setDisplayText(text.slice(0, i + 1));
    }

    if (!memoizedExtraWords) {
      return;
    }

    const shuffledExtraWords = shuffleArray([...memoizedExtraWords]);

    // logic for writing out and removing extra words
    for (
      let wordIndex = 0;
      wordIndex < shuffledExtraWords.length;
      wordIndex++
    ) {
      const currentWord = shuffledExtraWords[wordIndex];
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
      shuffledExtraWords[Math.floor(Math.random() * shuffledExtraWords.length)];
    for (let i = 0; i < randomWord.length; i++) {
      await sleep(timePerLetter);
      setDisplayText(text + randomWord.slice(0, i + 1));
    }
  }, [
    text,
    timePerLetter,
    initialDelay,
    memoizedExtraWords,
    extraWordDisplayTimeMs,
  ]);

  useEffect(() => {
    animateText();
    return () => {
      setDisplayText("None");
    };
  }, [animateText]);

  return <div {...props}>{displayText ? displayText : "_"}</div>;
};

export default PalantirTextEffect;
