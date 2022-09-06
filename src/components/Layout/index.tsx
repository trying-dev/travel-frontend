import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

import Image from "next/image";
import { Children } from "react";
import { Categories } from "./_components/Categories";
import { Menu_mobile_down } from "./_components/Menu_mobile_down";

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
          <div className="z-0 w-[270px] lg:w-[580px] mt-1 lg:mb-[40px] text-2xl lg:text-7xl font-bold text-white cursor-default">
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
                  bg-blue-600 rounded-full text-white
                  lg:px-8 lg:bg-white lg:text-blue-600 lg:w-auto
                "
              >
                Search
              </button>
            </div>
          </form>

          {/* Top Categories */}
          <Categories />
          {children}
        </section>
      </main>
      <Footer />
      <Menu_mobile_down />
    </div>
  );
};
