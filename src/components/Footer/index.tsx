import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden  sm:flex gap-[125px] py-[42px] px-[120px] bg-black text-[13px] text-[#808080]">
      <p className="text-[32px] font-bold text-white">Trxvl.</p>
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[165px] ">
          <div className="flex flex-col gap-4">
            <div>Seslendirme ve Alt Jazz</div>
            <div>Media Market</div>
            <div>Gillie</div>
            <div>Size Last</div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Self Betimer</div>
            <div>Yatırımcı İlişkileri</div>
            <div>Yasal Hükümler</div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Yardım Merkezi</div>
            <div>İş İmkanları</div>
            <div>Çerez Tercihleri</div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Hediye Kartları</div>
            <div>Kullanım Koşulları</div>
            <div>Kurumsal Bilgiler</div>
          </div>
        </div>
        <div className="flex justify-between ">
          <button className="py-[10px] px-[15px] border-2 border-[#808080]">
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
