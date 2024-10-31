import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DatePicker } from "antd";

const PrediksiKelahiran = () => {
  let [tanggal, setTanggal] = useState(false);
  const [tanggalHpht, setTanggalHpht] = useState();
  const [usiaKehamilan, setUsiaKehamilan] = useState();
  const [prediksiKelahiran, setPrediksiKelahiran] = useState();
  const [formatUsiaJanin, setFormatUsiaJanin] = useState();

  const handleDatePicker = (date, dateString) => {
    setTanggal(dateString);
  };

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

  const artikel = [
    {
      linkCover:
        "https://d1bpj0tv6vfxyp.cloudfront.net/articles/9b37a862-40a9-46cc-a17c-e700dd292bb6_article_image_url.webp",
      linkArtikel:
        "https://www.halodoc.com/artikel/cukupi-kebutuhan-nutrisi-ibu-hamil-dengan-5-makanan-ini?srsltid=AfmBOoqEYhxwVX8J43c6PMQRXDwHeyfajNNnQhnwkGWsGXtyliaNUwXF",
      judulArtikel: "Cukupi Kebutuhan Nutrisi Ibu Hamil dengan 5 Makanan Ini",
      authorArtikel: "Halodoc",
    },
    {
      linkCover:
        "https://sehatnegeriku.kemkes.go.id/wp-content/uploads/2024/06/Olahraga-Bagi-Ibu-Hamil_Foto-Shutterstock-700x536.jpg",
      linkArtikel:
        "https://sehatnegeriku.kemkes.go.id/baca/blog/20240626/4445835/olahraga-bagi-ibu-hamil/#:~:text=Ibu%20hamil%20pada%20trimester%20pertama,kondisi%20perut%20ibu%20telah%20membesar.",
      judulArtikel: "Olahraga bagi Ibu Hamil",
      authorArtikel: "Sehat Negriku",
    },
    {
      linkCover:
        "https://www.prenagen.com/images/uploads/1569219946-6-cara-menjaga-bayi-dalam-kandungan-agar-selalu-sehat-dan-kuat.jpg",
      linkArtikel:
        "https://www.prenagen.com/id/6-cara-menjaga-bayi-dalam-kandungan-agar-selalu-sehat-dan-kuat",
      judulArtikel: "Tips Agar Janin Sehat dan Sempurna Hingga Dilahirkan",
      authorArtikel: "Prenagen",
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
        <div className="h-0 lg:h-[400px] backgroundHamil bg-no-repeat bg-cover bg-center flex justify-center items-center"></div>
        <div className="space-y-10">
          <h1 className="text-xl lg:text-3xl font-extrabold text-center">
            Prediksi Kelahiran
          </h1>
          <div className="px-0 lg:px-60 xl:px-96 space-y-10">
            <form onSubmit={kalkulasiPrediksiKelahiran}>
              <ul className="flex flex-col sm:flex-row justify-between gap-y-5">
                <li className="flex flex-col items-start gap-y-5">
                  <label htmlFor="">Masukkan HPHT</label>
                  <DatePicker className="w-full" onChange={handleDatePicker} />
                  <button
                    className="w-full bg-red-600 text-white font-medium py-2 rounded-md"
                    type="submit"
                  >
                    submit
                  </button>
                </li>
                {tanggalHpht ? (
                  <li className="bg-gray-100 sm:bg-transparent p-3 rounded-md">
                    <table>
                      <tr>
                        <td className=" text-sm sm:text-base">HPHT</td>
                        <td className="px-5 text-sm sm:text-base">:</td>
                        <td className=" text-sm sm:text-base">{tanggalHpht}</td>
                      </tr>
                      <tr>
                        <td className=" text-sm sm:text-base">
                          prediksi kelahiran
                        </td>
                        <td className="px-5">:</td>
                        <td className=" text-sm sm:text-base">
                          {prediksiKelahiran}
                        </td>
                      </tr>
                      <tr>
                        <td className=" text-sm sm:text-base">
                          perkiraan usia janin
                        </td>
                        <td className="px-5 text-sm sm:text-base">:</td>
                        <td className=" text-sm sm:text-base">
                          {usiaKehamilan + " " + formatUsiaJanin}
                        </td>
                      </tr>
                    </table>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </form>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Pengenalan HPHT</h2>
              <p className="text-sm sm:text-base mt-2">
                HPHT adalah singkatan dari Hari Pertama Haid Terakhir. HPHT
                digunakan untuk menghitung usia kehamilan dan memperkirakan
                tanggal persalinan. HPHT merupakan salah satu cara yang umum
                digunakan untuk menghitung usia kehamilan, selain perhitungan
                tanggal ovulasi dan pemeriksaan USG. Cara menghitung usia
                kehamilan dengan HPHT adalah dengan menghitung dari HPHT hingga
                tanggal saat ini.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Pengenalan Usia Janin dan Perkiraan Kelahiran
              </h2>
              <p className="text-sm sm:text-base mt-2">
                Usia janin dan perkiraan waktu kelahiran adalah cara untuk
                mengetahui perkembangan janin dalam kandungan dan menentukan
                kapan kemungkinan bayi akan lahir. Informasi ini sangat berguna
                bagi ibu hamil dan tenaga medis untuk memantau kesehatan serta
                pertumbuhan janin.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Tabel Usia Janin dan Perkembangan
              </h2>
              <p className="text-sm sm:text-base mt-2">
                Ini adalah tabel perkiraan perkembangan janin berdasarkan usia
                kehamilan dalam minggu:
              </p>
              <table
                className="border border-collapse border-black mt-10"
                cellPadding={10}
              >
                <tr>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Usia Kehamilan (Minggu)
                  </th>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Perkembangan Janin
                  </th>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    4–12 minggu
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Pembentukan organ dasar janin
                  </td>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    13–24 minggu
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Perkembangan tulang dan otot
                  </td>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    25–36 minggu
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Meningkatnya berat dan panjang janin
                  </td>
                </tr>
                <tr>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    37–40 minggu
                  </td>
                  <td className="text-sm sm:text-base border border-collapse border-black">
                    Janin sudah siap dilahirkan
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Risiko Kesehatan Berdasarkan Usia Janin
              </h2>
              <p className="text-sm sm:text-base my-2">
                Usia kehamilan yang terlalu dini atau terlambat memiliki risiko
                kesehatan tertentu. Berikut beberapa risiko kesehatan:
              </p>
              <ul className="list-disc list-inside text-sm sm:text-base  my-5">
                <p className="font-bold">Kelahiran Dini (Prematur)</p>
                <li>Risiko gangguan pernapasan</li>
                <li>Sistem kekebalan tubuh yang belum matang</li>
                <li>Risiko gangguan pencernaan dan perkembangan</li>
              </ul>
              <ul className="list-disc list-inside">
                <p className="font-bold">Kehamilan Lewat Waktu (Post-Term)</p>
                <li>Pertumbuhan janin yang berlebihan (makrosomia)</li>
                <li>Risiko komplikasi saat persalinan</li>
                <li>Plasenta yang mungkin kurang berfungsi dengan baik</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Formula Menghitung Perkiraan Kelahiran
              </h2>
              <p className="text-sm sm:text-base my-2">
                Perkiraan tanggal kelahiran dapat dihitung dengan rumus sebagai
                berikut.
              </p>
              <div className="flex flex-col items-start space-y-5 mt-5">
                <code className="w-full bg-gray-200 text-sm sm:text-base  p-3 rounded-md">
                  HPHT + 1 tahun = x
                </code>
                <code className="w-full bg-gray-200 text-sm sm:text-base  p-3 rounded-md">
                  x + 7 hari = y
                </code>
                <code className="w-full bg-gray-200 text-sm sm:text-base  p-3 rounded-md">
                  y - 3 bulan = tanggal kelahiran
                </code>
                <p className="text-sm sm:text-base my-5">Contoh :</p>
                <code className="w-full bg-gray-200 text-sm sm:text-base  p-3 rounded-md">
                  12 Juni 2024 + 1 tahun = 12 Juni 2025
                </code>
                <code className="w-full bg-gray-200 text-sm sm:text-base  p-3 rounded-md">
                  12 Juni 2025 + 7 hari = 19 Juni 2025
                </code>
                <code className="w-full bg-gray-200 text-sm sm:text-base  p-3 rounded-md">
                  19 Juni 2025 - 3 bulan = 19 Maret 2025
                </code>
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Seputar kehamilan
              </h2>
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

export default PrediksiKelahiran;
