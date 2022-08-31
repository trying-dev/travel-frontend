export const Header = () => (
  <header className="z-10 absolute flex justify-between items-center px-10 w-full py-6 ">
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
  </header>
);
