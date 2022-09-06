import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:justify-between md:flex-row gap-10 xl:gap-[125px] py-[42px] px-[50px] xl:px-[120px] bg-black text-[13px] text-[#808080]">
      <p className="text-[32px] font-bold text-white cursor-default">Trxvl.</p>
      <div className="flex flex-col  gap-[20px]">
        <div className="flex flex-col  md:flex-row gap-10  xl:gap-[165px] ">
          <div className="flex flex-col gap-2 xl:gap-4">
            <div className="cursor-pointer">Seslendirme ve Alt Jazz</div>
            <div className="cursor-pointer">Media Market</div>
            <div className="cursor-pointer">Gillie</div>
            <div className="cursor-pointer">Size Last</div>
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <div className="cursor-pointer">Self Betimer</div>
            <div className="cursor-pointer">Yatırımcı İlişkileri</div>
            <div className="cursor-pointer">Yasal Hükümler</div>
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <div className="cursor-pointer">Yardım Merkezi</div>
            <div className="cursor-pointer">İş İmkanları</div>
            <div className="cursor-pointer">Çerez Tercihleri</div>
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <div className="cursor-pointer">Hediye Kartları</div>
            <div className="cursor-pointer">Kullanım Koşulları</div>
            <div className="cursor-pointer">Kurumsal Bilgiler</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  justify-between items-start gap-6">
          <button className="py-[10px] px-[15px] border-2 border-[#808080] cursor-pointer">
            Helment KOD
          </button>
          <div className="flex items-center gap-5">
            <Image
              src="/assets/svg/facebook.svg"
              alt=""
              width={24}
              height={24}
            />

            <Image
              src="/assets/svg/instagram.svg"
              alt=""
              width={24}
              height={24}
            />

            <Image
              src="/assets/svg/twitter.svg"
              alt=""
              width={24}
              height={24}
            />

            <Image
              src="/assets/svg/youtube.svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
        <div>© 1997-2021 Netflix, Inc. {"{i-062d573a0ee099242}"}</div>
      </div>
    </footer>
  );
};
