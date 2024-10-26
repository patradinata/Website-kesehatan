import { useState } from "react";
import { Link } from "react-router-dom";

const Imt = () => {
  const [berat, setBerat] = useState();
  const [tinggi, setTinggi] = useState();
  const [hasilBmi, setHasilBmi] = useState();
  const [kategoriBmi, setKategoriBmi] = useState();

  const bmi = (e) => {
    e.preventDefault();

    let beratAngka = parseFloat(berat);
    let tinggiAngka = parseFloat(tinggi);

    let result = beratAngka / Math.pow(tinggiAngka / 100, 2);
    result = parseFloat(result.toFixed(2));

    if (result < 18.5) {
      setKategoriBmi("kekurangan berat badan");
    } else if (result >= 18.5 && result < 24.9) {
      setKategoriBmi("sehat");
    } else if (result >= 25 && result < 29.9) {
      setKategoriBmi("kelebihan berat badan");
    } else {
      setKategoriBmi("obesitas");
    }

    setHasilBmi(
      result.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };


  return (
    <>
      <div className="p-5 flex flex-col gap-y-5">
        <div className="flex">
          <Link
            className="flex items-center gap-x-1 bg-red-600 px-5 py-2 rounded-3xl text-white"
            to="/"
          >
            <p className="text-xl font-semibold">Back</p>
          </Link>
        </div>
        <div className="h-[400px] backgroundPinggang bg-no-repeat bg-cover bg-center flex justify-center items-center"></div>
        <div>
          <h1 className="text-3xl font-extrabold text-center">
            Index massa tubuh / BMI (Body mass index)
          </h1>
          <form className="mt-10" onSubmit={bmi}>
            <ul className="grid grid-cols-12 gap-5 justify-center">
              <li className="col-start-5 col-span-2">
                <input
                  onChange={(e) => setBerat(e.target.value)}
                  className="w-full border border-transparent bg-gray-100 focus:bg-gray-200 outline-none rounded-md p-2"
                  type="text"
                  placeholder="berat (kg)"
                />
              </li>
              <li className="col-span-2">
                <input
                  onChange={(e) => setTinggi(e.target.value)}
                  className="w-full border border-transparent bg-gray-100 focus:bg-gray-200 outline-none rounded-md p-2"
                  type="text"
                  placeholder="tinggi (cm)"
                />
              </li>
              <li className="col-start-5 col-end-9">
                <button
                  type="submit"
                  className="w-full text-lg font-semibold bg-red-500 text-white rounded-md py-2"
                >
                  Lihat hasil
                </button>
              </li>
              {hasilBmi ? (
                <li className="col-start-5 col-end-9 flex flex-col items-center gap-y-5">
                  <p className="font-semibold">BMI kamu adalah</p>
                  <p className="text-5xl font-bold">{hasilBmi}</p>
                  <p>
                    kamu <b>{kategoriBmi}</b>
                  </p>
                  <div className="w-full flex">
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-2 bg-yellow-500"></div>
                      <p className="font-semibold mt-2">UNDERWEIGHT</p>
                      <p className="font-semibold mt-2">{"<"} 18,5</p>
                    </div>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-2 bg-green-500"></div>
                      <p className="font-semibold mt-2">NORMAL</p>
                      <p className="font-semibold mt-2">18,5 - 25</p>
                    </div>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-2 bg-orange-500"></div>
                      <p className="font-semibold mt-2">OVERWEIGHT</p>
                      <p className="font-semibold mt-2">25 - 30</p>
                    </div>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-2 bg-red-500"></div>
                      <p className="font-semibold mt-2">OBESITAS</p>
                      <p className="font-semibold mt-2">{">"} 30</p>
                    </div>
                  </div>
                </li>
              ) : (
                ""
              )}
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Imt;
