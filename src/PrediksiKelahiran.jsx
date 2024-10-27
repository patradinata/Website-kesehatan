import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrediksiKelahiran = () => {
  let [tanggal, setTanggal] = useState(false);
  const [tanggalHpht, setTanggalHpht] = useState();
  const [usiaKehamilan, setUsiaKehamilan] = useState();
  const [prediksiKelahiran, setPrediksiKelahiran] = useState();
  const [formatUsiaJanin, setFormatUsiaJanin] = useState();

  const kalkulasiPrediksiKelahiran = (e) => {
    e.preventDefault();

    if (tanggal == false) {
      return toast.error("tolong masukkan tanggal");
    }

    const date = new Date(tanggal);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    let formattedDate = date.toLocaleDateString("id-ID", options);

    setTanggalHpht(formattedDate);

    tanggal = tanggal.split("-");

    const hariHpht = tanggal[2];
    const tanggalSekarang = new Date().getDate();

    let selisihHari = tanggalSekarang - hariHpht;

    selisihHari < 7 ? setFormatUsiaJanin("hari") : setFormatUsiaJanin("minggu");
    selisihHari = (tanggalSekarang - hariHpht) / 10;

    const bulanHpht = tanggal[1];
    const bulanSekarang = new Date().getMonth() + 1;
    const selisihBulan = bulanSekarang - bulanHpht;

    function getMonthName(monthIndex) {
      const monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      return monthNames[monthIndex - 1];
    }

    let day = Number.parseInt(tanggal[2]) + 7;
    let month = Number.parseInt(tanggal[1]) - 3;
    let year = Number.parseInt(tanggal[0]) + 1;

    if (month <= 0) {
      month += 12;
      year -= 1;
    }

    let formattedDay = day.toString().padStart(2, "0");
    let monthName = getMonthName(month);

    let prediksiKelahiran = `${formattedDay} ${monthName} ${year}`;

    setUsiaKehamilan(
      Math.ceil(selisihBulan * 4 + (1 * selisihBulan) / 3 + selisihHari)
    );
    setPrediksiKelahiran(prediksiKelahiran);
  };


  return (
    <>
      <div className="p-5 flex flex-col gap-y-5">
        <div className="flex">
          <Link
            className="flex items-center gap-x-1 bg-blue-600 px-5 py-2 rounded-3xl text-white"
            to="/"
          >
            <p className="text-xl font-semibold">Back</p>
          </Link>
        </div>
        <div className="h-0 lg:h-[400px] backgroundHamil bg-no-repeat bg-cover bg-center flex justify-center items-center"></div>
        <div className="space-y-10">
          <h1 className="text-xl lg:text-3xl font-extrabold text-center">
            Prediksi Kelahiran
          </h1>
          <div className="px-0 lg:px-60 xl:px-96 space-y-10">
            <form onSubmit={kalkulasiPrediksiKelahiran}>
              <ul className="flex justify-between">
                <li className="flex flex-col items-start gap-y-5">
                  <label htmlFor="">Masukkan HPHT</label>
                  <input
                    onChange={(e) => setTanggal(e.target.value)}
                    className="bg-gray-100 p-2 rounded-md"
                    type="date"
                  />
                  <button
                    className="w-full bg-blue-600 text-white font-medium py-2 rounded-md"
                    type="submit"
                  >
                    submit
                  </button>
                </li>
                {tanggalHpht ? (
                  <li>
                    <table>
                      <tr>
                        <td>HPHT</td>
                        <td className="px-5">:</td>
                        <td>{tanggalHpht}</td>
                      </tr>
                      <tr>
                        <td>prediksi kelahiran</td>
                        <td className="px-5">:</td>
                        <td>{prediksiKelahiran}</td>
                      </tr>
                      <tr>
                        <td>perkiraan usia janin</td>
                        <td className="px-5">:</td>
                        <td>{usiaKehamilan + " " + formatUsiaJanin}</td>
                      </tr>
                    </table>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </form>
            <div>
              <h2 className="text-xl font-bold">Pengenalan BMI</h2>
              <p className="mt-2">
                BMI (Body Mass Index) atau Indeks Massa Tubuh adalah ukuran yang
                digunakan untuk menilai apakah berat badan seseorang
                proporsional dengan tinggi badannya. BMI digunakan sebagai
                indikator apakah seseorang berada dalam kategori berat badan
                yang sehat, kekurangan berat badan, kelebihan berat badan, atau
                obesitas.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Tabel BMI</h2>
              <p className="mt-2">
                Ini adalah berat badan yang direkomendasikan Organisasi
                Kesehatan Dunia (WHO) berdasarkan nilai BMI. Ini digunakan untuk
                pria dan wanita.
              </p>
              <table
                className="border border-collapse border-black mt-10"
                cellPadding={10}
              >
                <tr>
                  <th className="border border-collapse border-black">BMI</th>
                  <th className="border border-collapse border-black">
                    Klasifikasi
                  </th>
                </tr>
                <tr>
                  <td className="border border-collapse border-black">
                    {"<"} 18,5
                  </td>
                  <td className="border border-collapse border-black">
                    Underweight
                  </td>
                </tr>
                <tr>
                  <td className="border border-collapse border-black">
                    18,5 - 24,9
                  </td>
                  <td className="border border-collapse border-black">
                    Normal
                  </td>
                </tr>
                <tr>
                  <td className="border border-collapse border-black">
                    25 - 29,9
                  </td>
                  <td className="border border-collapse border-black">
                    Overweight
                  </td>
                </tr>
                <tr>
                  <td className="border border-collapse border-black">
                    30 - 25
                  </td>
                  <td className="border border-collapse border-black">
                    Obesitas kelas I
                  </td>
                </tr>
                <tr>
                  <td className="border border-collapse border-black">
                    35 - 40
                  </td>
                  <td className="border border-collapse border-black">
                    Obesitas kelas II
                  </td>
                </tr>
                <tr>
                  <td className="border border-collapse border-black">
                    {">"} 40
                  </td>
                  <td className="border border-collapse border-black">
                    Obesitas kelas III
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <h2 className="text-xl font-bold">Grafik </h2>
              <p className="mt-2">
                Ini adalah grafik kategori BMI berdasarkan data Organisasi
                Kesehatan Dunia. Garis putus-putus mewakili subdivisi dalam
                kategorisasi utama.
              </p>
              <img src="/grafikBmi.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Resiko overweight</h2>
              <p className="my-2">
                Kelebihan berat badan meningkatkan risiko sejumlah penyakit dan
                kondisi kesehatan serius. Di bawah ini adalah daftar risiko
                tersebut:
              </p>
              <ul className="list-disc list-inside">
                <li>Hipertensi (Tekanan Darah Tinggi)</li>
                <li>Kolesterol Tinggi</li>
                <li>Gangguan Pernapasan (Asma dan Sesak Napas)</li>
                <li>Penyakit Ginjal Kronis</li>
                <li>Masalah Sendi dan Tulang (Osteoarthritis)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Resiko underweight</h2>
              <p className="my-2">
                Kekurangan berat badan mempunyai risiko tersendiri, seperti yang
                tercantum di bawah ini:
              </p>
              <ul className="list-disc list-inside">
                <li>Sistem Kekebalan Tubuh yang Lemah</li>
                <li>Kerapuhan Tulang (Osteoporosis)</li>
                <li>Kehilangan Massa Otot</li>
                <li>Anemia</li>
                <li>Gangguan Pertumbuhan pada Anak dan Remaja</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Formula BMI</h2>
              <p className="my-2">
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
          </div>
        </div>
        <footer className="w-full">
          <p className="text-center">&copy;Joan Orlando Purba | 2024</p>
        </footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default PrediksiKelahiran;
