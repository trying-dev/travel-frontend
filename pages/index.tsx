import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/assets/svg/palmeras.svg",
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
    img: "/assets/svg/totte_pizza.svg",
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

const top_vacation = [
  {
    id: 1,
    img: "/assets/images/indenosia.png",
    city: "Bali",
    country: "Indonesia",
  },
  {
    id: 2,
    img: "/assets/images/ireland.png",
    city: "Kerry",
    country: "Ireland",
  },
  {
    id: 3,
    img: "/assets/images/australia.png",
    city: "Sydney",
    country: "Australia",
  },
  {
    id: 4,
    img: "/assets/images/france.png",
    city: "Paris",
    country: "France",
  },
];

const offers = [
  {
    id: 1,
    img: "/assets/images/offers_img1.png",
    company: "Domestic Flights",
    description: "Huge savings on flight with trxl.",
    comment: "Book domestic flights starting @just 1459",
    link: "#",
  },
  {
    id: 2,
    img: "/assets/images/offers_img2.png",
    company: "International Hotels",
    description: "Enjoy upto 20% off on International Hotels",
    comment: "Make the most of this deal on your first booking with trxvl.",
    link: "#",
  },
  {
    id: 3,
    img: "/assets/images/offers_img1.png",
    company: "Domestic Flights",
    description: "Huge savings on flight with trxl.",
    comment: "Book domestic flights starting @just 1459",
    link: "#",
  },
];

const browse_type = [
  {
    id: 1,
    name: "Hotels",
    img: "/assets/images/hotels.png",
    link: "#",
  },
  {
    id: 2,
    name: "Apartments",
    img: "/assets/images/apartments.png",
    link: "#",
  },
  {
    id: 3,
    name: "Resorts",
    img: "/assets/images/resorts.png",
    link: "#",
  },
  {
    id: 4,
    name: "Villas",
    img: "/assets/images/villas.png",
    link: "#",
  },
];

const Home: NextPage = () => {
  return (
    <div className="relative text-white flex justify-center my-20 font-">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" relative w-[1366px]">
        <header className="z-10 absolute flex justify-between items-center px-10 w-full py-6 ">
          <div className="text-3xl font-bold cursor-pointer">trxvl.</div>
          <nav className="flex gap-5 items-center mr-10 text-lg font-light ">
            <div className="border-blue-100 cursor-pointer transition-all hover:scale-105">
              Home
            </div>
            <div className="cursor-pointer transition-all hover:scale-105">
              Stays
            </div>
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
        </header>

        <main className="overflow-hidden ">
          {/* Imagen de fondo */}
          <div className="absolute top-0 z-0 ">
            <div className="relative">
              <Image
                src="/assets/images/image1.png"
                alt=""
                width={1366}
                height={841}
              />
              <div className="absolute bottom-0 w-[1366px] h-28 bg-gradient-to-t from-white via-white  to-transparent" />
            </div>
          </div>

          <section
            className="
                  flex flex-col justify-start items-start
                  gap-10 p-[120px]
                  "
          >
            <div className="z-0 w-[580px] mt-1 text-7xl font-bold ">
              The Whole world awaits.
            </div>
            {/* Formulario ... */}
            <form
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
            </form>

            {/* Top Categories */}
            <div className="z-0 flex flex-col  gap-10 mb-4">
              <div className="font-semibold text-3xl">Top categories</div>
              <div className="flex gap-[55px]">
                {data.map(({ id, img, title }) => {
                  return (
                    <div
                      key={id}
                      className="flex flex-col items-center cursor-pointer transition-all hover:scale-105"
                    >
                      <Image src={img} alt="" width={50} height={50} />
                      <div className=" text-base font-light">{title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top Vacation destination */}
            <div className="relative w-full h-[270px]">
              <div className="z-0 absolute flex flex-col gap-8 w-auto">
                <div className="z-0 font-semibold text-3xl w-auto">
                  Top Vacation Destinations
                </div>
                <div className="flex gap-5">
                  {top_vacation.map(({ id, img, city, country }) => {
                    return (
                      <div
                        key={id}
                        className="relative w-[310px] h-[200px] cursor-pointer transition-all duration-500 hover:scale-105"
                      >
                        <Image
                          src={img}
                          alt="australia"
                          width={310}
                          height={200}
                          className=" rounded-md w-[310px] h-[200px]"
                        />
                        <div className="absolute bottom-7 left-6">
                          {city}, {country}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Offers */}
            <div className="z-0 relative flex flex-col gap-8 ">
              <div className=" font-semibold text-black text-3xl w-auto">
                Offers
              </div>
              <div className="flex gap-5">
                {offers.map(({ id, company, description, comment, img }) => (
                  <div
                    className="flex gap-6 p-6 w-[680px]  text-black rounded-2xl shadow-md cursor-pointer transition-all duration-500 
                    hover:scale-[1.015]"
                    key={id}
                  >
                    <div className="w-[310px] h-[210px] overflow-hidden rounded-lg">
                      <Image src={img} alt="" width={310} height={210} />
                    </div>
                    <div className="flex flex-col  justify-between ">
                      <div>
                        <div className="text-base">{company}</div>
                        <div className="text-2xl font-semibold">
                          {description}
                        </div>
                        <div className="text-base">{comment}</div>
                      </div>

                      <button
                        className="
                              bg-[#2659C3] p-4   w-[140px] 
                              text-white text-base rounded-full
                                shadow-md
                                cursor-pointer transition-all duration-500 
                                hover:scale-105 hover:shadow-lg
                                "
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browse property */}
            <div className="z-0 flex flex-col  gap-10 mb-4">
              <div className="font-semibold text-3xl">Top categories</div>
              <div className="flex gap-[55px]">
                {browse_type.map(({ id, name, img }) => (
                  <div
                    key={id}
                    className="relative transition-all duration-500 hover:scale-105 hover:shadow-sm"
                  >
                    <div>
                      <Image
                        className="rounded-lg "
                        src={img}
                        alt={name}
                        width={310}
                        height={200}
                      />
                    </div>
                    <div className="absolute bottom-6 left-6 ">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
