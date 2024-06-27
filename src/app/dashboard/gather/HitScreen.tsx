"use client";
import React, { useEffect, useState } from "react";
import { AguarHit } from "@/aguarTypes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { aguarApiUrl } from "@/lib/clientConstants";
import { useAuth } from "@clerk/nextjs";
import { toast } from "@/components/ui/use-toast";
import { button_tw_css } from "@/lib/styleConstants";
import { useStream } from "@/hooks/useStream";
import codeToast from "@/lib/codeToat";
import { streamData } from "@/lib/streamData";

const GetDecoderFunction: () => (data: Uint8Array) => any = () => {
  const decoder = new TextDecoder();
  // cast to unit8array to json of shape AguarHit
  return (data: Uint8Array) => {
    try {
      const text = decoder.decode(data);
      const json = JSON.parse(text);
      return json;
    } catch (e) {
      return undefined;
    }
  };
};

type HitProps = React.HTMLProps<HTMLDivElement> & { hit: AguarHit };
const Hit: React.FC<HitProps> = ({ hit, ...props }) => {
  return (
    <div {...props}>
      <Link
        className={cn(
          "text-xl md:text-2xl hover:underline",
          hit.success ? "" : "line-through"
        )}
        target="_blank"
        href={hit.url}
      >
        {hit.url}
      </Link>
      <div className="text-base md:text-lg">
        <div className="flex flex-row space-x-2">
          <div>Success : </div>
          <div className={hit.success ? "text-green-500" : "text-red-500"}>
            {String(hit.success)}
          </div>
        </div>

        {hit.found_links.length > 0 && (
          <div>Links: {hit.found_links.join(", ")}</div>
        )}
        {hit.found_images.length > 0 && (
          <div>Images: {hit.found_images.join(", ")}</div>
        )}
        {hit.found_emails.length > 0 && (
          <div>Emails: {hit.found_emails.join(", ")}</div>
        )}
        {hit.found_phone_numbers.length > 0 && (
          <div>Phone Numbers: {hit.found_phone_numbers.join(", ")}</div>
        )}
      </div>
    </div>
  );
};

type HitScreenListProps = React.HTMLProps<HTMLDivElement> & {
  hits: any[];
  removeHitAtIndex: (index: number) => void;
};
const HitScreenList: React.FC<HitScreenListProps> = ({
  hits,
  removeHitAtIndex,
  ...props
}) => {
  useEffect(() => {
    toast({
      title: `Search completed`,
    });
  }, []);

  return (
    <div {...props}>
      {hits.map((hit, index) => {
        if (hit === undefined) {
          return null;
        }
        if (!hit.hasOwnProperty("aguar_type")) {
          return null;
        }

        return (
          <div className="flex flex-col md:flex-row py-4" key={index}>
            <div className="md:min-w-12 text-base">
              <div className="italic ml-6 mr-2">{`[${index + 1}]`}</div>
              <div
                className={cn("cursor-pointer font-mono", button_tw_css)}
                onClick={() => {
                  codeToast(
                    `Hit ${index + 1} details`,
                    `Original API response object looks like this`,
                    JSON.stringify(hit, null, 2)
                  );
                }}
              >{`[?]`}</div>
              <div
                className={cn("cursor-pointer font-mono", button_tw_css)}
                onClick={() => {
                  toast({
                    title: `Deleting hit ${index + 1}`,
                    description: `${hit.url}`,
                  });
                  removeHitAtIndex(index);
                }}
              >{`[x]`}</div>
            </div>
            <Hit
              hit={hit}
              key={index}
              className="border-b-2 border-gray-200 md:w-[40rem]"
            />
          </div>
        );
      })}
    </div>
  );
};

type HitScreenProps = React.HTMLProps<HTMLDivElement> & {
  username: string;
  setUsername: (username: string) => void;
  setSearching: (searching: boolean) => void;
};
const HitScreen: React.FC<HitScreenProps> = ({
  username,
  setUsername,
  setSearching,
  className,
  ...props
}) => {
  const [hits, setHits] = useState<any[]>([]);
  const apiRoute = `${aguarApiUrl}/search-username/${username}`;
  const decoder = GetDecoderFunction();
  const { getToken } = useAuth();

  const getRequestInit: () => Promise<RequestInit> = async () => {
    return {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    };
  };

  const streamCallback = (chunk: Uint8Array) => {
    const hit = decoder(chunk);
    setHits((hits) => [hit, ...hits]);
  };
  const onStart = () => {
    codeToast(
      `Searching for user ${username} ...`,
      `This will take time, calling API with`,
      JSON.stringify(username, null)
    );
    setSearching(true);
  };
  const onEnd = () => {
    setSearching(false);
  };

  useEffect(() => {
    streamData(
      apiRoute,
      getRequestInit,
      streamCallback,
      onStart,
      onEnd,
      username
    );
  }, [username]);

  const removeHitAtIndex = (index: number) => {
    setHits((hits) => {
      const newHits = [...hits];
      newHits.splice(index, 1);
      return newHits;
    });
  };

  const filterHits = (keepIf: (hit: any) => boolean) => {
    setHits((hits) => {
      const newHits = hits.filter(keepIf);
      return newHits;
    });
  };

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div>{`Most recent searches for ${username}`}</div>
      <div className="flex flex-row text-xl space-x-4 font-mono">
        <div
          className={cn(
            "cursor-pointer p-1 bg-zinc-100 dark:bg-zinc-900 rounded-sm",
            button_tw_css
          )}
          onClick={() => {
            setUsername("");
          }}
        >
          [Cancel All]
        </div>
        <div
          className={cn(
            "cursor-pointer p-1 bg-zinc-100 dark:bg-zinc-900 rounded-sm",
            button_tw_css
          )}
          onClick={() => {
            setHits([]);
          }}
        >
          [Remove All]
        </div>
        <div
          className={cn(
            "cursor-pointer p-1 bg-zinc-100 dark:bg-zinc-900 rounded-sm",
            button_tw_css
          )}
          onClick={() => {
            filterHits((hit) => hit?.success === true);
          }}
        >
          [Remove All Fails]
        </div>
        <div
          className={cn(
            "cursor-pointer p-1 bg-zinc-100 dark:bg-zinc-900 rounded-sm",
            button_tw_css
          )}
          onClick={() => {
            filterHits((hit) => hit?.success === false);
          }}
        >
          [Remove All Success]
        </div>
      </div>
      <HitScreenList
        className=""
        hits={hits}
        removeHitAtIndex={removeHitAtIndex}
      />
    </div>
  );
};

export default HitScreen;
