import Image from "next/image";

export const Tarjeta = ({ info }: any) => {
  console.log("info ::", info);
  return (
    <div className=" relative flex flex-col items-center gap-6 p-4 w-[345px] h-[550] bg-white shadow-lg text-black rounded-lg">
      <div className="w-[310] h-[200] self-center">
        <Image
          src={info.img}
          alt={info.name}
          width={310}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col self-stretch">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">{info.name}</p>
          <div>
            <Image
              src="/assets/svg/star.svg"
              alt="star"
              width={24}
              height={24}
            />
            {info.qualification}
          </div>
        </div>
        <div className="text-base text-[#808080]">
          {info.time.days} Days {info.time.nights} Nights
        </div>
      </div>

      <div className="flex text-xs text-[#808080]">
        <div className=" flex flex-col p-3">
          <Image src="/assets/svg/airplane.svg" alt="" width={24} height={24} />
          <p>{info.features.flights} Flights</p>
        </div>
        <div className=" flex flex-col p-3">
          <Image src="/assets/svg/hotel.svg" alt="" width={24} height={24} />
          <p>{info.features.hotel} Hotel</p>
        </div>
        <div className=" flex flex-col p-3">
          <Image src="/assets/svg/car.svg" alt="" width={24} height={24} />
          <p>{info.features.transfer} Transfers</p>
        </div>
        <div className=" flex flex-col p-3">
          <Image src="/assets/svg/trekking.svg" alt="" width={24} height={24} />
          <p>{info.features.activities} Activities</p>
        </div>
      </div>
      <div>
        <ul className="text-base list-disc text-[#808080]">
          {info.descriptions.map((description: string) => {
            console.log(description);
            return <li key={Math.random()}>{description}</li>;
          })}
        </ul>
      </div>
      <div className="flex items-center gap-4 ">
        <p className="text-base line-through justify-self-start text-[#808080]">
          ${info.prices.last}
        </p>
        <p className="flex items-center text-2xl font-bold ">
          ${info.prices.now}
          <span className="text-sm font-light text-[#808080]">Per person</span>
        </p>
      </div>
    </div>
  );
};
