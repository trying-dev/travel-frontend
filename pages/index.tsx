import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Tarjeta } from "@components/Tarjeta";
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

const tarjetas = [
  {
    id: 1,
    name: "Swiss Alps",
    qualification: "4.7",
    img: "/assets/images/tarjeta1.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 2,
    name: "Hallstatt",
    qualification: "4.9",
    img: "/assets/images/tarjeta2.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 3,
    name: "Faroe Island",
    qualification: "4.5",
    img: "/assets/images/tarjeta1.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 4,
    name: "Innsbruck",
    qualification: "4.7",
    img: "/assets/images/tarjeta4.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
];
const recent_viewed = [
  {
    id: 1,
    name: "Hallstatt",
    qualification: "4.9",
    img: "/assets/images/tarjeta2.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 2,
    name: "Innsbruck",
    qualification: "4.9",
    img: "/assets/images/tarjeta2.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
];
const inclusive_packages = [
  {
    id: 1,
    name: "Val di Funes",
    qualification: "4.7",
    img: "/assets/images/tarjeta5.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 2,
    name: "Ushuaia",
    qualification: "4.9",
    img: "/assets/images/tarjeta6.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 3,
    name: "Berchtesgaden",
    qualification: "4.5",
    img: "/assets/images/tarjeta7.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 4,
    name: "Fussen",
    qualification: "4.7",
    img: "/assets/images/tarjeta8.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
];
const honeymoon = [
  {
    id: 1,
    name: "Mauritius",
    qualification: "4.7",
    img: "/assets/images/tarjeta9.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 2,
    name: "Havelock",
    qualification: "4.9",
    img: "/assets/images/tarjeta10.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 3,
    name: "Whitsunday Islands",
    qualification: "4.5",
    img: "/assets/images/tarjeta11.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
  {
    id: 4,
    name: "Maldives",
    qualification: "4.7",
    img: "/assets/images/tarjeta12.png",
    time: {
      days: 3,
      nights: 4,
    },
    features: {
      flights: 2,
      hotel: 1,
      transfers: 2,
      activities: 4,
    },
    descriptions: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curioius Corner",
    ],
    prices: {
      last: 88952,
      now: 88952,
    },
  },
];

const Home: NextPage = () => {
  return (
    <div className="relative text-white flex justify-center my-20 font-">
      <Head>
        <title>Travel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" relative w-[1366px]">
        <Header />
        <main className="overflow-hidden relative">
          {/* Imagen de fondo */}
          <div className="absolute top-0 z-[0] ">
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
                  gap-10 p-[120px] pb-10
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
              <div className="z-[1] font-semibold text-3xl">Top categories</div>
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

            {/* Popular destinations */}
            <div className="z-10 flex flex-col gap-6  text-white">
              <div className=" font-semibold text-3xl">
                Popular Beach Destinations
              </div>
              <div className="flex gap-6">
                {tarjetas.map((tarjeta) => {
                  return <Tarjeta key="" info={tarjeta} />;
                })}
              </div>
            </div>
            <div className="z-10 flex flex-col gap-6  text-white">
              <div className=" font-semibold text-3xl text-black">
                Recently Viewed
              </div>
              <div className="flex gap-6">
                {recent_viewed.map((tarjeta) => {
                  return <Tarjeta key="" info={tarjeta} />;
                })}
                <div className=" relative flex flex-col items-start gap-4 p-4 w-[345px] h-[550x] bg-mountains-blue bg-no-repeat bg-cover shadow-lg text-white rounded-lg">
                  <p className="text-2xl">Summer Bonanza!</p>
                  <p className="text-base">
                    Enjoy confortable transfers in shared coaches
                  </p>
                  <p className="text-base">Choose from 5 flights per week</p>
                  <p className="text-base">Curioius C</p>
                </div>
              </div>
            </div>
            <div className="z-10 flex flex-col gap-6  text-white">
              <div className=" font-semibold text-3xl text-black">
                All Inclusive Packages!
              </div>
              <div className="flex gap-6">
                {inclusive_packages.map((tarjeta) => {
                  return <Tarjeta key="" info={tarjeta} />;
                })}
              </div>
            </div>
            <div className="z-10 flex flex-col gap-6  text-white">
              <div className=" font-semibold text-3xl text-black">
                Honeymoon Freebies Special
              </div>
              <div className="flex gap-6">
                {tarjetas.map((tarjeta) => {
                  return <Tarjeta key="" info={tarjeta} />;
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
