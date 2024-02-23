import { useQuery } from "@tanstack/react-query";
import PalantirTextEffect from "./PalantirTextEffect";
import { AguarFeedResponse } from "@/aguarTypes";
import { useEffect, useRef } from "react";
import { useOnScreen } from "@/hooks/useOnScreen";
import Link from "next/link";
import shuffleArray from "shuffle-array";

type StorySummaryProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  abstract: string;
  date?: string;
} & (
    | {
        hasImage: true;
        imageUrl: string;
        imageAlt: string;
      }
    | {
        hasImage?: false;
        imageUrl?: never;
        imageAlt?: never;
      }
  );
const StorySummary = ({
  title,
  abstract,
  hasImage,
  imageUrl,
  imageAlt,
  ...props
}: StorySummaryProps) => {
  const storyRef = useRef<HTMLDivElement | null>(null);
  const isOnScreen = useOnScreen(storyRef);
  return (
    <div {...props} ref={storyRef}>
      <div>
        {hasImage && (
          <img
            className="object-cover object-center"
            style={{ width: "100%", height: "80%" }}
            src={imageUrl}
            alt={imageAlt}
          />
        )}
        <h4 className="font-mono px-1 pt-1 italic">{imageAlt}</h4>
      </div>
      <div className="flex flex-col px-4 lg:px-8">
        {isOnScreen && (
          <PalantirTextEffect
            className="text-2xl md:text-5xl font-semibold "
            text={title}
            durationMs={50}
            onMouseEnter={() => {}}
          />
        )}
        <p className="pt-4 text-xl sm:pt-16 sm:text-4xl">{abstract}</p>
      </div>
    </div>
  );
};

export const HomeFeed = () => {
  const { data, error, isLoading } = useQuery<AguarFeedResponse, Error>({
    queryKey: ["feed"],
    queryFn: async () => {
      const response = await fetch("/api/feed");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonResponse = await response.json();
      return jsonResponse as AguarFeedResponse;
    },
  });
  if (data === undefined) {
    return null;
  }

  const responseTimeStamp = data.responseTimeStamp;
  const feed = data;

  return (
    <div className="space-y-4 text-lg pt-24">
      <div className="text-lg flex flex-row">
        <h5 className="px-4">{"Last updated "}</h5>
        <PalantirTextEffect
          className="pb-2 font-mono text-xl"
          text={responseTimeStamp ? responseTimeStamp : "Unknown"}
          durationMs={1000}
        />
      </div>
      <Link
        target="_blank"
        className="px-4 font-mono hover:underline"
        href="https://www.nytimes.com/international/"
      >
        {'Courtesy of the "New York Times"'}
      </Link>
      <div className="grid grid-cols-1 lg:px-8 space-y-12 md:space-y-24">
        {feed !== undefined &&
          shuffleArray(feed.results)
            .slice(0, 10)
            .map((story, index) => {
              let storyProps: StorySummaryProps = {
                title: story.title,
                abstract: story.abstract,
                date: story.published_date,
              };
              if (story.multimedia.length >= 1) {
                storyProps = {
                  ...storyProps,
                  hasImage: true,
                  imageUrl: story.multimedia[0].url,
                  imageAlt: story.multimedia[0].caption,
                };
              }
              return (
                <StorySummary
                  key={index}
                  className="grid md:grid-cols-2 grid-cols-1"
                  {...storyProps}
                />
              );
            })}
      </div>
    </div>
  );
};
