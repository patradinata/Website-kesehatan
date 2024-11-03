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
        "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16923398009235125.webp",
      linkArtikel:
        "https://www.siloamhospitals.com/informasi-siloam/artikel/diet-untuk-menurunkan-berat-badan",
      judulArtikel:
        "10 Tips Diet untuk Menurunkan Berat Badan yang Aman & Sehat",
      authorArtikel: "Siloam hospitals",
    },
    {
      linkCover: "/coverBmi2.webp",
      linkArtikel:
        "https://hellosehat.com/kebugaran/olahraga-berat-badan-turun/berbagai-olahraga-menurunkan-berat-badan/",
      judulArtikel: "11 Olahraga Rutin untuk Bantu Menurunkan Berat Badan Anda",
      authorArtikel: "Hallo Sehat",
    },
    {
      linkCover:
        "https://www.prudential.co.id/export/sites/prudential-id/id/.galleries/images/page-title/diet-1366x560.jpg",
      linkArtikel:
        "https://www.prudential.co.id/id/pulse/article/8-rekomendasi-makanan-untuk-diet-yang-patut-dicoba/",
      judulArtikel: "8 Rekomendasi Makanan untuk Diet yang Patut Dicoba",
      authorArtikel: "Prudential",
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
              className="flex justify-between items-end"
              onSubmit={getWaktu}
            >
              <ul className="flex items-end gap-5">
                <li>
                  <select
                    onChange={(e) => getJam(e.target.value)}
                    className="bg-gray-100 outline-none rounded-md px-5 py-3"
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
                <li>
                  <select
                    onChange={(e) => getMenit(e.target.value)}
                    className="bg-gray-100 outline-none rounded-md px-5 py-3"
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
                <li className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-red-500 text-white font-semibold w-full p-3 rounded-md"
                  >
                    Cek siklus tidur
                  </button>
                </li>
              </ul>
              {submited && (
                <ul className="space-y-5">
                  {results.map((result, index) => (
                    <li
                      key={index}
                      className={`w-72 bg-red-${
                        500 + index * 100
                      } text-white rounded-md p-3`}
                    >
                      <div className="flex justify-between">
                        <p className="text-lg font-bold">
                          {result.jamTidur}:{result.menitTidur < 10 ? "0" : ""}
                          {result.menitTidur}
                        </p>
                        <p className="text-lg font-bold">Disarankan</p>
                      </div>
                      <p className="mt-3">
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
              <h2 className="text-lg sm:text-xl font-bold">Pengenalan BMI</h2>
              <p className="text-sm sm:text-base mt-2">
                BMI (Body Mass Index) atau Indeks Massa Tubuh adalah ukuran yang
                digunakan untuk menilai apakah berat badan seseorang
                proporsional dengan tinggi badannya. BMI digunakan sebagai
                indikator apakah seseorang berada dalam kategori berat badan
                yang sehat, kekurangan berat badan, kelebihan berat badan, atau
                obesitas.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Tabel BMI</h2>
              <p className="text-sm sm:text-base mt-2">
                Ini adalah berat badan yang direkomendasikan Organisasi
                Kesehatan Dunia (WHO) berdasarkan nilai BMI. Ini digunakan untuk
                pria dan wanita.
              </p>
              <table
                className="border border-collapse border-black mt-10"
                cellPadding={10}
              >
                <tr>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    BMI
                  </th>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Klasifikasi
                  </th>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    {"<"} 18,5
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Underweight
                  </td>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    18,5 - 24,9
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Normal
                  </td>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    25 - 29,9
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Overweight
                  </td>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    30 - 25
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Obesitas kelas I
                  </td>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    35 - 40
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Obesitas kelas II
                  </td>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    {">"} 40
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Obesitas kelas III
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Grafik </h2>
              <p className="text-sm sm:text-base mt-2">
                Ini adalah grafik kategori BMI berdasarkan data Organisasi
                Kesehatan Dunia. Garis putus-putus mewakili subdivisi dalam
                kategorisasi utama.
              </p>
              <img src="/grafikBmi.svg" alt="" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Resiko overweight
              </h2>
              <p className="text-sm sm:text-base my-2">
                Kelebihan berat badan meningkatkan risiko sejumlah penyakit dan
                kondisi kesehatan serius. Di bawah ini adalah daftar risiko
                tersebut:
              </p>
              <ul className="text-sm sm:text-base list-disc list-inside">
                <li>Hipertensi (Tekanan Darah Tinggi)</li>
                <li>Kolesterol Tinggi</li>
                <li>Gangguan Pernapasan (Asma dan Sesak Napas)</li>
                <li>Penyakit Ginjal Kronis</li>
                <li>Masalah Sendi dan Tulang (Osteoarthritis)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Resiko underweight
              </h2>
              <p className="text-sm sm:text-base my-2">
                Kekurangan berat badan mempunyai risiko tersendiri, seperti yang
                tercantum di bawah ini:
              </p>
              <ul className="text-sm sm:text-base list-disc list-inside">
                <li>Sistem Kekebalan Tubuh yang Lemah</li>
                <li>Kerapuhan Tulang (Osteoporosis)</li>
                <li>Kehilangan Massa Otot</li>
                <li>Anemia</li>
                <li>Gangguan Pertumbuhan pada Anak dan Remaja</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Formula BMI</h2>
              <p className="text-sm sm:text-base my-2">
                Di bawah ini rumus yang digunakan untuk menghitung BMI dalam
                Sistem Satuan Internasional (SI)
              </p>
              <div className="my-10">
                <td>
                  <table cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td>BMI=</td>
                        <td>
                          <table cellSpacing="" cellPadding="0">
                            <tbody>
                              <tr>
                                <td className="text-center">berat (kg)</td>
                              </tr>
                              <tr>
                                <td
                                  className="bg-black"
                                  width="100"
                                  height="1"
                                ></td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  tinggi<sup>2</sup> (m)
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td>&nbsp;=</td>
                        <td>
                          <table cellSpacing="0" cellPadding="0">
                            <tbody>
                              <tr>
                                <td className="text-center">70</td>
                              </tr>
                              <tr>
                                <td
                                  className="bg-black"
                                  width="50"
                                  height="1"
                                ></td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  1.72<sup>2</sup>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td>&nbsp;= 23.66</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Seputar BMI</h2>
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
      <ToastContainer />
    </>
  );
};

export default KalkulatorBmi;
