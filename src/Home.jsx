import { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { BsX } from "react-icons/bs";
import { IoIosArrowDropup } from "react-icons/io";
import { BsPersonStanding } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";
import { TbBabyCarriageFilled } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import Header from "./components/Header";

const Home = () => {
  const [promoStatus, setPromoStatus] = useState(true);
  const [toTopActive, toTopStatus] = useState(false);

  const dataLayanan = [
    {
      targetCard: "/kalkulatorbmi",
      iconCard: (
        <BsPersonStanding className="text-yellow-300 w-[50px] h-[50px] rounded-md" />
      ),
      namaCard: "Kalkulator BMI",
      deskripsiCard:
        "Cek berat badan ideal Anda dalam detik. Temukan jawaban sehat sekarang juga!",
    },
    {
      targetCard: "/kalkulatorsiklustidur",
      iconCard: (
        <GiNightSleep className="text-yellow-300 w-[50px] h-[50px] rounded-md" />
      ),
      namaCard: "Kalkulator siklus tidur",
      deskripsiCard:
        "Tidur nyenyak, bangun segar. Temukan waktu tidur optimal Anda sekarang juga!",
    },
    {
      targetCard: "/prediksikelahiran",
      iconCard: (
        <TbBabyCarriageFilled className="text-yellow-300 w-[50px] h-[50px] rounded-md" />
      ),
      namaCard: "Prediksi kelahiran",
      deskripsiCard:
        "Ingin tahu kapan bayi Anda lahir? Prediksi usia janin dengan mudah di sini!",
    },
    {
      targetCard: "/tesbutawarna",
      iconCard: (
        <FaRegEye className="text-yellow-300 w-[50px] h-[50px] rounded-md" />
      ),
      namaCard: "Tes buta warna",
      deskripsiCard:
        "Uji penglihatan Anda secara akurat. Siapkah Anda melihat dunia dengan perspektif baru?",
    },
    {
      targetCard: "/cardgame",
      iconCard: (
        <FaBrain className="text-yellow-300 w-[50px] h-[50px] rounded-md" />
      ),
      namaCard: "Memory card game",
      deskripsiCard:
        "Asah ingatan Anda dengan game seru. Berani tantang diri Anda untuk jadi juara?",
    },
  ];

  window.addEventListener("scroll", () => {
    window.scrollY >= 100 ? toTopStatus(true) : toTopStatus(false);
  });

  return (
    <>
      <div
        id="home"
        className="w-full h-full bg-gradient-to-b from-red-600 to-red-400"
      >
        {promoStatus == true ? (
          <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500  py-2 es:px-1 flex flex-row justify-around items-center">
            <div></div>
            <p className="text-zinc-700 text-sm md:text-md">
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
        <div className="flex flex-col justify-center items-center gap-y-5 py-32 md:py-40">
          <p className="text-white text-sm md:text-base text-center">Explore sesuka hati!</p>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black text-center">
            Akses <span className="text-yellow-300">Kesehatan</span> Berkualitas
          </h1>
          <TypeAnimation
            className="sm:-mt-3 mb-0 text-white font-black text-3xl md:text-5xl lg:text-6xl"
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
          <p className="text-white text-sm md:text-base text-center">
            Game, dan Kalkulator kesehatan untuk hidup yang lebih sejahtera!
          </p>
        </div>
        <div
          id="tujuan"
          className="flex flex-col gap-y-5 lg:grid grid-cols-12 items-center text-white py-32 px-5 sm:px-10 xl:px-32 2xl:px-60"
        >
          <div className="sm:w-[500px] lg:col-span-6 flex justify-center items-center">
            <img className="relative w-full" src="/tujuanKami.png" alt="" />
          </div>
          <div className="col-start-8 xl:col-start-9 col-span-12">
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-black">
              Menyejahterakan banyak orang!
            </h1>
            <p className="mt-2 sm:mt-5 text-sm md:text-md lg:text-lg">
              Memastikan setiap individu, tanpa memandang usia, mendapatkan hak
              atas kesehatan yang layak dan kesejahteraan yang optimal melalui
              akses layanan kesehatan yang merata dan berkualitas.
            </p>
          </div>
        </div>
        <div
          id="layanan"
          className="py-10 md:py-40 px-5 sm:px-10 xl:px-32 2xl:px-60"
        >
          <h1 className="text-white text-2xl md:text-4xl font-black text-center">
            Layanan yang kami sediakan
          </h1>
          <div className="flex flex-wrap lg:grid grid-cols-12 gap-5 mt-10">
            {dataLayanan.map((data, index) => (
              <Link
                key={index}
                to={data.targetCard}
                className="w-full lg:col-span-4 backdrop-blur-lg bg-gray-300 hover:bg-white bg-opacity-20 hover:bg-opacity-20 flex flex-col gap-y-3 md:gap-y-5 p-5 rounded-md"
              >
                {data.iconCard}
                <h2 className="text-base md:text-lg font-bold text-white">
                  {data.namaCard}
                </h2>
                <p className="text-sm md:text-base text-white">{data.deskripsiCard}</p>
              </Link>
            ))}
          </div>
        </div>
        <div
          id="komunitas"
          className="lg:grid grid-cols-12 items-center py-40 px-5 sm:px-10 xl:px-32 2xl:px-60"
        >
          <div className="col-span-5 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-black">
              Ayo Bergabung ke{" "}
              <span className="text-yellow-300">Komunitas!</span>
            </h1>
            <p className="text-sm md:text-lg my-5">
              Temukan teman baru, tukar pengalaman, dan jadilah bagian dari
              perjalanan seru bersama komunitas kami.
            </p>
            <a
              target="_blank"
              href="https://chat.whatsapp.com/IbhgFpIKIowIREo6pOJMIQ"
              className="bg-yellow-400 p-3 rounded-md text-sm md:text-lg font-bold text-zinc-700"
            >
              Bergabung 🚀
            </a>
          </div>
          <img
            className="hidden lg:block md:col-start-8 col-span-5"
            src="/komunitas.png"
            alt=""
          />
        </div>
        <footer className="p-5">
          <div className="w-full flex flex-col gap-y-14 lg:grid grid-cols-12 bg-white p-5 sm:p-10 rounded-md">
            <div className="col-span-4 lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-x-3">
                  <img className="w-7 lg:w-10" src="/logo.png" alt="" />
                  <h1 className="text-zinc-700 text-md md:text-xl font-black">Vitalify</h1>
                </div>
                <p className="text-sm md:text-base">
                  Dibangun dengan hati untuk menghubungkan, menginspirasi, dan
                  memberdayakan.
                </p>
              </div>
              <p className="font-bold hidden md:block">
                © 2024 Vitalify | Joan Orlando Purba
              </p>
            </div>
            <div className="col-start-7 xl:col-start-8 col-span-2">
              <nav>
                <ul className="space-y-5">
                  <li>
                    <a
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      href="#tujuan"
                    >
                      Tujuan
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      href="#layanan"
                    >
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      href="#komunitas"
                    >
                      Komunitas
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      target="_blank"
                      href="https://api.whatsapp.com/send/?phone=62882000561667&text=Hai+Joan+mau+nanya+dong&type=phone_number&app_absent=0"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-3 lg:col-span-3">
              <nav>
                <ul className="space-y-5">
                  <li>
                    <Link
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      to="/kalkulatorbmi"
                    >
                      Kalkulator BMI
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      to="/kalkulatorsiklustidur"
                    >
                      Kalkulator siklus tidur
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      to="/prediksikelahiran"
                    >
                      Prediksi kelahiran
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      to="/tesbutawarna"
                    >
                      Tes buta warna
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      to="/cardgame"
                    >
                      Memory card game
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul className="space-y-5">
                  <li>
                    <Link
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      to="https://www.instagram.com/joanorlandopurba/"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm md:text-base text-zinc-500 hover:text-black"
                      to="https://www.linkedin.com/in/joanpurba/"
                    >
                      Linkedin
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <p className="font-bold block md:hidden">
              © 2024 Vitalify | Joan Orlando Purba
            </p>
          </div>
        </footer>
        {toTopActive ? (
          <a href="#home">
            <IoIosArrowDropup className="fixed z-10 right-5 bottom-5 sm:right-10 sm:bottom-10 w-12 h-12 bg-yellow-400 rounded-md p-2 shadow-xl text-zinc-700" />
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
