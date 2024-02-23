"use client";
import ResultTerminalDisplay from "./ResultTerminalDisplay";

type GatheredResultProps = React.HTMLProps<HTMLDivElement> & {
  params: { username: string };
};

const GatheredResult: React.FC<GatheredResultProps> = ({ params }) => {
  const username = params.username;
  const gatheredData = JSON.parse(
    localStorage.getItem(`gather/${username}`) || '{"error": "no data found"}'
  ) as Record<string, string>;

  return (
    <ResultTerminalDisplay siteNameSiteUrl={Object.entries(gatheredData)} />
  );
};

export default GatheredResult;
