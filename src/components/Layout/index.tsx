import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

import Image from "next/image";
import { Children } from "react";

const data = [
  {
    id: 1,
    img: "/assets/svg/palmeta.svg",
    title: "Beaches",
  },
  {
    id: 2,
    img: "/assets/svg/cactus.svg",
    title: "Deserts",
  },
  {
    id: 3,
    img: "/assets/svg/montaña.svg",
    title: "Mountains",
  },
  {
    id: 4,
    img: "/assets/svg/torre_pizza.svg",
    title: "Iconic Cities",
  },
  {
    id: 5,
    img: "/assets/svg/houseboat.svg",
    title: "Houseboats",
  },
  {
    id: 6,
    img: "/assets/svg/vereda.svg",
    title: "Countryside",
  },
  {
    id: 7,
    img: "/assets/svg/camping.svg",
    title: "Camping",
  },
  {
    id: 8,
    img: "/assets/svg/castle.svg",
    title: "Castles",
  },
  {
    id: 9,
    img: "/assets/svg/skiing.svg",
    title: "Skiing",
  },
  {
    id: 10,
    img: "/assets/svg/palmera_tropical.svg",
    title: "tropical",
  },
];

export const Layout = ({ children }: any) => {
  return (
    <div className=" relative w-full">
      <Header />
      <main className="overflow-hidden relative w-full">
        <div
          className="
              absolute flex items-end
              bg-hero-pattern bg-cover bg-no-repeat w-full 
              h-[470px] lg:h-[841px] border-transparent"
        >
          <div className="relative  w-full h-28 bg-gradient-to-t from-white via-white  to-transparent" />
        </div>

        <section
          className="
              flex flex-col justify-start items-start
              gap-5 p-6 pt-[80px] lg:p-[50px] xl:p-[125px] pb-10 w-full
              "
        >
          <div className="z-0 w-[270px] lg:w-[580px] mt-1 lg:mb-[40px] text-2xl lg:text-7xl font-bold ">
            The Whole world awaits.
          </div>

          {/* Formulario ... */}
          <form
            action=""
            className="
                relative box-content
                w-full z-0 flex flex-col
                gap-4 justify-between items-center  
                lg:flex-row lg:bg-gris-trasparent 
                lg:rounded-2xl lg:h-[66px] lg:px-6
              
              "
          >
            {/* Search */}
            <div className="relative flex items-center w-full bg-gris-trasparent rounded-full lg:rounded-none lg:bg-transparent">
              <div className="absolute left-2 top-2">
                <Image
                  src="/assets/svg/search.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <input
                type="text"
                className="px-2 pl-10 w-80 h-[44px]  text-lg bg-transparent placeholder:text-white"
                placeholder="search destinations, hotels"
              />
            </div>
            {/* Options */}
            <div className="flex flex-col gap-4 items-center w-full lg:flex-row lg:w-auto">
              {/* Checks */}
              <div className="flex  px-10 lg:p-0 justify-between lg:justify-end w-full bg-gris-trasparent rounded-full lg:rounded-none lg:bg-transparent ">
                <div className="relative flex items-center ">
                  <div className="absolute left-1 w-[32px] h-[32px]">
                    <Image
                      src="/assets/svg/akar-icons_calendar.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <input
                    type="text"
                    className="px-2 pl-10 w-40 h-[44px] bg-transparent text-lg placeholder:text-white lg:w-[135px]"
                    placeholder="Check in"
                  />
                </div>
                <div className="relative flex items-center  ">
                  <div className="absolute left-1 w-[32px] h-[32px]">
                    <Image
                      src="/assets/svg/akar-icons_calendar.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <input
                    type="text"
                    className="px-2 pl-10 w-40 h-[44px] bg-transparent text-lg placeholder:text-white lg:w-[135px]"
                    placeholder="check out"
                  />
                </div>
              </div>

              {/* others */}
              <div className=" flex justify-center items-center lg:justify-start w-full lg:w-auto bg-gris-trasparent rounded-full lg:rounded-none lg:bg-transparent">
                <div className="relative">
                  <div className="absolute left-1 top-2 w-[32px] h-[32px]">
                    <Image
                      src="/assets/svg/fontisto_male.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <input
                    type="text"
                    className="px-2 pl-10 h-[44px] bg-transparent text-lg placeholder:text-white lg:w-[190px] "
                    placeholder="1 room, 2 adults"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="
                  flex justify-center items-center
                  p-3 w-full text-base font-bold
                  bg-blue-600 rounded-full 
                  lg:px-8 lg:bg-white lg:text-blue-600 lg:w-auto
                "
              >
                Search
              </button>
            </div>
          </form>

          {/* Top Categories */}
          <div className="z-0 flex flex-col  gap-10 mb-4">
            <div className="z-[1] font-semibold text-3xl text-black lg:text-white">
              Top categories
            </div>
            <div className="flex gap-6 lg:gap-[55px] ">
              {data.map(({ id, img, title }) => {
                return (
                  <div
                    key={id}
                    className="flex flex-col items-center gap-3 w-max cursor-pointer transition-all hover:scale-105 "
                  >
                    <div className="bg-gris-trasparent-card">
                      <Image src={img} alt="" width={32} height={32} />
                    </div>
                    <div className=" text-sm lg:text-base font-light text-[#808080] lg:text-white lg:font-semibold">
                      {title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
};
