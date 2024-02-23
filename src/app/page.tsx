"use client";
import CallToAction from "@/components/CallToAction";
import { HomeFeed } from "@/components/HomeFeed";
import PalantirTextEffect from "@/components/PalantirTextEffect";
import Image from "next/image";

const HomePageContent = () => {
  return (
    <>
      <div className="pt-4 pb-16 ">
        <PalantirTextEffect
          text={"A tool for the masses"}
          className="text-7xl pb-8 px-4"
          durationMs={1000}
          intialDelay={1000}
        />
        <Image
          className="w-[80vw] h-[60vh] object-cover invert dark:invert-0"
          src="/hero-mask.jpg"
          width={800}
          height={400}
          alt={"A image of a person wearing a mask"}
        />
      </div>
      <CallToAction />
      <HomeFeed />
    </>
  );
};
export default HomePageContent;
