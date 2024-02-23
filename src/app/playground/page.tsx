"use client";
import PalantirTextEffect from "@/components/PalantirTextEffect";
import useApiUrl from "@/hooks/useApiUrl";
import React, { useEffect } from "react";
import io from "socket.io-client";

const Playground = () => {
  return (
    <>
      <PalantirTextEffect text={"Playground"} />
      <div className="text-4xl py-16">Under development</div>
    </>
  );
};

export default Playground;
