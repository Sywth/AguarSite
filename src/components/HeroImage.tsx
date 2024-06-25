import React, { useEffect, useState } from "react";
import Image from "next/image";

type HeroImageProps = React.HTMLProps<HTMLDivElement> & {};

const PossibleImages: [string, string][] = [
  ["/hero-opt-1.jpg", "Working yaks in the Everest region of Nepal"],
  ["/hero-opt-2.jpg", "Riggers working on the pylons"],
  [
    "/hero-opt-3.jpg",
    "Working at the consolidation of a wooden footbridge in Luang Prabang",
  ],
  [
    "/hero-opt-4.jpg",
    "海上自衛隊舞鶴警備隊で行われた、警備犬の追悼式。ハンドラーと共に、亡くなった警備犬の「同僚」も参列している。",
  ],
  [
    "/hero-opt-5.jpg",
    "A farmer is plowing his agricultural land conventionally using the power of 2 buffalo",
  ],
  ["/hero-opt-6.jpg", "Windmill of Moidrey (Manche, Basse-Normandie, France)"],
];
const HeroImage: React.FC<HeroImageProps> = ({}) => {
  const [image, setImage] = useState<[string, string]>(["", ""]);
  useEffect(() => {
    setImage(PossibleImages[Math.floor(Math.random() * PossibleImages.length)]);
  }, []);

  return (
    <div className="grid grid-row-2 gap-6">
      <Image
        className="sm:w-[80vw] sm:h-[60vh] object-cover dark:invert light:invert-0"
        src={image[0]}
        width={1200}
        height={600}
        alt={image[1]}
      />
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <div>{`${image[1]}, Courtesy of `}</div>
        <a
          className="text-blue-500 dark:text-blue-400"
          href="https://commons.wikimedia.org/"
        >
          {"Wikimedia Commons"}
        </a>
      </div>
    </div>
  );
};

export default HeroImage;
