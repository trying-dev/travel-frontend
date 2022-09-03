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
            -left-${active ? "6" : "full"} 

            p-${active ? "4" : "0"} 

            w-${active ? "screen" : "0"} 

            h-screen bg-blue-300 text-black 
            font-bold transition-all duration-500
            lg:relative lg:top-auto lg:left-0 lg:text-white lg:bg-transparent lg:w-full lg:h-auto
            `}
        >
          <nav className="flex flex-col lg:flex-row gap-5 items-center  lg:mr-10 text-lg font-light ">
            <div
              className="cursor-pointer transition-all hover:scale-105"
              onClick={initial}
            >
              Home
            </div>
            <div
              className="cursor-pointer transition-all hover:scale-105"
              onClick={initial}
            >
              Stays
            </div>
            <div
              className="cursor-pointe transition-all hover:scale-105"
              onClick={initial}
            >
              Flights
            </div>
            <div
              className="cursor-pointer transition-all hover:scale-105"
              onClick={initial}
            >
              Packages
            </div>
            <div
              className="cursor-pointer transition-all hover:scale-105 w-[60px]"
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
/*   <header className="z-10 absolute flex justify-between items-center px-10 w-full py-6 ">
    <div className="text-3xl font-bold cursor-pointer">trxvl.</div>
    <nav className="flex gap-5 items-center mr-10 text-lg font-light ">
      <div className="border-blue-100 cursor-pointer transition-all hover:scale-105">
        Home
      </div>
      <div className="cursor-pointer transition-all hover:scale-105">Stays</div>
      <div className="cursor-pointe transition-all hover:scale-105">
        Flights
      </div>
      <div className="cursor-pointer transition-all hover:scale-105">
        Packages
      </div>
      <div className="cursor-pointer transition-all hover:scale-105">
        Sing Up
      </div>
    </nav>
  </header> */
