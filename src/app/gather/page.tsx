import PalantirTextEffect from "@/components/PalantirTextEffect";
import React from "react";
import GatherCreationForm from "./GatherCreationForm";

type GatherProps = React.HTMLProps<HTMLDivElement> & {};

const Gather: React.FC<GatherProps> = ({}) => {
  return (
    <div>
      <PalantirTextEffect text={"OSINT"} />
      <div>This is work in progress. As of now it does nothing</div>
      {/* <GatherCreationForm /> */}
    </div>
  );
};

export default Gather;
