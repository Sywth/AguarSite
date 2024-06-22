import PalantirTextEffect from "@/components/PalantirTextEffect";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import HitScreen from "./screen";

const Gather = () => {
  return (
    <>
      <PalantirTextEffect className="pl-8" text={"Gather"} />
      <div className="text-4xl py-16">Under development</div>
      <HitScreen />
    </>
  );
};

export default Gather;
