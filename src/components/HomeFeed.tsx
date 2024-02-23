"use client";
import PalantirTextEffect from "./PalantirTextEffect";
import { useQuery } from "@tanstack/react-query";
import { AguarFeedResponse } from "@/aguarTypes";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  return (
    <div {...props}>
      {hasImage && (
        <img
          className="object-cover object-center"
          style={{ width: "100%", height: "80%" }}
          src={imageUrl}
          alt={imageAlt}
        />
      )}
      <div className="flex flex-col px-16">
        <PalantirTextEffect
          className="text-5xl font-semibold"
          text={title}
          durationMs={500}
          onMouseEnter={() => {}}
        />
        <p className="pt-16 text-4xl">{abstract}</p>
      </div>
    </div>
  );
};

export const HomeFeed = () => {
  const { data, isLoading } = useQuery<AguarFeedResponse>({
    queryKey: ["feed"],
    queryFn: () => fetch("/api/feed").then((res) => res.json()),
  });

  return (
    <div className="space-y-4 text-lg pt-24">
      <div className="grid grid-cols-1 lg:px-12 space-y-12 md:space-y-24">
        {isLoading && <div>Fetching...</div>}
        {data !== undefined &&
          data.results.slice(0, 10).map((story, index) => {
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
              <StorySummary className="grid grid-cols-2" {...storyProps} />
            );
          })}
      </div>
    </div>
  );
};
