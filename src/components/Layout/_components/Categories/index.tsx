import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    img2: "/assets/svg/palmera-gray.svg",
    img1: "/assets/svg/palmera-white.svg",
    title: "Beaches",
  },
  {
    id: 2,
    img1: "/assets/svg/cactus-white.svg",
    img2: "/assets/svg/cactus-gray.svg",
    title: "Deserts",
  },
  {
    id: 3,
    img1: "/assets/svg/montaña-white.svg",
    img2: "/assets/svg/montaña-gray.svg",
    title: "Mountains",
  },
  {
    id: 4,
    img1: "/assets/svg/torre_pizza-white.svg",
    img2: "/assets/svg/torre_pizza-gray.svg",
    title: "Iconic Cities",
  },
  {
    id: 5,
    img1: "/assets/svg/houseboat-white.svg",
    img2: "/assets/svg/houseboat-gray.svg",
    title: "Houseboats",
  },
  {
    id: 6,
    img1: "/assets/svg/vereda-white.svg",
    img2: "/assets/svg/vereda-gray.svg",
    title: "Countryside",
  },
  {
    id: 7,
    img1: "/assets/svg/camping-white.svg",
    img2: "/assets/svg/camping-gray.svg",
    title: "Camping",
  },
  {
    id: 8,
    img1: "/assets/svg/castle-white.svg",
    img2: "/assets/svg/castle-gray.svg",
    title: "Castles",
  },
  {
    id: 9,
    img1: "/assets/svg/skiing-white.svg",
    img2: "/assets/svg/skiing-gray.svg",
    title: "Skiing",
  },
  {
    id: 10,
    img1: "/assets/svg/palmera_tropical-white.svg",
    img2: "/assets/svg/palmera_tropical-gray.svg",
    title: "tropical",
  },
];

export const Categories = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const window_width = window.innerWidth;

    setWidth(window_width);
  }, [width]);

  return (
    <div className="z-0 flex flex-col  gap-10 mb-4">
      <div className="z-[1] font-semibold text-3xl text-black lg:text-white cursor-default">
        Top categories
      </div>
      <div className="flex gap-6 lg:gap-[55px] ">
        {data.map(({ id, img1, img2, title }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center gap-3 w-max cursor-default transition-all hover:scale-105 "
            >
              <div className="">
                {width >= 1023 ? (
                  <Image src={img1} alt="image" width={32} height={32} />
                ) : (
                  <Image src={img2} alt="image" width={32} height={32} />
                )}
              </div>
              <div className=" text-sm lg:text-base font-light text-[#808080] lg:text-white lg:font-semibold">
                {title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
