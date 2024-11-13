import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { IoMdPlay, IoMdPause } from "react-icons/io";

const Meditasi = () => {
  const [tema, setTema] = useState("");
  const [durasi, setDurasi] = useState(0);
  const [sisaWaktu, setSisaWaktu] = useState({ minutes: 0, seconds: 0 });
  const [pause, setPause] = useState(true);
  const [waktuMulai, setWaktuMulai] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [meditasiPage, setMeditasiPage] = useState(false);
  const [konfirmasiStop, setKonfirmasiStop] = useState(false);
  const [popUp, setPopUp] = useState(true);

  const audioRef = useRef(null);

  useEffect(() => {
    if (tema) {
      const temaAudio = {
        hutan: "./temaHutan.mp3",
        pantai: "./temaPantai.mp3",
      };
      audioRef.current = new Audio(temaAudio[tema]);
    }
  }, [tema]);

  useEffect(() => {
    let waktu;

    if (!pause && meditasiPage) {
      setWaktuMulai(Date.now());
      audioRef.current?.play();

      waktu = setInterval(() => {
        const elapsed = Date.now() - waktuMulai;
        const updatedRemainingTime = remainingTime - elapsed;

        if (updatedRemainingTime <= 0) {
          setSisaWaktu({ minutes: 0, seconds: 0 });
          clearInterval(waktu);
          setMeditasiPage(false);
          audioRef.current?.pause();
          audioRef.current.currentTime = 0;
        } else {
          setSisaWaktu(hitungSisaWaktu(updatedRemainingTime));
        }
      }, 1000);
    } else {
      audioRef.current?.pause();
    }

    return () => clearInterval(waktu);
  }, [pause, waktuMulai, remainingTime, meditasiPage]);

  const hitungSisaWaktu = (remaining) => ({
    minutes: Math.floor((remaining / 1000 / 60) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  });

  const handleStart = (e) => {
    e.preventDefault();

    if (!tema) {
      toast.error("Pilih tema meditasi!", { autoClose: 3000 });
      return;
    }

    if (!durasi) {
      toast.error("Pilih durasi meditasi!", { autoClose: 3000 });
      return;
    }

    const initialTime = durasi * 60 * 1000;
    setRemainingTime(initialTime);
    setSisaWaktu(hitungSisaWaktu(initialTime));
    setPause(false);
    setMeditasiPage(true);
  };

  const handlePauseResume = () => {
    if (pause) {
      setRemainingTime((prev) => prev - (Date.now() - waktuMulai));
    }
    setPause((prev) => !prev);
  };

  const handleStopClick = () => {
    setKonfirmasiStop(true);
  };

  const confirmStop = () => {
    setKonfirmasiStop(false);
    setMeditasiPage(false);
    setSisaWaktu({ minutes: 0, seconds: 0 });
    setPause(true);
    setDurasi(0);
    audioRef.current?.pause();
    audioRef.current.currentTime = 0;
  };

  const cancelStop = () => {
    setKonfirmasiStop(false);
  };

  const getBackgroundClass = () => {
    if (!meditasiPage) return "bg-white";
    switch (tema) {
      case "hutan":
        return "backgroundHutan bg-no-repeat bg-center relative";
      case "pantai":
        return "backgroundPantai bg-no-repeat bg-center relative";
      default:
        return "bg-white";
    }
  };

  useEffect(() => {
    document.body.className = getBackgroundClass();
  }, [tema, meditasiPage]);

  return (
    <>
      {!meditasiPage && (
        <div className="h-screen p-5 flex flex-col justify-between gap-y-5">
          <div className="flex">
            <Link
              className="flex items-center gap-x-1 bg-red-600 px-5 py-2 rounded-3xl text-white"
              to="/"
            >
              <p className="text-base sm:text-xl font-semibold">Back</p>
            </Link>
          </div>
          <div className="flex justify-center">
            <form
              className="flex flex-col 2xl:flex-row justify-between items-end"
              onSubmit={handleStart}
            >
              <ul className="w-full flex items-end gap-3">
                <li className="w-full md:w-[120px] sm:w-full xl:w-[100px]">
                  <select
                    onChange={(e) => setTema(e.target.value)}
                    className="bg-gray-100 outline-none rounded-md w-full text-sm py-3"
                  >
                    <option value="">Tema</option>
                    <option value="hutan">Hutan</option>
                    <option value="pantai">Pantai</option>
                  </select>
                </li>
                <li className="w-full md:w-[120px] sm:w-full xl:w-[100px]">
                  <select
                    onChange={(e) => setDurasi(Number(e.target.value))}
                    className="bg-gray-100 outline-none rounded-md w-full text-sm py-3"
                  >
                    <option value="0">Durasi</option>
                    <option value="15">15 menit</option>
                    <option value="30">30 menit</option>
                    <option value="60">60 menit</option>
                  </select>
                </li>
                <li className="flex w-full xl:w-[150px] justify-center">
                  <button
                    type="submit"
                    className="bg-red-500 text-white font-semibold w-full text-sm p-3 rounded-md"
                  >
                    Mulai
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <footer className="w-full">
            <p className="text-sm sm:text-base text-center">
              &copy; Joan Orlando Purba | 2024
            </p>
          </footer>
        </div>
      )}

      {meditasiPage && (
        <div className="fixed inset-0 flex flex-col justify-center items-center z-50">
          {/* Overlay to darken background */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

          <div className="relative z-10 text-white text-3xl font-bold mb-5">
            {String(sisaWaktu.minutes).padStart(2, "0")}:
            {String(sisaWaktu.seconds).padStart(2, "0")}
          </div>

          <div className="relative z-10 flex gap-3">
            <button
              onClick={handlePauseResume}
              className="bg-yellow-500 px-3 py-2 md:px-5 md:py-3 rounded-md text-white font-semibold flex items-center gap-2"
            >
              {pause ? <IoMdPlay size={20} /> : <IoMdPause size={20} />}
            </button>

            <button
              onClick={handleStopClick}
              className="bg-red-600 text-sm px-3 py-2 md:px-5 md:py-3 rounded-md text-white font-semibold"
            >
              Berhenti Meditasi
            </button>
          </div>
        </div>
      )}

      {konfirmasiStop && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-md shadow-lg w-80">
            <h2 className="text-lg font-semibold text-center">Konfirmasi</h2>
            <p className="text-sm text-center my-3">
              Apakah Anda yakin ingin menghentikan meditasi?
            </p>
            <div className="flex justify-around mt-4">
              <button
                onClick={confirmStop}
                className="bg-red-500 text-sm text-white font-semibold px-4 py-2 rounded-md"
              >
                Ya, Hentikan
              </button>
              <button
                onClick={cancelStop}
                className="bg-gray-300 text-sm px-4 py-2 rounded-md"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {popUp && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-md shadow-lg w-80">
            <h2 className="text-lg font-semibold text-center">
              Selamat Datang
            </h2>
            <p className="text-sm text-center my-3">
              Silakan pilih tema dan durasi meditasi untuk memulai.
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setPopUp(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer stacked />
    </>
  );
};

export default Meditasi;
