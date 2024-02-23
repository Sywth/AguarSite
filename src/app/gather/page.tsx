import PalantirTextEffect from "@/components/PalantirTextEffect";
import React from "react";
import GatherCreationForm from "./GatherCreationForm";

type GatherProps = React.HTMLProps<HTMLDivElement> & {};

const Gather: React.FC<GatherProps> = ({}) => {
  return (
    <div>
      <PalantirTextEffect text={"OSINT"} />
      <div className="text-4xl py-16">Under development</div>
      {/* <GatherCreationForm /> */}
    </div>
  );
};

export default Gather;
