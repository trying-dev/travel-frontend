import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Tarjeta } from "@components/Tarjeta";

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
    img: "/assets/svg/palmera.svg",
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
              h-[470px] border-transparent"
        >
          <div className="relative  w-full h-28 bg-gradient-to-t from-white via-white  to-transparent" />
        </div>
        {/* Imagen de fondo */}
        {/*         <div className="absolute top-0 z-[0] ">
          <div className="relative">
            <Image
              src="/assets/images/image1.png"
              alt=""
              width={1366}
              height={841}
            />
            <div className="absolute bottom-0 w-[1366px] h-28 bg-gradient-to-t from-white via-white  to-transparent" />
          </div>
        </div> */}

        <section
          className="
              flex flex-col justify-start items-start
              gap-5 p-6 pt-[80px] xl:p-[120px] pb-10 w-full
              "
        >
          <div className="z-0 w-[270px] xl:w-[580px] mt-1 text-2xl xl:text-7xl font-bold ">
            The Whole world awaits.
          </div>

          {/* Formulario ... */}

          {/*           <form
            action=""
            className="
              flex  justify-between items-center px-6 
              w-full z-0
              h-[60px] bg-gris-trasparent
              rounded-2xl"
          >
            <div className="flex items-center ">
              <Image
                src="/assets/svg/search.svg"
                alt=""
                width={32}
                height={32}
              />
              <input
                type="text"
                className="px-2 w-80 h-[44px] bg-transparent text-lg placeholder:text-white"
                placeholder="search destinations, hotels"
              />
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex items-center ">
                <Image
                  src="/assets/svg/akar-icons_calendar.svg"
                  alt=""
                  width={32}
                  height={32}
                />
                <input
                  type="text"
                  className="px-2 w-40 h-[44px] bg-transparent text-lg placeholder:text-white"
                  placeholder="Check in"
                />
              </div>
              <div className="flex items-center ">
                <Image
                  src="/assets/svg/akar-icons_calendar.svg"
                  alt=""
                  width={32}
                  height={32}
                />
                <input
                  type="text"
                  className="px-2 w-40 h-[44px] bg-transparent text-lg placeholder:text-white"
                  placeholder="check out"
                />
              </div>
              <div className="flex items-center ">
                <Image
                  src="/assets/svg/fontisto_male.svg"
                  alt=""
                  width={32}
                  height={32}
                />
                <input
                  type="text"
                  className="px-2 w-40 h-[44px] bg-transparent text-lg placeholder:text-white"
                  placeholder="1 room, 2 adults"
                />
              </div>
              <button
                type="submit"
                className="
              flex justify-center
              items-center px-8 
              py-5 h-8 bg-white 
              text-blue-600 text-base rounded-3xl"
              >
                Search
              </button>
            </div>
          </form> */}

          <form
            action=""
            className="
              flex flex-col gap-4 justify-between items-center 
              w-full z-0
              "
          >
            <div className="flex items-center w-full bg-gris-trasparent rounded-full">
              <div className="relative left-9 top-1">
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
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="flex  px-10 justify-between w-full bg-gris-trasparent rounded-full">
                <div className="flex items-center ">
                  <Image
                    src="/assets/svg/akar-icons_calendar.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <input
                    type="text"
                    className="px-2 w-24 h-[44px] bg-transparent text-lg placeholder:text-white"
                    placeholder="Check in"
                  />
                </div>
                <div className="flex items-center  ">
                  <Image
                    src="/assets/svg/akar-icons_calendar.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <input
                    type="text"
                    className="px-2 w-24 h-[44px] bg-transparent text-lg placeholder:text-white"
                    placeholder="check out"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center  w-full bg-gris-trasparent rounded-full">
                <Image
                  src="/assets/svg/fontisto_male.svg"
                  alt=""
                  width={32}
                  height={32}
                />
                <input
                  type="text"
                  className="px-2 w-40 h-[44px] bg-transparent text-lg placeholder:text-white"
                  placeholder="1 room, 2 adults"
                />
              </div>
              <button
                type="submit"
                className="
                  flex justify-center items-center
                  p-3 w-full text-base font-bold
                  bg-blue-600 rounded-full
                "
              >
                Search
              </button>
            </div>
          </form>

          {/* Top Categories */}
          <div className="z-0 flex flex-col  gap-10 mb-4">
            <div className="z-[1] font-semibold text-3xl text-black">
              Top categories
            </div>
            <div className="flex gap-6 xl:gap-[55px] ">
              {data.map(({ id, img, title }) => {
                return (
                  <div
                    key={id}
                    className="flex flex-col items-center gap-3 w-max cursor-pointer transition-all hover:scale-105"
                  >
                    <Image src={img} alt="" width={32} height={32} />
                    <div className=" text-sm xl:text-base font-light text-[#808080]">
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
