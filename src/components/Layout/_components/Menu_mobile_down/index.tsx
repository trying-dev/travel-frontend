import Image from "next/image";
import { useEffect, useState } from "react";

export const Menu_mobile_down = () => {
  return (
    <div
      className={`
        z-[10] fixed md:hidden bottom-0 left-0 right-0 
        flex gap-[36px] justify-center
        p-4
        h-[85px] bg-white text-[#808080] text-xs `}
    >
      <div className="flex flex-col items-center gap-2 w-[64px] ">
        <Image src="/assets/svg/home-blue.svg" alt="" width={24} height={24} />
        <p>Home</p>
      </div>
      <div className="flex flex-col items-center gap-2 w-[64px]">
        <Image
          src="/assets/svg/package-gray.svg"
          alt=""
          width={24}
          height={24}
        />
        <p>Packages</p>
      </div>
      <div className="flex flex-col items-center gap-2 w-[64px]">
        <Image src="/assets/svg/stays-gray.svg" alt="" width={24} height={24} />
        <p>Stays</p>
      </div>
      <div className="flex flex-col items-center gap-2 w-[64px]">
        <Image
          src="/assets/svg/airplane-gray.svg"
          alt=""
          width={24}
          height={24}
        />
        <p>Flights</p>
      </div>
    </div>
  );
};
