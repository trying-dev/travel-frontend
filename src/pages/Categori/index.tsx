import { Layout } from "@components/Layout";
import { Tarjeta } from "@components/Tarjeta";

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

export const Categori = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
