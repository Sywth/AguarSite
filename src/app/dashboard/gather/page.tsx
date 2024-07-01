import PalantirTextEffect from "@/components/PalantirTextEffect";
import React from "react";
import SearchByUserName from "./SearchByUserName";

const Gather = () => {
  return (
    <>
      <PalantirTextEffect className="md:pl-8" text={"Gather"} />
      <SearchByUserName />
    </>
  );
};

export default Gather;
