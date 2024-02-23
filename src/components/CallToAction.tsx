import { MdSubdirectoryArrowRight } from "react-icons/md";

type ActionableItemProps = {
  title: string;
  tagline: string;
  forwardText: string;
  forwardLink: string;
};
const ActionableItem: React.FC<ActionableItemProps> = ({
  title,
  tagline,
  forwardText,
  forwardLink,
}) => {
  return (
    <div className="grid grid-cols-2 text-xl py-12">
      <div className="flex flex-row space-x-12 justify-start items-start">
        <MdSubdirectoryArrowRight className="ml-4" size={25} />
        <h3 className="text-4xl">{title}</h3>
      </div>
      <div className="grid grid-cols-2 items-start">
        <p>{tagline}</p>
        <a
          className="mx-4 ml-auto hover:bg-stone-900 hover:text-slate-200 dark:hover:bg-stone-50 dark:hover:text-black "
          href={forwardLink}
        >
          {forwardText}
        </a>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="grid grid-rows-4 divide-y">
      <ActionableItem
        title="Persona"
        tagline={"Create a persona to interact with"}
        forwardText={"Create"}
        forwardLink={"/persona"}
      />
      <ActionableItem
        title="OSINT"
        tagline={"Gather data from open sources to create a persona"}
        forwardText={"Gather"}
        forwardLink={"/gather"}
      />
      <ActionableItem
        title="Playground"
        tagline={
          "Replicate a persona, test with different scenarios and response strategies"
        }
        forwardText={"Replicate"}
        forwardLink={"/playground"}
      />
      <ActionableItem
        title="API"
        tagline={"Learn about the API"}
        forwardText={"Learn"}
        forwardLink={"/"}
      />
    </div>
  );
};

export default CallToAction;
