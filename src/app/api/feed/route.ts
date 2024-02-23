import { AguarFeedResponse } from "@/aguarTypes";
import { NextResponse, NextRequest } from "next/server";

const GET = async (req: NextRequest) => {
  const newYorkTimesFetchUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NEW_YORK_TIMES_API_KEY}`;
  const data = (await (
    await fetch(newYorkTimesFetchUrl)
  ).json()) as AguarFeedResponse;
  return NextResponse.json(data, { status: 200 });
};

export { GET };
