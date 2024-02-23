"use client";

import MonoButton from "@/components/MonoButton";
import MonoText from "@/components/MonoText";
import rightPad from "just-right-pad";
import React from "react";

type ResultTerminalDisplayProps = React.HTMLProps<HTMLDivElement> & {
  siteNameSiteUrl: [string, string][];
};

const ResultTerminalDisplay: React.FC<ResultTerminalDisplayProps> = ({
  siteNameSiteUrl,
}) => {
  return (
    <div className="md:text-2xl md:px-12 sm:text-lg text-sm flex flex-col font-mono wid dark:bg-zinc-900 bg-zinc-100 py-2 md:py-6 h-[75vh] overflow-auto">
      {siteNameSiteUrl.map(([siteName, siteUrl]) => {
        return (
          <div className="flex flex-row " key={siteName}>
            <MonoText className="sm:whitespace-pre text-green-600">
              {rightPad(siteName, 24, " ")}
            </MonoText>
            <MonoButton
              onClick={() => {
                window.open(siteUrl, "_blank");
              }}
              className="break-all "
            >
              {siteUrl}
            </MonoButton>
          </div>
        );
      })}
    </div>
  );
};

export default ResultTerminalDisplay;
