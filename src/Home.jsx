import { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { BsX } from "react-icons/bs";
import { IoIosArrowDropup } from "react-icons/io";
import Header from "./components/Header";

const Home = () => {
  const [promoStatus, setPromoStatus] = useState(true);
  const [toTopActive, toTopStatus] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY >= 100 ? toTopStatus(true) : toTopStatus(false);
  });

  return (
    <>
      <div id="home" className="w-full h-full bg-gradient-to-b from-red-600 to-red-400">
        {promoStatus == true ? (
          <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500  py-2 es:px-1 flex flex-row justify-around items-center">
            <div></div>
            <p className="text-zinc-700 text-md">
              Kontak nomor <b>112</b> dan <b>119</b> untuk menelpon{" "}
              <b>ambulans!!</b>
            </p>
            <BsX
              className="text-zinc-700 text-2xl cursor-pointer"
              onClick={() => setPromoStatus(false)}
            />
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        <Header />
        <div className="flex flex-col justify-center items-center gap-y-5 py-40">
          <p className="text-white text-center">Explore sesuka hati!</p>
          <h1 className="text-white text-6xl font-black text-center">
            Akses <span className="text-yellow-300">Kesehatan</span> Berkualitas
          </h1>
          <TypeAnimation
            className="text-white font-black text-6xl"
            sequence={[
              "untuk Hidup Lebih Sehat",
              1000,
              "untuk Hidup Lebih Sejahtera",
              1000,
              "untuk Hidup Lebih Baik",
              1000,
              "Tunggu apa lagi? ayo explore!!",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
          <p className="text-white text-center">
            Game, dan Kalkulator kesehatan untuk hidup yang lebih sejahtera!
          </p>
        </div>
        <div
          id="tujuan"
          className="grid grid-cols-12 items-center text-white py-40"
        >
          <div className="col-start-3 col-span-4 flex justify-center items-center">
            <img className="relative w-full" src="/tujuanKami.png" alt="" />
          </div>
          <div className="col-start-8 col-span-3">
            <h1 className="text-5xl font-black">
              Menyejahterakan banyak orang!
            </h1>
            <p className="mt-5 text-lg">
              Memastikan setiap individu, tanpa memandang usia, mendapatkan hak
              atas kesehatan yang layak dan kesejahteraan yang optimal melalui
              akses layanan kesehatan yang merata dan berkualitas.
            </p>
          </div>
        </div>
        {toTopActive ? (
          <a href="#home">
            <IoIosArrowDropup className="fixed z-10 right-5 bottom-5 sm:right-10 sm:bottom-10 w-12 h-12 bg-white rounded-md p-2 shadow-xl text-zinc-700" />
          </a>
        ) : (
          <a href="#home">
            <IoIosArrowDropup className="invisible fixed right-5 bottom-5 sm:right-10 sm:bottom-10 w-10 h-10 text-zinc-700" />
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
