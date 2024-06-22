"use client";
import CallToAction from "@/components/CallToAction";
import HeroImage from "@/components/HeroImage";
import { HomeFeed } from "@/components/HomeFeed";
import PalantirTextEffect from "@/components/PalantirTextEffect";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

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
          initialDelay={2000}
        />
        <HeroImage />
      </div>
      <CallToAction />
      <HomeFeed />
    </>
  );
};
export default HomePageContent;
