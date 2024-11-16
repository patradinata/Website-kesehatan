import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(false);

  return (
    <>
      <header className="hidden md:flex justify-center py-5">
        <nav>
          <ul className="flex gap-x-32 text-white">
            <li>
              <a href="#tujuan">Tujuan</a>
            </li>
            <li>
              <a href="#layanan">Layanan</a>
            </li>
            <li>
              <a href="#komunitas">Komunitas</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=6282275338090text=Hai+Joan+mau+nanya+dong&type=phone_number&app_absent=0"
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className={`w-full md:hidden flex flex-row justify-between items-center py-2 bg-white z-10 px-2 es:px-3 ${
          navbarStatus ? "shadow-none" : "shadow-lg"
        }`}
      >
        <div className="flex items-center gap-x-3">
          <img className="w-7 lg:w-10" src="/logo.png" alt="" />
          <h1 className="text-red-500 text-xl font-black">Vitalify</h1>
        </div>
        <Hamburger
          size={30}
          onToggle={(toggled) => {
            if (toggled) {
              setNavbarStatus(true);
            } else {
              setNavbarStatus(false);
            }
          }}
          toggled={isOpen}
          toggle={setOpen}
          color="#ef4444"
        />
      </div>
      <section
        className={`w-full ${
          navbarStatus ? "absolute flex z-10" : "hidden"
        } justify-center items-center bg-white py-5 shadow-lg`}
      >
        <div></div>
        <nav className="w-full px-10">
          <ul className="flex flex-col items-center gap-y-10">
            <li className="">
              <a
                href="#tujuan"
                className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-all"
              >
                Tujuan
              </a>
            </li>
            <li className="">
              <a
                href="#layanan"
                className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-all"
              >
                Layanan
              </a>
            </li>
            <li className="">
              <a
                href="#komunitas"
                className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-all"
              >
                Komunitas
              </a>
            </li>
            <li className="flex w-full">
              <a
                href="https://api.whatsapp.com/send/?phone=6282275338090text=Hai+Joan+mau+nanya+dong&type=phone_number&app_absent=0"
                className="w-full bg-red-500 text-center px-4 rounded-full text-sm font-medium text-white border-0 focus:ring-0 py-2"
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Header;
