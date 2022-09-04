import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);

  const menuSwitch = () => {
    setActive(!active);
  };

  const initial = () => {
    setActive(false);
    console.log(active);
  };

  return (
    <header className="z-10 absolute flex flex-row-reverse lg:flex-row lg:justify-between px-6 pt-6 w-full">
      <div className=" flex justify-center lg:justify-start w-full text-2xl font-bold">
        Trxvl
      </div>
      {/* Navegacion */}
      <div className="relative ">
        <div onClick={menuSwitch} className="lg:hidden ">
          <Image
            src="/assets/svg/bars_menu.svg"
            alt="bars menu"
            width={24}
            height={24}
          />
        </div>
        <div
          className={` 
          overflow-hidden
          box-content  absolute -top-6 
          -left-full py-10 lg:p-0 w-0
          -left-${active ? "-left-5  w-screen" : "-left-full p-0 w-0"} 
          h-screen bg-black-trasparent text-black 
          font-bold transition-all duration-500
          lg:relative lg:top-auto lg:left-0 lg:text-white lg:bg-transparent lg:w-full lg:h-auto

          `}
        >
          <nav className="flex flex-col lg:flex-row gap-5 items-center  lg:mr-10 text-lg font-light ">
            <div
              className="p-4 lg:p-0 w-2/4 text-center text-white cursor-pointer transition-all hover:scale-105"
              onClick={initial}
            >
              Home
            </div>
            <div
              className="p-4 lg:p-0 w-2/4 text-center text-white cursor-pointer transition-all hover:scale-105 "
              onClick={initial}
            >
              Stays
            </div>
            <div
              className="p-4 lg:p-0 w-2/4 text-center text-white cursor-pointe transition-all hover:scale-105"
              onClick={initial}
            >
              Flights
            </div>
            <div
              className="p-4 lg:p-0 w-2/4 text-center text-white cursor-pointer transition-all hover:scale-105"
              onClick={initial}
            >
              Packages
            </div>
            <div
              className="p-4 lg:p-0 w-2/4 lg:w-[200px]  text-center text-white cursor-pointer transition-all hover:scale-105 w-[60px]"
              onClick={initial}
            >
              Sing Up
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
