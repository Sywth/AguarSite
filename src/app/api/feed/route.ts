import { AguarFeedResponse } from "@/aguarTypes";
import { NextResponse, NextRequest } from "next/server";

const GET = async (req: NextRequest) => {
  const newYorkTimesFetchUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NEW_YORK_TIMES_API_KEY}`;
  const response = await fetch(newYorkTimesFetchUrl, { cache: "no-cache" });
  let responseTimeStamp = response.headers.get("date");
  if (responseTimeStamp === null) {
    responseTimeStamp = "Unknown";
  }
  const jsonData = {
    ...(await response.json()),
    responseTimeStamp,
  } as AguarFeedResponse;
  return NextResponse.json(jsonData, { status: 200 });
};

export { GET };
