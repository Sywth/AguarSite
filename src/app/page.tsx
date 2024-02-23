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
          text={"A tool for the "}
          extraWords={[
            "masses",
            "investment banker",
            "rice farmer",
            "politician",
            "journalist",
            "scientist",
            "wood worker",
            "government",
            "church",
            "worshiper",
          ]}
          extraWordDisplayTimeMs={2000}
          className="text-3xl sm:text-5xl md:text-7xl pb-8 px-4"
          durationMs={1000}
          intialDelay={2000}
        />
        <Image
          className="sm:w-[80vw] sm:h-[60vh] object-cover invert dark:invert-0"
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
