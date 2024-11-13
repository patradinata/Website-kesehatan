import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const KalkulatorBmi = () => {
  const [submited, setSubmited] = useState(false);
  const [jam, getJam] = useState("");
  const [menit, getMenit] = useState("");
  const [results, setResults] = useState([]);

  const getWaktu = (e) => {
    e.preventDefault();

    if (jam === "" || menit === "") {
      setSubmited(false);
      return toast.error("Pilih jam dan menit!");
    } else {
      setSubmited(true);

      const totalMenitBangun = parseInt(jam) * 60 + parseInt(menit);

      const durasiSiklus = {
        6: 540,
        5: 450,
        4: 360,
        3: 270,
      };

      const newResults = [];

      [6, 5, 4, 3].forEach((siklus) => {
        const waktuTidur =
          (totalMenitBangun - durasiSiklus[siklus] + 1440) % 1440;
        const jamTidur = Math.floor(waktuTidur / 60);
        const menitTidur = waktuTidur % 60;

        newResults.push({
          siklus,
          jamTidur,
          menitTidur,
          durasi: durasiSiklus[siklus] / 60,
        });
      });

      setResults(newResults);
    }
  };

  const artikel = [
    {
      linkCover:
        "https://ciputrahospital.com/wp-content/uploads/2024/09/man-sleeping-bed-morning-2-1-1024x683.jpg",
      linkArtikel: "https://ciputrahospital.com/cara-agar-cepat-tidur/",
      judulArtikel:
        "11 Cara Ampuh Tidur Cepat dan Nyenyak untuk Atasi Insomnia",
      authorArtikel: "Ciputra hospitals",
    },
    {
      linkCover:
        "https://cdn.hellosehat.com/wp-content/uploads/2018/12/Manfaat-Kesehatan-dan-Risiko-Tidur-di-Lantai.jpg?w=750&q=75",
      linkArtikel:
        "https://hellosehat.com/sehat/informasi-kesehatan/manfaat-dan-risiko-tidur-di-lantai/",
      judulArtikel:
        "Tidur di Lantai Sebetulnya Baik Atau Buruk Buat Kesehatan?",
      authorArtikel: "Hallo Sehat",
    },
    {
      linkCover:
        "https://thumb.viva.co.id/media/frontend/thumbs3/2020/03/25/5e7a4ac4a2461-dokter-tirta-mandira_1265_711.jpg",
      linkArtikel:
        "https://www.viva.co.id/digital/digilife/1719798-dokter-tirta-jelaskan-pentingnya-tidur-malam-dan-batasi-begadang",
      judulArtikel:
        "Dokter Tirta Jelaskan Pentingnya Tidur Malam dan Batasi Begadang",
      authorArtikel: "Viva",
    },
  ];

  const tableJamTidur = [
    {
      kategori: "Bayi",
      rentangUsia: "4–12 bulan",
      rekomendasi: "12-16 jam (termasuk tidur siang)",
    },
    {
      kategori: "Balita",
      rentangUsia: "1–2 tahun",
      rekomendasi: "11-14 jam (termasuk tidur siang)",
    },
    {
      kategori: "Prasekolah",
      rentangUsia: "3–5 tahun",
      rekomendasi: "10-13 jam (termasuk tidur siang)",
    },
    {
      kategori: "Pelajar",
      rentangUsia: "6–12 tahun",
      rekomendasi: "9-12 jam",
    },
    {
      kategori: "Remaja",
      rentangUsia: "13–18 tahun",
      rekomendasi: "8-10 jam",
    },
    {
      kategori: "Dewasa",
      rentangUsia: "18 tahun keatas",
      rekomendasi: "7 jam atau lebih",
    },
  ];

  return (
    <>
      <div className="p-5 flex flex-col gap-y-5">
        <div className="flex">
          <Link
            className="flex items-center gap-x-1 bg-red-600 px-5 py-2 rounded-3xl text-white"
            to="/"
          >
            <p className="text-base sm:text-xl font-semibold">Back</p>
          </Link>
        </div>
        <div className="h-0 lg:h-[400px] backgroundTidur bg-no-repeat bg-cover bg-center flex justify-center items-center"></div>
        <div className="space-y-10">
          <h1 className="text-xl lg:text-3xl font-extrabold text-center">
            Kalkulator Siklus Tidur
          </h1>
          <div className="px-0 lg:px-60 xl:px-96 space-y-10">
            <form
              className="flex flex-col 2xl:flex-row justify-between items-end"
              onSubmit={getWaktu}
            >
              <ul className="w-full flex items-end gap-3">
                <li className="w-[120px] sm:w-full xl:w-[100px]">
                  <select
                    onChange={(e) => getJam(e.target.value)}
                    className="bg-gray-100 outline-none rounded-md w-full text-sm py-3"
                    name=""
                    id=""
                  >
                    <option className="py-5" value={false} selected disabled>
                      Jam
                    </option>
                    <option className="py-5" value="1">
                      01
                    </option>
                    <option className="py-5" value="2">
                      02
                    </option>
                    <option className="py-5" value="3">
                      03
                    </option>
                    <option className="py-5" value="4">
                      04
                    </option>
                    <option className="py-5" value="5">
                      05
                    </option>
                    <option className="py-5" value="6">
                      06
                    </option>
                    <option className="py-5" value="7">
                      07
                    </option>
                    <option className="py-5" value="8">
                      08
                    </option>
                    <option className="py-5" value="9">
                      09
                    </option>
                    <option className="py-5" value="10">
                      10
                    </option>
                    <option className="py-5" value="11">
                      11
                    </option>
                    <option className="py-5" value="12">
                      12
                    </option>
                    <option className="py-5" value="13">
                      13
                    </option>
                    <option className="py-5" value="14">
                      14
                    </option>
                    <option className="py-5" value="15">
                      15
                    </option>
                    <option className="py-5" value="16">
                      16
                    </option>
                    <option className="py-5" value="17">
                      17
                    </option>
                    <option className="py-5" value="18">
                      18
                    </option>
                    <option className="py-5" value="19">
                      19
                    </option>
                    <option className="py-5" value="20">
                      20
                    </option>
                    <option className="py-5" value="21">
                      21
                    </option>
                    <option className="py-5" value="22">
                      22
                    </option>
                    <option className="py-5" value="23">
                      23
                    </option>
                    <option className="py-5" value="24">
                      24
                    </option>
                  </select>
                </li>
                <li className="w-[120px] sm:w-full xl:w-[100px]">
                  <select
                    onChange={(e) => getMenit(e.target.value)}
                    className="bg-gray-100 outline-none rounded-md w-full text-sm py-3"
                    name=""
                    id=""
                  >
                    <option className="py-5" value="false">
                      Menit
                    </option>
                    <option className="py-5" value="0">
                      00
                    </option>
                    <option className="py-5" value="5">
                      05
                    </option>
                    <option className="py-5" value="10">
                      10
                    </option>
                    <option className="py-5" value="15">
                      15
                    </option>
                    <option className="py-5" value="20">
                      20
                    </option>
                    <option className="py-5" value="25">
                      25
                    </option>
                    <option className="py-5" value="30">
                      30
                    </option>
                    <option className="py-5" value="35">
                      35
                    </option>
                    <option className="py-5" value="40">
                      40
                    </option>
                    <option className="py-5" value="45">
                      45
                    </option>
                    <option className="py-5" value="50">
                      50
                    </option>
                    <option className="py-5" value="55">
                      55
                    </option>
                  </select>
                </li>
                <li className="flex w-full xl:w-[150px] justify-center">
                  <button
                    type="submit"
                    className="bg-red-500 text-white font-semibold w-full text-sm p-3 rounded-md"
                  >
                    Cek siklus tidur
                  </button>
                </li>
              </ul>
              {submited && (
                <ul className="w-full 2xl:w-96 space-y-5 mt-5 2xl:mt-0">
                  {results.map((result, index) => (
                    <li
                      key={index}
                      className={`w-full bg-red-500 text-white rounded-md p-3`}
                    >
                      <div className="flex justify-between">
                        <p className="text-sm md:text-lg font-bold">
                          {result.jamTidur}:{result.menitTidur < 10 ? "0" : ""}
                          {result.menitTidur}
                        </p>
                      </div>
                      <p className="text-sm md:text-base mt-3">
                        {result.durasi} jam tidur, {result.siklus} siklus tidur
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
          <div className="px-0 lg:px-60 xl:px-96 space-y-10">
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Pengenalan kalkulator siklus tidur
              </h2>
              <p className="text-sm sm:text-base mt-2">
                Kalkulator siklus tidur adalah alat yang dirancang untuk
                membantu menghitung dan memantau pola tidur seseorang. Alat ini
                biasanya berfungsi dengan mengumpulkan informasi dari pengguna
                mengenai waktu tidur mereka, lalu menggunakan algoritma untuk
                menganalisis data tersebut dan memberikan informasi mengenai
                siklus tidur pengguna.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Tabel jam tidur</h2>
              <p className="text-sm sm:text-base mt-2">
                Sebagian orang tidak menyadari jumlah tidur yang mereka
                butuhkan, meskipun kebanyakan orang dewasa dianjurkan tidur
                tujuh hingga sembilan jam per malam, dengan kebutuhan lebih
                tinggi untuk bayi, anak-anak, dan remaja; jumlah tidur yang
                optimal dapat bervariasi tergantung kondisi kesehatan individu.
              </p>
              <table
                className="border border-collapse border-black mt-10"
                cellPadding={10}
              >
                <tr>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Kategori
                  </th>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Rentang usia
                  </th>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Rekomendasi tidur harian
                  </th>
                </tr>
                {tableJamTidur.map((dataJamTidur, index) => (
                  <tr key={index}>
                    <td className="text-sm sm:text-base border border-collapse border-black">
                      {dataJamTidur.kategori}
                    </td>
                    <td className="text-sm sm:text-base border border-collapse border-black">
                      {dataJamTidur.rentangUsia}
                    </td>
                    <td className="text-sm sm:text-base border border-collapse border-black">
                      {dataJamTidur.rekomendasi}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Cara Meningkatkan Tidur
              </h2>
              <p className="text-sm sm:text-base my-2">
                Sejumlah perubahan gaya hidup sederhana dapat diterapkan untuk
                meningkatkan kualitas tidur, yang dapat menghasilkan kesehatan
                fisik, kognitif, dan emosional yang lebih baik.
              </p>
              <ul className="text-sm sm:text-base list-disc list-inside">
                <li>Hindari kafein</li>
                <li>Kurangi konsumsi alkohol sebelum tidur</li>
                <li>Singkirkan perangkat elektronik</li>
                <li>Berolahraga setiap hari</li>
                <li>Jadikan kamar tidur gelap dan tenang</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Seputar tidur</h2>
              <div className="mt-2 grid grid-cols-12 gap-5">
                {artikel.map((data, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={data.linkArtikel}
                    className="flex flex-col justify-between items-stretch col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 2xl:col-span-4 bg-gray-100 p-3 rounded-lg h-full"
                  >
                    <div className="w-full h-40 rounded-md overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={data.linkCover}
                        alt=""
                      />
                    </div>
                    <p className="text-sm md:text-base font-medium mt-2 flex-1">
                      {data.judulArtikel}
                    </p>
                    <p className="bg-red-500 text-white text-sm md:text-base font-semibold mt-5 p-2 rounded-md text-center">
                      {data.authorArtikel}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full">
          <p className="text-sm sm:text-base text-center">
            &copy;Joan Orlando Purba | 2024
          </p>
        </footer>
      </div>
      <ToastContainer stacked />
    </>
  );
};

export default KalkulatorBmi;
